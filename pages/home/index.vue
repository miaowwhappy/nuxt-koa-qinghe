<template>
	<div class="wrap">
		<div class="user-info">
			<div>
				<img src="~assets/img/home/user.png">
			</div>
			<div>
				<p>{{user.user}}</p>
				<p>ID:{{user._id}}</p>
			</div>
		</div>	
		<div class="item-box">
			<nuxt-link class="item-li" to="/home/clean-record">
				<img src="~assets/img/home/jl.png">保洁记录
			</nuxt-link>
		</div>
		<div class="item-box">
			<nuxt-link class="item-li" to="/home/coupon">
				<img src="~assets/img/home/yhq.png">优惠券
			</nuxt-link>
			<nuxt-link class="item-li" to="/home/nanny-orders">
				<img src="~assets/img/home/bmdd.png">保姆订单
			</nuxt-link>
			<nuxt-link class="item-li" to="/home/goods-orders">
				<img src="~assets/img/home/spdd.png">商品订单
			</nuxt-link>
			<nuxt-link class="item-li" to="/feedback">
				<img src="~assets/img/home/hb.png">提建议领红包
			</nuxt-link>
		</div>
		<div class="item-box">
			<nuxt-link class="item-li" to="/agreements">
				<img src="~assets/img/home/xy.png">协议
			</nuxt-link>
		</div>
	</div>
</template>
<script>
export default{
	middleware: 'auth',
	data () {
		return {
			
		}
	},	
	computed:{
		user () {
			return this.$store.state.authUser
		}
	},
	layout: 'incf'
}
</script>
<style lang="sass" scoped>
@import '~assets/sass/baseColor.sass'



.wrap
	height: 100%
	background: $base-bc-blue
	.user-info
		display: flex
		align-items: center
		background: #ffffff
		height: 2.33rem
		padding-left: 0.3rem
		&>div 
			flex: none
		&>div:nth-of-type(1)
			width: 1.23rem
			height: 1.23rem
			margin-right: 0.24rem
			img
				width: 1.23rem
				height: 1.23rem
		p:nth-of-type(1)
			font-size: 0.42rem
			line-height: 0.59rem
		p:nth-of-type(2)
			font-size: 0.28rem
			line-height: 0.4rem
			margin-top: 0.05rem
			color: #60626B
	.item-box
		margin-top: 0.2rem
		background: #ffffff
		vertical-align: center
		.item-li 
			display: flex
			align-items: center
			height: 1.1rem
			width: 100%
			font-size: 0.32rem
			color: #22252E
			line-height: 1.1rem
			background: url('~assets/img/home/arrow_r.png') no-repeat 90% center
			background-size: 0.48rem 0.48rem						
			img 
				width: 0.48rem
				height: 0.48rem
				flex: none
				margin-left: 0.3rem
				margin-right: 0.1rem
			&:not(:last-child)
				border-bottom: 1px solid rgb(238,238,238)
</style>






