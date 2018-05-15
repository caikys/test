require('./bootstrap');
import store from './vuex/index.js';
import routes from './routers.js';
import { sync } from 'vuex-router-sync'

import VeeValidate from 'vee-validate';	// 表单验证插件
import messagesAr from '../../lang/zh-CN/vee-validate.js';





	Vue.use(VeeValidate, {
	    locale: 'ar',
	    dictionary: {
	        ar: {   // locale key
	            messages: messagesAr,   // Arabic messages
	        }
	    }
	});


require('./init/init')

const router = new VueRouter({
    routes
});


const app = new Vue({
    router,
    store
}).$mount('#app');
