<!-- userCenter用户中心 -->
<template>
	<div class="userCenterBg">
		<div class="userCenter">
			<!-- userInfo -->
			<div class="userInfo">
				<div style="width: 1100px;margin: 0 auto;" class="d-flex">
					<!-- avatar -->
					<div class="ava">
						<el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
							:size="90" />
					</div>
					<!-- info -->
					<div class="infoDesc">
						<p class="userName">{{$store.state.user.username}}</p>
						<p class="email">{{$store.state.user.email}}</p>
						<div class="phone">
							Tel: <span class="text-info">{{$store.state.user.phone}}</span>
						</div>
						<div class="description">
							个人描述: {{$store.state.user.description}}
						</div>
					</div>
					<!-- logOut -->
					<div class="pt-2">
						<el-button type="primary" @click="logOut" size="small" plain>退出登录</el-button>
					</div>
				</div>
			</div>
			<!-- content -->
			<div class="content">
				<!-- leftNav -->
				<div class="leftNav">
					<el-menu default-active="2" class="el-menu-vertical-demo">
						<el-sub-menu index="1">
							<template #title>
								<el-icon>
									<location />
								</el-icon>
								<span>Navigator One</span>
							</template>
							<el-menu-item-group title="Group One">
								<el-menu-item index="1-1">item one</el-menu-item>
								<el-menu-item index="1-2">item one</el-menu-item>
							</el-menu-item-group>
							<el-menu-item-group title="Group Two">
								<el-menu-item index="1-3">item three</el-menu-item>
							</el-menu-item-group>
							<el-sub-menu index="1-4">
								<template #title>item four</template>
								<el-menu-item index="1-4-1">item one</el-menu-item>
							</el-sub-menu>
						</el-sub-menu>
						<el-menu-item index="2">
							<el-icon>
								<icon-menu />
							</el-icon>
							<span>Navigator Two</span>
						</el-menu-item>
						<el-menu-item index="3" disabled>
							<el-icon>
								<document />
							</el-icon>
							<span>Navigator Three</span>
						</el-menu-item>
						<el-menu-item index="4">
							<el-icon>
								<setting />
							</el-icon>
							<span>Navigator Four</span>
						</el-menu-item>
					</el-menu>
				</div>
				<!-- rightContent -->
				<div class="rightContent">
					<p>No Data</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import {
		defineComponent,
		inject,
		reactive,
		ref
	} from "vue";
	import { useRouter } from 'vue-router'
	import { ElMessageBox, ElMessage } from 'element-plus'
	import {
		useStore
	} from "vuex"
	export default defineComponent({
		name: 'UserCenter',
		setup() {
			const router = useRouter();
			const store: any = useStore();
			function logOut(){
				ElMessageBox.confirm(
				  '您确定要退出登录吗?',
				  '提示',
				  {
				    confirmButtonText: '退出',
				    cancelButtonText: '取消',
				    type: 'warning',
				  }
				).then(() => {
					store.commit('logout')
					router.push('/')
				    ElMessage({
				      type: 'success',
				      message: '您已成功退出登录',
				    })
				  }).catch(() => {
				    ElMessage({
				      type: 'info',
				      message: '取消退出登录操作',
				    })
				  })
			}
			return{ logOut }
		}
	})
</script>

<style scoped>
	/* userCenter outBackGround */
	.userCenterBg {
		width: 100%;
		height: 100vh;
		background-color: #f4f5f5;
		background-image: url(../assets/userCenter/userCenterHeadBg.png);
		background-repeat: no-repeat;
		background-position: top;
		background-size: 1920px 150px;
	}

	.userCenter {
		width: 1200px;
		min-height: 700px;
		margin: 0 auto;
		position: relative;
		top: 100px;
	}

	/* userInfo */
	.userCenter .userInfo {
		width: 1200px;
		height: 160px;
		background-color: #fff;
		position: relative;
	}

	/* avatar */
	.userCenter .userInfo .ava {
		position: absolute;
		top: -20px
	}

	/* infodesc */
	.userCenter .userInfo .infoDesc {
		margin-left: 110px;
	}

	/* userName */
	.userCenter .userInfo .infoDesc .userName {
		font-size: 22px;
		font-weight: 500;
		color: #222226;
	}

	/* email */
	.userCenter .userInfo .infoDesc .email {
		line-height: 14px;
	}

	/* desc */
	.userCenter .userInfo .infoDesc .description {
		padding-top: 10px;
		font-size: 15px;
		color: #555666;
	}

	/* content */
	.userCenter .content {
		margin-top: 20px;
		display: flex;
	}

	.userCenter .content .leftNav {
		width: 280px;
		min-height: 550px;
		background-color: #fff;
	}
	/* rightContent */
	.userCenter .rightContent{
		width: 890px;
		min-height: 550px;
		margin-left:30px;
		background-color: #fff;
		text-align: center;
		color: #000;
		line-height: 550px;
	}
</style>
