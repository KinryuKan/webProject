import { createStore } from 'vuex'
export default createStore({
  state: {
	  user:{
		  token:null
	  },
	  token:false
  },
  getters: {
  },
  mutations: {
	// 初始化用户信息
	initUser(state){
		let user = window.sessionStorage.getItem('user')
		if(user){
			state.user = JSON.parse(user)
			state.token = state.user.token as any
		}
	},
	// 登录
	login(state,user){
		// 保存登录状态
		state.user = user
		state.token = user.token
		// 存储到本地存储
		window.sessionStorage.setItem('user',JSON.stringify(state.user))
		window.sessionStorage.setItem('token',state.token as any)
	},
	// 退出登录
	logout(state){
		// 清除状态
		state.user = { token:null }
		state.token = false
		// 清除本地存储
		window.sessionStorage.clear()
	},
  },
  actions: {
  },
  modules: {
  }
})
