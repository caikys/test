
window._ = require('lodash');
window.$ = window.jQuery = require('jquery');
window.Vue = require('vue');
window.VueRouter = require('vue-router');
window.axios = require('axios');

window.axios.defaults.headers.common = {
    'X-CSRF-TOKEN': window.Laravel.csrfToken,
    'X-Requested-With': 'XMLHttpRequest'
};


