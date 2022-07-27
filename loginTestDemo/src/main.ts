import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入axios
import axios from "axios";
/**
 * 引入自定义的mockXHR
 * 因为mockXHR不是默认导出的：export default{}
 * 所以引入时需要加大括号，这种可以引入多个
 */
import { mockXHR } from "@/mock/index";
// import { mockXHR ,mockXHR2} from "@/mock/index";
// 判断开发环境
if(process.env.NODE_ENV=="mock"){
	mockXHR();
	// mockXHR2();
}
import ElementPlus from 'element-plus' // element-plus
import 'element-plus/dist/index.css' // element-plus -style


const app = createApp(App)
app.use(store)
app.use(router)
app.provide("$axios", axios)
app.use(ElementPlus)
app.mount('#app')