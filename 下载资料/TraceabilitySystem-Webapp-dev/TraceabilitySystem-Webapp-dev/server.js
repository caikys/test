process.env.VUE_ENV = 'server'
process.env.COUNT_ENV = 1
const isProd = process.env.NODE_ENV === 'production'

const fs = require('fs')
const env = require('./env')
const path = require('path')
const express = require('express')
const favicon = require('serve-favicon')
const compression = require('compression')  // 用于压缩response的中间件
const serialize = require('serialize-javascript') //序列化插件
const proxyMiddleware = require('http-proxy-middleware')  //http代理中间件
const resolve = file => path.resolve(__dirname, file)

const app = express()

let indexHTML // html-webpack-plugin生成的html
let renderer  // webpack-generated server bundle 创建的renderer
if (isProd) {
  // 作业模式下: 通过真实的fs生成server renderer和html
  renderer = createRenderer(fs.readFileSync(resolve('./dist/server-bundle.js'), 'utf-8'))
  indexHTML = parseIndex(fs.readFileSync(resolve('./dist/index.html'), 'utf-8'))
} else {
  // 开发模式下: 配置开发模式的热加载
  require('./build/setup-dev-server')(app, {
    bundleUpdated: bundle => {
      renderer = createRenderer(bundle)
    },
    indexUpdated: index => {
      indexHTML = parseIndex(index)
    }
  })
}

function createRenderer (bundle) {
  return require('vue-server-renderer').createBundleRenderer(bundle, {
    cache: require('lru-cache')({
      max: 1000,
      maxAge: 1000 * 60 * 15
    })
  })
}

function parseIndex (template) {
  const contentMarker = '<!-- APP -->'
  const i = template.indexOf(contentMarker)
  return {
    head: template.slice(0, i),
    tail: template.slice(i + contentMarker.length)
  }
}


// proxy
const proxyTable = ['/images/upload/**', '/token', '/admin/**', '/login', '/logout'];
const options = {target: env.app_url, changeOrigin: true};
proxyTable.forEach(function (context) {
  app.use(proxyMiddleware(context, options))
})
// 压缩response
app.use(compression({ threshold: 0 }))
// 使用Expires headers
const serveCache = (path, cache) => express.static(resolve(path), {
  maxAge: 315360000
})
const serveNoCache = (path, cache) => express.static(resolve(path))
app.use(favicon('./public/suyulogo.png'))
app.use('/public', serveCache('./public'))
app.use('/dist', serveNoCache('./dist'))


// ssr
app.get(['/webapp', '/webapp/**', '/'], (req, res) => {
  if (!renderer) {
    return res.end('waiting for compilation... refresh in a moment.')
  }

  res.setHeader("Content-Type", "text/html");
  const s = Date.now()

  const context = { url: req.url }
  const renderStream = renderer.renderToStream(context)

  renderStream.once('data', () => {
    if(env.is_server && indexHTML.head.indexOf(env.app_ano_url) == -1) {
      indexHTML.head = indexHTML.head.replace(/<link href="/g, '<link href="' + env.app_ano_url);
    }
    res.write(indexHTML.head)
  })

  renderStream.on('data', chunk => {
    res.write(chunk)
  })

  renderStream.on('end', () => {
    // 嵌入初始化的store
    if (context.initialState) {
      res.write(
        `<script>window.__INITIAL_STATE__=${
          serialize(context.initialState, { isJSON: true })
        }</script>`
      )
    }
    if(env.is_server && indexHTML.tail.indexOf(env.app_ano_url) == -1) {
      indexHTML.tail = indexHTML.tail.replace(/<script type="text\/javascript" src="/g, '<script type="text/javascript" src="' + env.app_ano_url);
    }
    res.end(indexHTML.tail)
    console.log(`whole request: ${Date.now() - s}ms`)
  })

  renderStream.on('error', err => {
    if (err && err.code === '404') {
      res.status(404).end('404 | Page Not Found')
      return
    }
    // 渲染错误的页面或重定向
    res.status(500).end('Internal Error 500')
    console.error(`error during render : ${req.url}`)
    console.error(err)
  })
})

const port = process.env.PORT || 8080
app.listen(port, () => {
  console.log(`server started at localhost:${port}`)
})
