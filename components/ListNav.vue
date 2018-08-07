<template>
	<nav class="top-nav">
		<nuxt-link 
			tag="span" 
			v-for="(item,index) in navItem" 
			:class="{active: item.isActive}" 
			:to="item.path"
			:key="index"
		>
			{{item.name}}
		</nuxt-link>
	</nav>
</template>
<script>
export default{
	data () {
		return {
			navItem: [
				{
					name: '全部',
					path: '/mylist',
					isActive: false
				},
				{
					name: '已支付',
					path: '/mylist/haspay',
					isActive: false
				},
			],
		}
	},
	mounted () {
		this.setType( this.$route.path )
	},
	methods: {
		setType (path) {
			this.navItem.map(function(item){
				if(item.path == path){
					return item.isActive = true
				}
			})
		}
	},
}
</script>
<style lang="sass" scoped>
	.top-nav
		height: 0.88rem
		flex: none
		background: #ffffff
		display: flex
		justify-content: space-around
		font-size: 0.32rem
		color: #22252E
		align-items: center
		&>span
			flex: none
		.active
			color: #FC454C
</style>
