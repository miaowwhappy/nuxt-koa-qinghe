<template>
	<div class="wrap">
		<div class="fail-box">
			<img src="~assets/img/fail.png">
			<p>{{titleText}}</p>
			<p>{{textOne}}</p>
			<p v-if="textTwo">{{textTwo}}</p>
		</div>
		<nuxt-link class="next btn" :to="{path:path}" tag="button">
			<img src="~assets/img/red_paper.png" v-if="isShowRed" />
			{{buttonVal}}
		</nuxt-link>
		<nuxt-link class="other-next btn" :to="{path:otherButtonPath}" tag="button" v-if="otherButtonVal">
			{{otherButtonVal}}
		</nuxt-link>
	</div>
</template>
<script>
export default {
	asyncData ({params}) {
		let title = '',
			titleText = '',
			textOne = '',
			textTwo = '',
			buttonVal = '',
			path = '',
			otherButtonVal = '',
			otherButtonPath = '',
			isShowRed = false;

		if(params.type == 'pay'){
			title = '支付失败'
			titleText = '单次·居家保洁-家洁士'
			textOne = '订单支付失败'
			textTwo = '再试一次吧好不好'
			buttonVal = '重新下单'
			path = '/commit-order'
			isShowRed = false
			otherButtonVal = '回到首页'
			otherButtonPath = '/'

		}
		return {
			title,
			titleText,
			textOne,
			textTwo,
			isShowRed,
			path,
			buttonVal,
			otherButtonVal,
			otherButtonPath
		}
		 
	},
	data () {
		return {
			title: '',
			titleText: '',
			textOne: '',
			textTwo: '',
			isShowRed: true,
			path: '',
			buttonVal: '',
			otherButtonVal: '',
			otherButtonPath: '/'

		}
	},
	head () {
		return {
			title: this.title
		}
	},
}
</script>
<style lang="sass" scoped>
	body
		background: #EFF3F9
		.wrap
			text-align: center
			.fail-box
				width: 7.1rem
				min-height: 3.85rem
				padding-bottom: 0.3rem
				margin: 0.5rem auto 0
				background: #ffffff
				box-shadow: 0px 14px 28px 0px rgba(100, 162, 255, 0.22)
				border-radius: 8px
				img
					width: 2.4rem;
					margin: 0.5rem auto 0.2rem;
				p:nth-of-type(1)
					font-size: 0.32rem
					line-height: 0.45rem
					color: #22252E
				p:nth-of-type(2)
					font-size: 0.28rem
					line-height: 0.4rem
					margin-top: 0.1rem
					color: #60626B
				p:nth-of-type(3)
					font-size: 0.28rem
					line-height: 0.4rem
					margin-top: 0.62rem
					color: #60626B
			.btn 
				width: 6.9rem
				height: 0.88rem
				line-height: 0.88rem
				margin: 0 auto
				font-size: 0.34rem
				border-radius: 0.08rem
				display: block
			.next				
				background: #036EB8				
				color: #ffffff
				margin-top: 0.4rem				
				img
					line-height: 0.88rem
					font-size: 0.34rem
					vertical-align: middle
					height: 0.33rem 
					width: 0.24rem
			.other-next 
				background: #ffffff
				color: #036EB8
				border: 1px solid #036EB8
				margin-top: 0.2rem	


</style>










