<template>
	<div class="wrap">
		<div class="page-container" :class="{showBottomNav: serviceStatus == 3}">			
			<div class="service-type item-box">
				<div v-if="serviceStatus == 0">
					<p>待分配</p>
					<p>小和即将为您分配保洁人员</p>
				</div>
				<div v-else-if="serviceStatus == 1">
					<p>已分配，待服务</p>
					<p>小和将为您提供品质保洁服务</p>
				</div>
				<div v-else-if="serviceStatus == 2">
					<p>已取消</p>
					<p>感谢您对我们的支持</p>
				</div>
				<div v-else-if="serviceStatus == 3">
					<p>已服务</p>
					<p>感谢您对我们的支持</p>
				</div>				
			</div>
			<div class="service-detail item-box">
				<div class="t-side">
					<img src="/img/index/1m_w1.png">
					<div>
						<p>单次·居家保洁</p>
						<p>套餐次数：100次</p>
						<p>该套餐的第12次服务</p>
					</div>	
					<span>家洁士</span>
				</div>
				<div class="b-side">
					<p class="line-item">
						<span>服务时间</span>
						<span>2018-07-19日 周四 14:00</span>
						<span v-if="serviceStatus == 0 || serviceStatus == 1">修改</span>
					</p>
					<p class="line-item"><span>家庭顾问</span><span>梁锦波</span></p>
					<p class="line-item"><span>保洁人员</span><span>林雨蓉</span></p>
					<p class="line-item"><span>我的叮嘱</span><span>暂无</span></p>
				</div>
			</div>
			<div class="user-info item-box">
				<p class="line-item"><span>联系姓名</span><span>西红柿的老爸</span></p>
				<p class="line-item"><span>联系电话</span><span>18616607777</span></p>
				<p class="line-item"><span>联系地址</span><span>市辖区世纪大道恒大山水城16栋804</span></p>
			</div>
		</div>
		<nav class="bottom-nav" v-if="serviceStatus == 3">
			<button class="contact">联系客服</button>
			<nuxt-link tag="button" to="/home/clean-record/evaluate" class="evaluate">评价有奖</nuxt-link>
		</nav>
	</div>
</template>
<script>
export default{
	middleware: 'auth',
	//这个页面应该传订单id 再查询状态 先做假的吧
	//serviceType 0 未服务待分配 1 未服务已分配 2 已取消 3 已服务 4 进行中
	asyncData ({query}) {
		return {
			serviceStatus: query.type
		}

	},
	data () {
		return {
			serviceStatus: '',
		}
	},
	

}
</script>
<style lang="sass" scoped>
@import '~assets/sass/baseColor.sass'


.line-item
	line-height: 0.4rem
	font-size: 0.28rem
	color: #22252E
	margin-top: 0.3rem
	& span:nth-of-type(1)
		margin-right: 0.2rem
		color: #9FA4B1 


.wrap
	background: $base-bc-blue
	.page-container 
		height: 100%		
		padding-top: 0.2rem
		overflow: auto
		&.show-bottom-nav
			padding-bottom: 0.98rem
		.item-box
			width: 7.1rem
			padding: 0.3rem
			margin: 0 auto 0.2rem
			background: #ffffff
		.service-type 
			text-align: center
			p:nth-of-type(1)
				line-height: 0.45rem
				color: $blue
				font-size: 0.32rem
			p:nth-of-type(2)
				line-height: 0.4rem
				color: #60626B
				font-size: 0.28rem
		.service-detail
			.t-side 
				padding-bottom: 0.3rem
				border-bottom: 1px solid #EEEEEE
				display: flex
				align-items: flex-start
				img
					flex: none
					width: 0.8rem
					height: 0.8rem
				&>div
					flex: auto
					margin-left: 0.2rem
					p:nth-of-type(1)
						font-size: 0.32rem
						line-height: 0.45rem
						color: #22252E
					p:nth-of-type(2)
						font-size: 0.28rem
						line-height: 0.4rem
						color: #60626A
						margin-top: 0.1rem
					p:nth-of-type(3)
						font-size: 0.28rem
						line-height: 0.4rem
						color: #60626A
						margin-top: 0.1rem
				&>span 
					color: #60626B
					font-size: 0.32rem
			.b-side
				.line-item:nth-of-type(1)					
					&>span:nth-of-type(3) 
						border: 1px solid #D3D6DB
						border-radius: 0.04rem
						width: 1.02rem
						height: 0.44rem
						color: #9FA4B1
						display: inline-block
						text-align: center
						float: right
		.user-info
			padding-top: 0
			overflow: hidden
			& span:nth-of-type(2)
				color: #60626B
	.bottom-nav 
		height: 0.98rem
		width: 100%
		display: flex
		align-items: stretch
		position: fixed
		left: 0
		bottom: 0
		.contact 
			flex: none
			width: 3rem
			color: #60626B
			border-top: 1px solid #EEEEEE
			border-bottom: 1px solid #EEEEEE
			background: #ffffff
			font-size: 0.32rem
		.evaluate 
			flex: auto
			background: $blue
			color: #ffffff
			font-size: 0.32rem


</style>