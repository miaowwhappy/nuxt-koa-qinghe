<template>
	<div class="wrap">
		<img src="~assets/img/logo.png" class="logo">
		<div class="tel-box input-box">
		 	<input type="text" name="tel" maxlength="11" v-model="tel" placeholder="手机号码">
		</div>
		<button class="btn register-btn" @click="toRegisterNext">
			继续注册
		</button>
		<p class="agreement">
			登录即视为您已同意<span>《清和服务用户协议》</span>
		</p>
	</div>
</template>
<script>
import { Toast} from 'mint-ui';
export default{
	data(){
		return{
			tel:''
		}
	},
	methods:{
		toRegisterNext () {
			var tel = this.tel
			if(!tel){
				Toast('手机号不能为空')
				return
			}
			if(!/^1\d{10}$/.test(tel)){
				Toast('手机格式不正确')
				return false;
			}

			this.$router.push('/register_step2?tel='+tel)
		}
	}
}
</script>
<style lang="sass" scoped>
	.wrap
		text-align: center;
		.logo
			width: 1.2rem;
			height: 1.25rem;
			margin-top: 0.8rem;
		.input-box
			width: 6.1rem;
			height: 0.88rem;
			border: 1px solid rgba(238,238,238,1);
			border-radius: 1rem;
			margin: 0 auto 0.2rem;
			line-height: 0.88rem;
			font-size: 0.32rem;
			text-align: left;
			input
				border: none;
				margin-left: 0.5rem;
				outline: none;
				font-size: 0.32rem;
			&.tel-box
				margin-top: 0.6rem;
		.register-btn
			margin: 0 auto 0.2rem;
			width: 6.1rem;
			height: 0.88rem;
			border-radius: 1rem;
			background: #59A6DC;
			display: block;
			color: #ffffff;
			font-size: 0.32rem;
		.agreement
			font-size: 0.24rem;
			color: #60626B;
			span
				color: #FC454C;
</style>