<template>
	<div class="wrap">
		<div class="page-view">
			<div class="page-wrapper">
				<div class="item-box address-time-box">
					<div class="header-side">
						<img src="/img/index/1m_w1.png">
						<p>单次·居家保洁</p>	
						<span>家洁士</span>
					</div>
					<nuxt-link 
						class="address-choose li-item tap-btn" 
						tag="div" 
						to="/home/address/list?use=true"
					>
						<img src="~assets/img/address.png">{{orderInfo.address.text}}
					</nuxt-link>
					<div class="time-choose li-item tap-btn" @click="openPicker">
						<img src="~assets/img/time.png">{{orderInfo.time.text}}
					</div>
				</div>
				<div class="item-box money-box " :class="{'coupon-ready': orderInfo.coupon.val != 0}">
					<nuxt-link class="li-item coupon-choose tap-btn" to="/home/coupon?use=true" tag="div">
						<img src="~assets/img/choose_yhq.png" v-if="orderInfo.coupon.val == 0">{{orderInfo.coupon.text}}
					</nuxt-link>
					<div class="order-money money-num">
						<span>订单金额</span><span>¥{{orderMoney}}</span>
					</div>
					<div class="coupon-money money-num" v-if="orderInfo.coupon.val != 0">
						<span>优惠金额</span><span>-¥{{orderInfo.coupon.val}}</span>
					</div>
					<div class="pay-money money-num">
						<span>实付金额</span><span class="total-money">¥{{totalMoney}}</span>
					</div>
				</div>
				<div class="user-box item-box">
					<div class="li-item">
						<img src="~assets/img/choose_yhq.png">我想叮嘱小和						
					</div>
					<textarea placeholder="静侯您的吩咐">
							
					</textarea>
					<p>购买即视为同意<span>《家务包年服务说明》</span>、<span>《清和服务在家用户购买协议》</span></p>
				</div>
			</div>
		</div>
		<div class="bottom-fix-side">
			<div class="money-text">
				<span>优惠¥{{orderInfo.coupon.val}}</span>
				<p>待支付<span>¥{{totalMoney}}</span></p>
			</div>
			<button @click="commit">提交订单</button>
		</div>
		<mt-datetime-picker
		    ref="picker"
		    type="datetime"
		    v-model="pickerValue"
		    year-format="{value}"
		    month-format="{value}"
		    date-format="{value}"
		    :startDate="startDate"
		    @confirm="handleConfirm"
		>
		</mt-datetime-picker>
				
	</div>
</template>
<script>
import { Toast, DatetimePicker } from 'mint-ui'
import { dateTimeFormatter } from '~/assets/js/utlis.js'

export default{
	middleware: 'auth',
	components: {
		MtDatetimePicker: DatetimePicker,
	},
	data () {
		return {
			orderMoney: 99,
			pickerValue: '',
			
		}
	},
	computed: {
		orderInfo() {
			return this.$store.state.orderInfo
		},
		totalMoney() {
			return this.orderMoney - this.orderInfo.coupon.val
		},
		startDate() {
			return new Date()
		}
	},
	methods: {
		openPicker() {
        	this.$refs.picker.open();
      	},
      	handleConfirm(date) {    		
      		this.$store.commit('SET_SERVICE_TIME',{
      			text: dateTimeFormatter(date,'yyyy-MM-dd hh:mm:ss'),
      			val: 1
      		})
      	},
      	commit() {
      		if(!this.orderInfo.address.id){
      			Toast('请选择地址')
      			return	
      		}
      		if(!this.orderInfo.time.val){
      			Toast('请选择时间')
      			return
      		}

      		this.$router.push('/order-pay')
      		
      	}
      	
	}
}
</script>
<style lang="sass" scoped>
@import '~assets/sass/baseColor.sass'

.wrap
	height: 100%
	background: $base-bc-blue
	.tap:active
		background: #EEEEEE
	.page-view
		height: 100%
		padding-bottom: 1.1rem
		overflow: auto
		.page-wrapper
			.item-box
				background: #FFFFFF	
				margin-bottom: 0.25rem
			.li-item
				font-size: 0.28rem
				padding: 0.3rem
				line-height: 0.4rem
				color: #60626B
				background: url('~assets/img/home/arrow_r.png') no-repeat 95% center
				background-size: 0.4rem 0.4rem
				&:not(:last-child)
					border-bottom : 1px solid #EEEEEE
				img 
					width: 0.4rem
					height: 0.4rem
					font-size: 0
					vertical-align: top
					margin-right: 0.1rem						
			.address-time-box
				.header-side
					display: flex
					align-items: center
					padding: 0.3rem
					border-bottom: 1px solid #EEEEEE
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
				color: #60626B
				font-size: 0.28rem					
				.money-num
					display: flex
					justify-content: space-between
					padding: 0.3rem 0.3rem 0.3rem 0.8rem
					color: #60626B
					line-height: 0.4rem
					&:not(:last-child)
						border-bottom: 1px solid #EEEEEE
					.total-money
						color: $red-light
			.coupon-ready
				.coupon-choose
					color: $red-light
				.money-num
					padding-left: 0.3rem
				.order-money
					padding-bottom: 0.15rem
					border-bottom: none !important
				.coupon-money
					padding-top: 0.15rem
					span:nth-of-type(2)
						color: $red-light		

			.user-box
				padding-bottom: 0.3rem
				.li-item
					border: none
					background-image: none
				textarea
					border: 1px solid #D3D6DB
					width: 6.9rem
					height: 1.2rem
					display: block
					margin: 0 auto
					padding: 0.15rem
				p 
					font-size: 0.24rem
					color: #9FA3B1
					padding: 0 0.3rem
					line-height: 0.31rem
					margin-top: 0.6rem
					span 
						color: $blue
	.bottom-fix-side
		position: fixed
		width: 100%
		height: 1.1rem
		left: 0
		bottom: 0
		display: flex
		align-items: stretch
		.money-text
			flex: auto
			background: #ffffff
			font-size: 0.26rem
			display: flex
			justify-content: space-between
			align-items: center
			padding: 0 0.3rem
			&>*
				flex: none
			p span
				color: $red-light
		button 
			flex: none
			width: 3rem
			background: $blue
			color: #ffffff
			font-size: 0.28rem

</style>