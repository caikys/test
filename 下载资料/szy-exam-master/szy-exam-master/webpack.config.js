const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const projectRoot = path.resolve(__dirname, './');

let config = {

    entry: {
        index: 'assets/index.js'
    },
    output: {
        path: projectRoot + '/public/build',
        publicPath: (process.env.NODE_ENV == 'development' ? 'http://127.0.0.1:8080/public/build' : '/build/'),
        filename: 'js/[name].js',
        chunkFilename: 'js/[id].[name].js'
    },
    module: {
        //加载器配置
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            },
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /iview.src.*?js$/,
                loader: 'babel'
            },
            {
                test: /\.js$/,
                loader: 'babel',
                include: projectRoot,
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader?sourceMap')
            },
            {
                test   : /\.woff/,
                loader : 'url?prefix=font/&limit=10000&mimetype=application/font-woff'
            }, {
                test   : /\.ttf/,
                loader : 'file?prefix=font/'
            }, {
                test   : /\.eot/,
                loader : 'file?prefix=font/'
            }, {
                test   : /\.svg/,
                loader : 'file?prefix=font/'
            }
        ]
    },
    // 配置应用层的模块（要被打包的模块）解析
    resolve: {
        // 这样就无需写后缀
        extensions: ['', '.js', '.vue'],
        // 解决当出现 Node.js 模块依赖查找失败的情况
        fallback: [path.join(__dirname, '../node_modules')],
        // 路径别名
        alias: {
            'vue$': 'vue/dist/vue',
            'assets': path.resolve(__dirname, './resources/assets/js'),
            'components': path.resolve(__dirname, './resources/assets/js/components')
        }
    },
    // 用来配置 loader 模块的解析
    resolveLoader: {
        // 解决当出现 Node.js 模块依赖查找失败的情况
        fallback: [path.join(__dirname, '../node_modules')]
    },

    // vue-loader 配置
    vue: {
        // ... 其他 vue 选项
        loaders: {
            // 用 babel-loader 加载所有没有 "lang" 属性的 <script>
            js: 'babel',
            // 将vue里面的css和sass抽离出来组成一个独立的css文件
            css: ExtractTextPlugin.extract('vue-style-loader', 'css-loader'),
            sass: ExtractTextPlugin.extract('vue-style-loader', 'css-loader!sass-loader')
        }
    },

    // 插件项
    plugins: [
        new ExtractTextPlugin('css/[name].css', { allChunks: true }),
    ],

    node: {
      fs: "empty"
    }

    
}

if(process.env.NODE_ENV == 'development') {
    config = merge(config, {
        plugins: [
            new webpack.DefinePlugin({
                'process.env.NODE.ENV': "development"
            }),
            new webpack.HotModuleReplacementPlugin()
        ],
        devServer: {
            historyApiFallback: true,
            hot: true,
            inline: true,
            progress: true,
            proxy: {
                '/**': {
                    changeOrigin: true,
                    target: 'http://www.exam.com',
                    secure: false,
                }
            }
        }
    })
}else {
    config.plugins.push(
        new webpack.optimize.UglifyJsPlugin()
    )
}

module.exports = config