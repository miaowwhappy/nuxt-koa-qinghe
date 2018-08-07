<template>
	<div class="wrap">
		<div class="item-box detail-box">
			<div class="t-side padding-box">
				<p><span>¥</span>88</p>
				<p>订单号：U2018888888888</p>
			</div>
			<div class="b-side padding-box">
				<img src="/img/index/1m_w1.png">
				<p>单次·居家保洁</p>	
				<span>家洁士</span>
			</div>
		</div>
		<div class="item-box money-box">
			<div class="t-side padding-box">
				<p><span>订单金额</span><span class="order-money">¥99</span></p>
				<p><span>优惠金额</span><span class="discount-money">-¥10</span></p>
			</div>
			<div class="b-side padding-box">
				<p><span>实付金额</span><span class="pay-money">-¥10</span></p>
			</div>
		</div>
		<div class="item-box pay-type-box">
			<div class="li-box padding-box">
				<div>
					<img src="~assets/img/wxpay.png">
					<span>微信支付</span>
				</div>
				<div>					
					<input type="radio" name="pay" v-model="payType" value="1" id="wxpay">
					<label for="wxpay">
					</label>
				</div>										
			</div>
			<div class="li-box padding-box">
				<div>
					<img src="~assets/img/mipay.png">
					<span>密卡支付</span>
				</div>
				<div>					
					<input type="radio" name="pay" v-model="payType" value="2" id="mipay">
					<label for="mipay">
					</label>
				</div>										
			</div>
		</div>
		<button class="next" @click="pay">确认支付</button>
	</div>
</template>
<script>
	export default {
		data () {
			return {
				payType: 1
			}
		},
		methods: {
			pay () {
				let random = Math.random()
				setTimeout( () => {
					if(random > 0.5){
						this.$router.push('/success_response/pay')
					}else{
						this.$router.push('/fail_response/pay')
					}
				},1000)								
			}
		}
	}
</script>
<style lang="sass" scoped>
@import '~assets/sass/baseColor.sass'


.wrap
	height: 100%
	background: $base-bc-blue 
	.padding-box
		padding: 0.3rem
	.item-box
		margin-bottom: 0.2rem
		background: #ffffff
	.detail-box
		.t-side
			text-align: center
			border-bottom: 1px solid $border-color
			p:nth-of-type(1)
				line-height: 0.78rem
				font-size: 0.56rem
				color: #22252E
				span
					font-size: 0.32rem
			p:nth-of-type(2)
				line-height: 0.4rem
				color: #60626B
				font-size: 0.28rem
		.b-side
			display: flex
			align-items: center
			img
				width: 0.8rem
				height: 0.8rem
				flex: none
			p
				flex: auto
				font-size: 0.32rem
				color: #22252E
				margin-left: 0.2rem
			span 
				flex: none
				color: #60626B
				font-size: 0.28rem
	.money-box		
		p
			display: flex
			justify-content: space-between
			line-height: 0.4rem
			font-size: 0.28rem
			&>span 
				flex: none
			&>span:nth-of-type(1)
				color: #60626B
			&>span.discount-money,&>span.pay-money
				color: #fc2632
		.t-side
			border-bottom: 1px solid #EEEEEE
			p:nth-of-type(1)
				margin-bottom: 0.3rem
	.pay-type-box
		color: #22252E
		font-size: 0.28rem
		.li-box
			display: flex
			justify-content: space-between
			&>*
				flex: none
			&>div:nth-of-type(1)				
				img
					width: 0.4rem
					vertical-align: middle
				span
					vertical-align: middle
					margin-left: 0.12rem
			&:not(:last-child)
				border-bottom: 1px solid #EEEEEE
			input[name="pay"]
				opacity: 0
				clip: rect(0,0,0,0)
				position: absolute
			input[name="pay"]+label
				display: inline-block
				width: 0.4rem
				height: 0.4rem
				background-image: url("~assets/img/unchecked.png")
				background-size: 0.4rem 0.4rem
			input[name="pay"]:checked+label
				background-image: url("~assets/img/checked.png")
				background-size: 0.4rem 0.4rem
	.next 
		width: 6.9rem
		height: 0.88rem
		line-height: 0.88rem
		background: #036EB8
		margin: 0 auto
		font-size: 0.34rem
		color: #ffffff
		border-radius: 0.08rem
		display: block
		margin-top: 0.4rem

</style>














