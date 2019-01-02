<template>
	<div class='app'>
		<!-- 路由组件 -->
		<router-view></router-view>
		<FooterGuide></FooterGuide>
	</div>
</template>
<script>
import FooterGuide from './components/FooterGuide/FooterGuide'
export default {
	components:{
		FooterGuide
	}	
}
</script>
<style lang="stylus">
	.app
		color red
</style>