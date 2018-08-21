<template>
<scroll>
	<div class="wrap">
		<div class="top">
			<div class="where">
				<img src="~assets/img/index/where.png">珠海
			</div>
			<img src="~assets/img/index/logo.png">
		</div>
		<div class="slide" ref="slide">
			<div class="slide-group" ref="slideGroup">
				<div class="slide-item">
					<img src="~assets/img/index/banner-1.jpg">
				</div>
				<div class="slide-item">
					<img src="~assets/img/index/banner-2.jpg">
				</div>
			</div>
			<nav class="dots">
				<span class="dot" :class="{active: currentPageIndex === index}" v-for="(item, index) in dots"></span>
			</nav>
		</div>
		<nav class="center-nav">
			<nuxt-link class="link-item" tag="div" to="/home/coupon">
				<img src="~assets/img/index/yhq.png">
				优惠神券
			</nuxt-link>
			<nuxt-link class="link-item" tag="div" to="/feedback">
				<img src="~assets/img/index/yjfk.png">
				意见反馈
			</nuxt-link>
			<nuxt-link class="link-item" tag="div" to="/home/clean-record">
				<img src="~assets/img/index/bjjl.png">
				保洁记录
			</nuxt-link>
			<nuxt-link class="link-item" tag="div" to="/about">
				<img src="~assets/img/index/ljqh.png">
				了解清和
			</nuxt-link>
		</nav>
		<div class="content-box">
			<ul>
				<nuxt-link tag="li" v-for="(item,index,key) in serviceType" :key="key" to="detail">
					<img :src="item.imgUrl">
					<div class="detail">
						<p>{{item.name}}</p>
						<p>{{item.type}}</p>
						<p><span>{{item.tip}}</span></p>					
						<p>¥{{item.money}}/套</p>
					</div>
					<span class="sail-times">已售{{item.sailTimes}}次</span>
				</nuxt-link>
			</ul>
		</div>	
	</div>
</scroll>
</template>
<script>
import BScroll from 'better-scroll'
import Scroll from "~/components/scroll"

export default {

	layout: 'incf',
	components: {
		Scroll
	},
	data () {
		return {
			loop: true,
			dots: [],
			currentPageIndex: 0,
			serviceType:[
				{
					imgUrl: '/img/index/1m_w1.png',
					name: '单次·居家保洁',
					type: '家洁士',
					tip: '邀请好友即送',
					money: 99,
					sailTimes: 12
				},
				{
					imgUrl: '/img/index/1m_w1.png',
					name: '单月·每周1次',
					type: '无忧生活套餐',
					tip: '我们首个约定',
					money: 520,
					sailTimes: 12
				},
				{
					imgUrl: '/img/index/hy_w1.png',
					name: '半年·每周1次',
					type: '品质生活套餐',
					tip: '神券补贴',
					money: 3199,
					sailTimes: 12
				},
				{
					imgUrl: '/img/index/1y_2w1.png',
					name: '全年·两周1次',
					type: '休闲生活套餐',
					tip: '每次低至120元',
					money: 4199,
					sailTimes: 12
				},
				{
					imgUrl: '/img/index/1y_w1.png',
					name: '全年·每周1次',
					type: '经典王牌套餐',
					tip: '每次低至120元',
					money: 7999,
					sailTimes: 12
				},
				{
					imgUrl: '/img/index/1y_13.png',
					name: '全年·13次',
					type: '自由生活套餐',
					tip: '星级家庭必备',
					money: 8999,
					sailTimes: 12
				},

			]
		}
	},
	mounted () {
		this.$nextTick(() => {
			this._setSlideWidth ()
			this._initDots ()
			this.scroll = new BScroll(this.$refs.slide,{
				scrollX: true,
				scrollY: false,
				momentum: false,
				snap: {
					loop: this.loop,
					threshold: 0.2,
					speed: 500
				},
				bounce: false,
				stopPropagation: true
			})
			this.scroll.on('scrollEnd', this._onScrollEnd)
			this.scroll.on('touchEnd', () => {
				this._play()
			})
			this.scroll.on('beforeScrollStart', () => {
				clearTimeout(this.timer)
			})
			this._play()
		})
	},
	beforeDestroy () {
		this.scroll.disable()
		clearTimeout(this.timer)
	},
	methods: {
		_setSlideWidth () {
			let children = this.$refs.slideGroup.children
			let width = 0
			let slideWidth = this.$refs.slide.clientWidth
			for (let i = 0; i < children.length; i++) {
				children[i].style.width = slideWidth + 'px'
				width += slideWidth
			}
			if (this.loop) {
				width += 2 * slideWidth
			}
			this.$refs.slideGroup.style.width = width + "px"

		},
		_initDots () {
			this.dots = new Array(this.$refs.slideGroup.children.length)
		},
		_play () {
			clearTimeout(this.timer)
			this.timer = setTimeout( () => {
				this.scroll.next()
			}, 800)
		},
		_onScrollEnd () {
			let pageIndex = this.scroll.getCurrentPage().pageX
			this.currentPageIndex = pageIndex
			this._play()
		}
	}

}
</script>

<style scoped lang="sass">
@import '~assets/sass/baseColor.sass'

.wrap
	background: $base-bc-blue
	.top 
		height: 0.88rem
		line-height: 0.88rem
		display: flex
		align-items: center
		background: #ffffff
		.where
			flex: none
			font-size: 0.28rem
			width: 1.5rem			
			height: 0.88rem
			line-height: 0.88rem
			img 
				width: 0.5rem
				vertical-align: middle
				margin: 0 0.05rem 0 0.2rem
				position: relative
				top: -0.07rem
				left: 0
		&>img 
			flex: none
			width: 2rem
			height: 0.5rem
			margin-left: 1.1rem
	.center-nav 
		background: #ffffff
		height: 1.81rem
		display: flex
		justify-content: space-around
		.link-item
			flex: none
			text-align: center
			font-size: 0.24rem
			line-height: 0.33rem
			width: 1.3rem
			img 
				width: 1rem
				rem
				display: block
				margin: 0.3rem auto 0.1rem

	.content-box
		background: #ffffff
		margin-top: 0.2rem
		width: 100%
		ul
			li
				height: 2.4rem
				padding: 0.3rem
				display: flex
				align-items: flex-end
				img 
					width: 1.8rem
					height: 1.8rem 
					display: block
					flex: none
				.detail 
					flex: auto
					height: 1.8rem
					margin-left: 0.2rem
					p:nth-of-type(1)
						font-size: 0.32rem
						line-height: 0.45rem
						color: #22253E
					p:nth-of-type(2)
						font-size: 0.24rem
						line-height: 0.33rem
						color: #555A67
					p:nth-of-type(3)
						margin-top: 0.26rem
						font-size: 0.22rem
						&>span 
							display: inline-block
							padding: 0.03rem 0.1rem
							background: #EBF3FF
							border-radius: 0.04rem					
							color: #5D9BCC
					p:nth-of-type(4)
						font-size: 0.32rem
						line-height: 0.45rem
						color: #FC454C
				.sail-times
					float: right
					display: inline-block
					font-size: 0.24rem
					line-height: 0.33rem
					color: #555A67
				&:not(:last-child)
					border-bottom: 1px solid rgb(238,238,238)

	.slide 
		height: 3.1rem
		position: relative
		background: #ffffff
		overflow: hidden
		.slide-group
			position: relative
			overflow: hidden
			white-space: nowrap
			.slide-item
				float: left
				overflow: hidden
				text-align: center
				img
					display: block
					width: 100%
		.dots 
			position: absolute
			left: 0
			bottom: 0.2rem
			width: 100%
			line-height: 0.1rem
			text-align: center
			.dot
				display: inline-block
				border: 1px solid #ffffff
				background: transparent	
				width: 0.2rem
				height: 0.2rem
				border-radius: 50%
				margin: 0 0.1rem
				&.active	
					background: #ffffff


</style>







