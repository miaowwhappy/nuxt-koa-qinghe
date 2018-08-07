<template>
	<div class="wrap">
		<div class="coupon-item" v-for="item in couponGroup" @click="useCoupon(item)">
			<div class="coupon-main">
				<div>
					<p :class="{gray:item.type != 0}">{{item.limit_name}}</p>
					<p :class="{gray:item.type != 0}">{{item.limit_other_name}}</p>
				</div>
				<div :class="{gray:item.type != 0}">
					<span>¥</span>{{item.money}}
				</div>
			</div>
			<div class="coupon-side" :class="{gray:item.type != 0}">
				有效期至{{item.userful_life}}
				<span v-if="item.type == 1">(已过期)</span>
				<span v-else-if="item.type == 2">(已使用)</span>
			</div>
		</div>
	</div>
</template>
<script>

export default{
	middleware: 'auth',
	async asyncData ({store}) {
		let res = await store.dispatch('getCoupon')
		return {
			couponGroup: res
		}	 
	},
	data(){
		return{
			couponGroup:[]
		}
	},
	methods: {
		useCoupon (item) {
			if(!this.$route.query.use){
				return
			}

			this.$store.commit('SET_COUPON',{
				text: item.limit_other_name,
				val: item.money
			})
			this.$router.push('/commit-order')
		}
	}
}
</script>
<style lang="sass" scoped>
@import '~assets/sass/baseColor.sass'

.wrap
	background: $base-bc-blue
	padding-top: 0.2rem
	.coupon-item 
		width: 7.1rem
		height: 2.37rem
		margin: 0 auto 0.2rem						
		background: #ffffff
		.coupon-main
			padding: 0.4rem 0.3rem 0 0.3rem 
			height: 1.75rem
			display: flex
			justify-content: space-between
			border-bottom: 1px solid rgb(238,238,238)		
			&>div:nth-of-type(1)  
				flex: none
				p:nth-of-type(1)
					font-size: 0.33rem
					line-height: 0.45rem
					color: #22252E
					margin-bottom: 0.1rem
					&.gray 
						color: #9FA3B1
				p:nth-of-type(2)
					font-size: 0.28rem
					line-height: 0.4rem
					color: #60626A
					&.gray 
						color: #9FA3B1
			&>div:nth-of-type(2) 
				flex: none
				font-size: 0.56rem
				line-height: 0.78rem
				color: #FC454C
				&.gray 
					color: #9FA3B1
				span 
					font-size: 0.32rem
		.coupon-side 
			height: 0.61rem
			line-height: 0.61rem
			font-size: 0.24rem
			color: #60626B
			padding-left: 0.3rem
			&.gray 
				color: #9FA3B1
			
</style>