import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//暂无内容，需要再加
 const store = new Vuex.Store({
  state: {
  	isLogin: false,
  	user: ''
  },
  actions: {

  },
  mutations: {
  	login(state,flag){
  		sessionStorage.setItem("isLogin", true); 
  		state.isLogin = flag ;
  	},
  	setUser(state,u){
  		state.user = u;
  		sessionStorage.setItem("user", u); 
  	},
  	logout(state,flag){
  		state.isLogin = flag ;
  		sessionStorage.clear();
  	}
  }
})


 export default store;