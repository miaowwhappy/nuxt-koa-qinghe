<template>
  <div class="layout">
  	<div class="page-container">
  		<nuxt/>
  	</div>
    <nav>
    	<nuxt-link tag="a" to="/">
    		<img src="~assets/img/index/home_active.png"  v-if="type == 1">
    		<img src="~assets/img/index/home.png" v-else>
    		<p>首页</p>
    	</nuxt-link>
    	<nuxt-link tag="a" to="/mylist">
    		<img src="~assets/img/index/detailed_list_active.png" v-if="type == 2">
    		<img src="~assets/img/index/detailed_list.png"  v-else>
    		<p>我的订单</p>
    	</nuxt-link>
    	<nuxt-link tag="a" to="/home">
    		<img src="~assets/img/index/user_active.png"  v-if="type == 3">
    		<img src="~assets/img/index/user.png"  v-else>
    		<p>我的</p>
    	</nuxt-link>
    </nav>
  </div>
</template>

<script>
//只有page里有fetch和asyncData方法
export default {
	data () {
		return {
			type: null
		}
	},
	mounted () {
		this.setType(this.$route.path)
	},
	methods: {
		setType (path) {
			if(/^\/index/.test(path)||/^\/$/.test(path)){
				this.type = 1
				return 
			}
			if(/^\/mylist/.test(path)){
				this.type = 2
				return 
			}
			if(/^\/home/.test(path)){
				this.type = 3
				return 
			}
		}
	},
	watch: {
		$route(to, from){
			this.setType.call(this, to.path)
		}
	}
}
</script>

<style lang="sass" scoped>
	.layout 
		height: 100%
		.page-container
			height: 100%
			overflow: auto;		
			padding-bottom: 1.1rem	
		nav
			position: fixed
			left: 0
			bottom: 0
			height: 1.1rem
			width: 100%
			display: flex
			justify-content: space-around
			align-items: center;
			background: #f7f7fa
			border-top: 1px solid rgb(238,238,238)
			font-size: 0.24rem
			a 
				flex: none
				text-align: center
				color: #666666
				img 
					width: 0.45rem

</style>
