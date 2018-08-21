<template>
	<div class="wrap">
		<scroll ref="scroll" class="page-view">
			<div class="page-wrapper">
				<div class="header-box item-box">
					<img src="~assets/img/banner.jpg">
					<div class="main-side">
						<p>¥99/套<span>已售12</span></p>
						<p>单次·居家保洁</p>
					</div>
				</div>
				<nuxt-link tag="div" to="/word-of-mouth" class="evaluate-box item-box">
					好评率86%<span>（12人评价）</span>	
				</nuxt-link>
				<div class="introduce-box item-box">
					<div class="title">产品介绍</div>
					<img src="~assets/img/content2.jpg">
				</div>	
				<div class="need-know item-box">
					预定须知
				</div>
				<div class="bottom-bar">
					
				</div>
			</div>
		</scroll>
		<div class="bottom-fix-side">
			<button class="contact">联系客服</button>
			<button class="commit" @click="commit">立即下单</button>
		</div>
	</div>	
</template>
<script>
import Scroll from "~/components/scroll"
export default {
	components: {
		Scroll
	},
	methods: {
		commit() {
			this.$router.push('/commit-order')
		}
	}
}
</script>
<style lang="sass" scoped>
@import '~assets/sass/baseColor.sass'

.wrap
	height: 100%
	background: $base-bc-blue
	overflow: hidden
	.page-view
		height: 100%
		.page-wrapper
			.item-box
				background-color: #ffffff
				margin-bottom: 0.2rem
			.header-box
				img
					width: 100%
					display: block
				.main-side
					padding: 0.4rem 0.3rem
					p:nth-of-type(1) 
						line-height: 0.59rem
						font-size: 0.42rem
						span
							display: inline-block
							color: #FC454C
							line-height: 0.33rem
							font-size: 0.24rem
							vertical-align: middle
							background: #FCEFEE
							padding: 0.05rem 0.1rem
							margin-left: 0.1rem
					p:nth-of-type(2) 
						line-height: 0.4rem
						font-size: 0.28rem
						margin-top: 0.2rem
			.evaluate-box
				padding: 0.3rem
				line-height: 0.4rem
				font-size: 0.28rem
				color: #22252E
				background: #ffffff url('~assets/img/home/arrow_r.png') no-repeat 95% center
				background-size: 0.4rem 0.4rem
				span
					color: #60626B 
			.introduce-box
				padding: 0.3rem
				img
					width: 100%
					min-height: 10.754rem
					display: block
				.title
					font-size: 0.28rem
					line-height: 0.4rem
					margin-bottom: 0.3rem
					color: #60626B
			.need-know
				padding: 0.3rem
				background: #ffffff url('~assets/img/home/arrow_r.png') no-repeat 95% center
				background-size: 0.4rem 0.4rem
				line-height: 0.4rem
				font-size: 0.28rem
				color: #22252E
			.bottom-bar
				height: 1.1rem
	.bottom-fix-side
		position: fixed
		width: 100%
		height: 1.1rem
		left: 0
		bottom: 0
		display: flex
		align-items: stretch
		z-index: 10
		.contact
			flex: auto
			background: #ffffff
			color: #60626B
			font-size: 0.34rem
		.commit
			flex: none
			width: 4.6rem
			background: $blue
			color: #ffffff
			font-size: 0.28rem
			font-size: 0.34rem
</style>