import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Login',
    component: ()=>import('../views/login.vue')
  },
  {
    path: '/userCenter',
    name: 'UserCenter',
    component: ()=>import('../views/userCenter.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
// 全局前置守卫
router.beforeEach((to, from, next) => {
	// 获取token
	let token = window.sessionStorage.getItem('token')
	let user = window.sessionStorage.getItem('user')
	if(token){ // 已登录
		// 防止重复登录
		if(to.path === '/login'){
			return next({name:from.name ? from.name : '/'})
		}
		next();
	} else {
		// 跳过登录页验证
		if(to.path === '/login'){
			return next();
		}
		// 未登录
		next()
	}
})
export default router
