<template>
	<div class="login">
		<!-- login_main -->
		<div class="loginMain">
			<!-- header -->
			<div class="header">
				Login
			</div>
			<!-- login_form -->
			<div class="loginForm">
				<el-form :model="form">
					<el-form-item>
						<el-input v-model="form.username" placeholder="手机号/用户名/邮箱" size="large"/>
					</el-form-item>
					<el-form-item>
						<el-input v-model="form.password" placeholder="密码" size="large" type="password"/>
					</el-form-item>
				</el-form>
				<span class="float-right restPwd">忘记密码?</span>
				<el-button type="primary" @click="login" class="w-100" 
				size="large" color="#556deb" :loading="loginLoading">{{loginLoading ? '登录中....' : '登录'}}</el-button>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, inject, reactive, ref } from "vue";
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
import { useStore } from "vuex"
export default defineComponent({
  name: "App",
  components: {},
  setup() {
	const router = useRouter()
    const $axios: any = inject("$axios")
	const store: any = useStore()
	// loginStatusLoading
	const loginLoading = ref(false)
	// loginForm
	let form = reactive({
	  username:'',
	  password:''
	});
	// login
	function login(){
		loginLoading.value = true
        $axios.post("/auth/user/getUser", {
			username:form.username,
			password:form.password
		}).then((res: any) => {
		 loginLoading.value = false
		 if(res.data.code === 400){
			 return ElMessage.error(res.data.message)	 
		 }
		 let data:any = res.data.data
		 store.commit('login',data)
		 router.push('/userCenter')
		 ElMessage.success(res.data.message)	
         console.log("结果2", res);
        }).catch((err: any) => {
		 loginLoading.value = false
         console.log("错误2", err);
        });
	}
    return { form,login,loginLoading };
  },
});
</script>
<style>
	/* loginDiv */
	.login{
		width: 1200px;
		min-height:700px;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0 auto;
	}
	/* loginMain */
	.login .loginMain{
		width:350px;
		height:350px;
		border: 1px solid #eee;
		padding: 20px;
	}
	/* loginHeader */
	.login .loginMain .header{
		text-align: center;
		font-size: 45px;
		font-weight: bold;
		color: #556deb;
		margin-bottom:20px;
	}
	.login .loginMain .loginForm{
		
	}
	.login .loginMain .loginForm .restPwd{
		color: #727bc8;
		font-size:14px;
		position: relative;
		bottom:10px;
		cursor: pointer;
	}
</style>
