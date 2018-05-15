/**
 * 路由
 */

//=============================顶层组件====================================
//---------------------------最顶层组件----------------------------------
const index = resolve => {
    require.ensure(['./views/index.vue'], () =>{
        resolve(require('./views/index.vue'));
    }, 'index');
};

const login = resolve => {
    require.ensure(['./views/login.vue'], () =>{
        resolve(require('./views/login.vue'));
    }, 'login');
};
const register = resolve => {
    require.ensure(['./views/register.vue'], () =>{
        resolve(require('./views/register.vue'));
    }, 'register');
};


const fourOFour = resolve => {
    require.ensure(['./views/404.vue'], () =>{
        resolve(require('./views/404.vue'));
    }, 'fourOFour');
};


//=============================后台管理====================================

//---------------------------管理----------------------------------
const basic = resolve => {
    require.ensure(['./views/basic.vue'], () =>{
        resolve(require('./views/basic.vue'));
    }, 'basic');
};

const user = resolve => {
    require.ensure(['./components/basic/user.vue'], () =>{
        resolve(require('./components/basic/user.vue'));
    }, 'user');
};

const question = resolve => {
    require.ensure(['./components/basic/question.vue'], () =>{
        resolve(require('./components/basic/question.vue'));
    }, 'question');
};

const subject = resolve => {
    require.ensure(['./components/basic/subject.vue'], () =>{
        resolve(require('./components/basic/subject.vue'));
    }, 'subject');
};

const position = resolve => {
    require.ensure(['./components/basic/position.vue'], () =>{
        resolve(require('./components/basic/position.vue'));
    }, 'position');
};

//=============================题目管理====================================
const submanage = resolve => {
    require.ensure(['./components/basic/submanage.vue'], () =>{
        resolve(require('./components/basic/submanage.vue'));
    }, 'submanage');
};

const subselect = resolve => {
    require.ensure(['./components/basic/subselect.vue'], () =>{
        resolve(require('./components/basic/subselect.vue'));
    }, 'subselect');
};

const subfill = resolve => {
    require.ensure(['./components/basic/subfill.vue'], () =>{
        resolve(require('./components/basic/subfill.vue'));
    }, 'subfill');
};

const subedit = resolve => {
    require.ensure(['./components/basic/subedit.vue'], () =>{
        resolve(require('./components/basic/subedit.vue'));
    }, 'subedit');
};

const subask = resolve => {
    require.ensure(['./components/basic/subask.vue'], () =>{
        resolve(require('./components/basic/subask.vue'));
    }, 'subask');
};

//=============================定义路由====================================
const routes = [

    {
        path: '/',
        name: 'index',
        component: index,
        children: [
            {
                path: 'basic',
                component: basic,
                children: [
                    {
                        path: 'user',
                        name: 'user',
                        component: user,
                    },
                    {
                        path: 'question',
                        name: 'question',
                        component: question,
                    },
                    {
                        path: 'subject',
                        name: 'subject',
                        component: subject,
                        children: [
                            {
                                path: 'submanage',
                                name: 'submanage',
                                component: submanage,
                            },
                            {
                                path: 'subselect',
                                name: 'subselect',
                                component: subselect,
                            },
                            {
                                path: 'subfill',
                                name:'subfill',
                                component: subfill,
                            },
                            {
                                path: 'subedit',
                                name: 'subedit',
                                component: subedit,
                            },
                            {
                                path: 'subask',
                                name: 'subask',
                                component: subask,
                            },

                        ]
                    },
                    {
                        path: 'position',
                        name: 'position',
                        component: position,
                    },
                ]
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: login
    },
    {
        path: '/register',
        name: 'register',
        component: register
    },
    {
        path: '/404',
        name: '404',
        component: fourOFour
    }
	
    
];

export default routes;