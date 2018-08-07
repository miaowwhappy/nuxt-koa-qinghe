<template>
	<div class="wrap">
		<div class="success-box">
			<img src="~assets/img/success.png">
			<p>{{titleText}}</p>
			<p>{{textOne}}</p>
			<p v-if="textTwo">{{textTwo}}</p>
		</div>
		<nuxt-link class="next" :to="{path:path}" tag="button">
			<img src="~assets/img/red_paper.png" v-if="isShowRed" />
			{{buttonVal}}
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
			isShowRed = false;

		if(params.type == 'register'){
			title = '注册成功'
			titleText = '注册成功'
			textOne = '领取福利，免费体验品质保洁服务'
			buttonVal = '首页领福利'
			path = '/'
			isShowRed = true
			
		}
		if(params.type == 'reset_pw'){
			title = '重置密码成功'
			titleText = '重置密码成功'
			textOne = '领取福利，免费体验品质保洁服务'
			buttonVal = '首页领福利'
			path = '/'
			isShowRed = true
			
		}
		if(params.type == 'feedback'){
			title = '提交成功'
			titleText = '提交成功'
			textOne = '感谢您的意见，小和会做到最好的！'
			textTwo = '红包将在1-2个工作日内在公众号发给您'			
			buttonVal = '首页领福利'
			path = '/'
			isShowRed = false
		}
		if(params.type == 'evaluate'){
			title = '评价成功'
			titleText = '评价成功'
			textOne = '感谢您的意见，小和会做到最好的！'
			textTwo = '红包将在1-2个工作日内在公众号发给您'
			buttonVal = '首页领福利'
			path = '/'
			isShowRed = false			
		}
		if(params.type == 'pay'){
			title = '支付成功'
			titleText = '单次·居家保洁-家洁士'
			textOne = '订单支付成功'
			textTwo = '您可在订单管理中查看服务状态'
			buttonVal = '查看订单'
			path = '/'
			isShowRed = false			
		}
		return {
			title,
			titleText,
			textOne,
			textTwo,
			isShowRed,
			path,
			buttonVal
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
			buttonVal: ''
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
			.success-box
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
			.next
				width: 6.9rem
				height: 0.88rem
				line-height: 0.88rem
				background: #036EB8
				margin: 0 auto
				font-size: 0.34rem
				color: #ffffff
				border-radius: 0.08rem
				img
					line-height: 0.88rem
					font-size: 0.34rem
					vertical-align: middle
					height: 0.33rem 
					width: 0.24rem
</style>