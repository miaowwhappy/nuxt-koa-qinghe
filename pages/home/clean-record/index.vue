<template>
	<div class="wrap">
		<nav class="top-nav">
			<span v-for="(item,index) in navItem" :class="{active:currentPageIndex == index}" @click="toPage(index)">{{item.name}}</span>
		</nav>
		<div class="page-container">
			<div class="slide" ref="slide">
				<div class="slide-group" ref="slideGroup">
					<div class="slide-item">
						<nuxt-link 
							class="record-item" 
							tag='div' 
							:to="{ path: '/home/clean-record/detail' ,query:{ type: item.type }}" 
							:key="key" 
							v-for="(item,key) in records.noService"
						>
							<div class="record-side">
								<span>家洁士</span>
								<span>{{item.statusText}}</span>
							</div>
							<div class="record-main">
								<img src="/img/index/1m_w1.png">
								<div>
									<p>{{item.time}}</p>
									<p>{{item.address}}</p>
								</div>
							</div>
						</nuxt-link>
					</div>
					<div class="slide-item">
						<nuxt-link 
							class="record-item" 
							tag='div' 
							:to="{ path: '/home/clean-record/detail' ,query:{ type: item.type }}"  
							:key="key" 
							v-for="(item,key) in records.hasService"
						>
							<div class="record-side">
								<span>家洁士</span>
								<span>{{item.statusText}}</span>
							</div>
							<div class="record-main">
								<img src="/img/index/1m_w1.png">
								<div>
									<p>{{item.time}}</p>
									<p>{{item.address}}</p>
								</div>
							</div>
						</nuxt-link>
					</div>
					<div class="slide-item">
						<nuxt-link class="record-item" 
							tag='div' 
							:to="{ path: '/home/clean-record/detail' ,query:{ type: item.type }}" 
							:key="key" 
							v-for="(item,key) in records.cancelService"
						>
							<div class="record-side">
								<span>家洁士</span>
								<span>{{item.statusText}}</span>
							</div>
							<div class="record-main">
								<img src="/img/index/1m_w1.png">
								<div>
									<p>{{item.time}}</p>
									<p>{{item.address}}</p>
								</div>
							</div>
						</nuxt-link>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import BScroll from 'better-scroll'

export default{
	middleware: 'auth',
	//serviceType 0 未服务待分配 1 未服务已分配 2 已取消 3 已服务
	data () {
		return {
			loop: false,
			dots: [],
			currentPageIndex: 0,
			navItem: [
				{name: '未服务'},
				{name: '已服务'},
				{name: '已取消'},
			],
			records: {
				noService: [
					{
						statusText: '待分配',
						time: '2018-07-19日周四14:00',
						address: '市辖区世纪大道恒大山水城16栋804',
						type: 0
					},
					{
						statusText: '待分配',
						time: '2018-07-19日周四14:00',
						address: '市辖区世纪大道恒大山水城16栋804',
						type: 0
					},
					{
						statusText: '待分配',
						time: '2018-07-19日周四14:00',
						address: '市辖区世纪大道恒大山水城16栋804',
						type: 0
					},
				],
				hasService: [
					{
						statusText: '已服务',
						time: '2018-07-19日周四14:00',
						address: '市辖区世纪大道恒大山水城16栋804',
						type: 3
					},
					{
						statusText: '已服务',
						time: '2018-07-19日周四14:00',
						address: '市辖区世纪大道恒大山水城16栋804',
						type: 3
					},
					{
						statusText: '已服务',
						time: '2018-07-19日周四14:00',
						address: '市辖区世纪大道恒大山水城16栋804',
						type: 3
					},
				],
				cancelService: [
					{
						statusText: '已取消',
						time: '2018-07-19日周四14:00',
						address: '市辖区世纪大道恒大山水城16栋804',
						type: 2
					},
					{
						statusText: '已取消',
						time: '2018-07-19日周四14:00',
						address: '市辖区世纪大道恒大山水城16栋804',
						type: 2
					},
					{
						statusText: '已取消',
						time: '2018-07-19日周四14:00',
						address: '市辖区世纪大道恒大山水城16栋804',
						type: 2
					},
				]
			}
		}
	},
	mounted () {
		this.$nextTick(() => {
			this._setSlideWidth ()
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
				click: true
			})
			this.scroll.on('scrollEnd', this._onScrollEnd)
		})
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
		_onScrollEnd () {
			let pageIndex = this.scroll.getCurrentPage().pageX
			this.currentPageIndex = pageIndex
		},
		toPage (index) {
			this.scroll.goToPage( index )
		}
	}

}	
</script>
<style lang="sass" scoped>
@import '~assets/sass/baseColor.sass'

.wrap
	background: $base-bc-blue
	.top-nav
		height: 0.88rem
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
	.page-container 
		.slide
			overflow: hidden;
			.slide-item
				width: 100%
				float: left
				.record-item 
					width: 100%
					margin-top: 0.2rem
					background: #ffffff url('~assets/img/home/arrow_r.png') no-repeat 95% 60%
					background-size: 0.45rem 0.45rem
					.record-side 
						height: 0.8rem
						border-bottom: 1px solid #EEEEEE
						font-size: 0.28rem
						padding: 0 0.3rem
						display: flex
						justify-content: space-between
						align-items: center
						& span:nth-of-type(1)
							color: #60626A
							flex: none
						& span:nth-of-type(2)
							color: #FC454C
							flex: none
					.record-main 
						padding: 0.3rem
						display: flex
						img 
							width: 0.8rem
							height: 0.8rem
							flex: none							
						&>div 
							flex: none
							margin-left: 0.2rem
							p:nth-of-type(1)
								line-height: 0.45rem
								color: #60626A
								font-size: 0.32rem
							p:nth-of-type(2)
								line-height: 0.4rem
								color: #60626A
								margin-top: 0.1rem
								font-size: 0.28rem




</style>


















