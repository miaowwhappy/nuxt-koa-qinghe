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
				<div v-else-if="serviceStatus == 4">
					<p>订单进行中</p>
					<p>感谢您对我们的支持</p>
				</div>
				<div v-else-if="serviceStatus == 5">
					<p>待支付</p>
					<p>马上支付,体验品质保洁服务</p>
				</div>				
			</div>
			<div class="service-detail item-box">
				<div class="t-side">
					<img src="/img/index/1m_w1.png">
					<div>
						<p>单次·居家保洁</p>
						<p>有效期：2018-07-01至2019-02-01</p>
					</div>	
					<span>家洁士</span>
				</div>
				<div class="b-side">
					<p class="line-item"><span>联系姓名</span><span>西红柿的老爸</span></p>
					<p class="line-item"><span>联系电话</span><span>18616607777</span></p>
					<p class="line-item"><span>联系地址</span><span>市辖区世纪大道恒大山水城16栋804</span></p>
				</div>
			</div>
			<div class="about-money item-box">
				<div class="t-side">
					<p><span>订单金额</span><span>¥98</span></p>
					<p><span>优惠金额</span><span>-10</span></p>
				</div>
				<div class="b-side">
					<p><span>实付金额</span><span class="pay-money">¥88</span></p>
				</div>
			</div>
			<div class="remark item-box">
				<span>备注</span><span>无</span>
				
			</div>
			<div class="order-num item-box">
				<span>订单编号</span><span>U20180703348894</span>
			</div>
			<img src="~assets/img/list/kefu.png" class="contact-service">
		</div>
		<nav class="bottom-nav" v-if="serviceStatus == 2">
			<nuxt-link class="r-btn" to="/commit-order" tag="button">重新下单</nuxt-link>
		</nav>
		<nav class="bottom-nav" v-if="serviceStatus == 3">
			<button class="l-btn">联系客服</button>
			<nuxt-link tag="button" to="/home/clean-record/evaluate" class="r-btn">评价有奖</nuxt-link>
		</nav>
		<nav class="bottom-nav" v-if="serviceStatus == 5">
			<button class="l-btn">删除订单</button>
			<nuxt-link class="r-btn" tag="button" to="/commit-order">立即支付</nuxt-link>
		</nav>		
	</div>
</template>
<script>
export default{
	middleware: 'auth',
	//这个页面应该传订单id 再查询状态 先做假的吧
	//serviceType 0 未服务待分配 1 未服务已分配 2 已取消 3 已服务 4 进行中 5 待支付
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
	


.wrap
	background: $base-bc-blue
	.page-container 
		height: 100%		
		padding-top: 0.2rem
		overflow: auto
		position: relative
		&.show-bottom-nav
			padding-bottom: 0.98rem
		.item-box
			width: 7.1rem
			padding: 0.3rem
			margin: 0 auto 0.2rem
			background: #ffffff
			border-radius: 0.08rem
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
						font-size: 0.24rem
						line-height: 0.33rem
						color: #555A67
						margin-top: 0.04rem
				&>span 
					flex: none
					color: #60626B
					font-size: 0.32rem
			.b-side
				.line-item
					line-height: 0.4rem
					font-size: 0.28rem
					color: #60626B
					margin-top: 0.3rem
					& span:nth-of-type(1)
						margin-right: 0.2rem
						color: #9FA4B1 					
					
		.about-money
			font-size: 0.28rem
			p 
				display: flex
				justify-content: space-between
				line-height: 0.4rem
				color: #60626B
			.t-side 
				padding-bottom: 0.3rem
				border-bottom: 1px solid #EEEEEE
				p:nth-of-type(1)
					margin-bottom: 0.3rem
			.b-side
				padding-top: 0.3rem
				.pay-money
					color:  #FC454C
		.remark
			padding: 0.3rem
			font-size: 0.28rem
			position: relative
			span:nth-of-type(1)
				display: inline-block
				width: 1.3rem
				color: #9FA4B1
				white-space: nowrap
			span:nth-of-type(2)
				color: #60626B
			
		.order-num
			padding: 0.3rem
			font-size: 0.28rem
			span:nth-of-type(1)
				display: inline-block
				width: 1.3rem
				color: #9FA4B1
				white-space: nowrap
			span:nth-of-type(2)
				color: #60626B
		.contact-service
			position: absolute
			bottom: 2rem
			right: 0.1rem
			width: 1rem
			height: 1rem
	.bottom-nav 
		height: 0.98rem
		width: 100%
		display: flex
		align-items: stretch
		position: fixed
		left: 0
		bottom: 0
		.l-btn 
			flex: none
			width: 3rem
			color: #60626B
			border-top: 1px solid #EEEEEE
			border-bottom: 1px solid #EEEEEE
			background: #ffffff
			font-size: 0.32rem
		.r-btn
			flex: auto
			background: $blue
			color: #ffffff
			font-size: 0.32rem
		

</style>