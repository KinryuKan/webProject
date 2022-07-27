<template>
  <router-view/>
</template>

<script lang="ts">
import { defineComponent, inject, reactive, ref } from "vue";
import { useStore } from "vuex"
export default defineComponent({
	setup(){
		const store: any = useStore()
		// init userInfo
		store.commit('initUser')
	}
})
</script>


<style>
@import url("./assets/css/animate.min.css");
@import url("./assets/css/bootstrap.min.css");
</style>
