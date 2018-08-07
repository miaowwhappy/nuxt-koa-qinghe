<template>
  <div class="layout">
  	<div class="page-container">
  		<nuxt/>
  	</div>
    <nav>
    	<nuxt-link tag="a" to="/">
    		<div class="img-container index"></div>
    		<p>首页</p>
    	</nuxt-link>
    	<nuxt-link tag="a" to="/mylist">
    		<div class="img-container mylist"></div>
    		<p>我的订单</p>
    	</nuxt-link>
    	<nuxt-link tag="a" to="/home">
    		<div class="img-container home"></div>
    		<p>我的</p>
    	</nuxt-link>
    </nav>
  </div>
</template>

<script>
//只有page里有fetch和asyncData方法
export default {
 
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
			.index
				width: 0.45rem
				height: 0.45rem
				background: url('~assets/img/index/home.png')
				background-size: 0.45rem 0.45rem
				margin: 0 auto
			.mylist
				width: 0.45rem
				height: 0.45rem
				background: url('~assets/img/index/detailed_list.png')
				background-size: 0.45rem 0.45rem
				margin: 0 auto
			.home
				width: 0.45rem
				height: 0.45rem
				background: url('~assets/img/index/user.png')
				background-size: 0.45rem 0.45rem
				margin: 0 auto
			.nuxt-link-exact-active
				color: #6998C9
				.index
					background: url('~assets/img/index/home_active.png')
					background-size: 0.45rem 0.45rem
				.mylist
					background: url('~assets/img/index/detailed_list_active.png')
					background-size: 0.45rem 0.45rem
				.home
					background: url('~assets/img/index/user_active.png')
					background-size: 0.45rem 0.45rem

</style>
