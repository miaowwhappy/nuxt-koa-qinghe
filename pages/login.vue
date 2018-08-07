<template>
	<div class="wrap">
		<img src="~assets/img/logo.png" class="logo">
		<div class="tel-box input-box">
		 	<input type="text" name="tel" maxlength="11" v-model="user.tel" placeholder="手机号码">
		</div>
		<div class="pw-box input-box">
		 	<input type="password" name="password" v-model="user.password" placeholder="登录密码">
		</div>
		<button class="btn login-btn" @click="login">
			登录
		</button>
		<p class="agreement">
			登录即视为您已同意<span>《清和服务用户协议》</span>
		</p>
		<div class="link-line">
			<nuxt-link to="/reset-pw-step1" tag="span">忘记密码</nuxt-link>
			<span class="line"></span>
			<img src="~assets/img/red_paper.png">
			<nuxt-link to="/register" class="register" tag="span">立即注册</nuxt-link>
		</div>
	</div>
</template>
<script>
import { Toast} from 'mint-ui';
export default{
	data(){
		return{
			user: {
				tel: 18507098813,
				password: '4237519ab'
			}
		}
	},
	methods:{
		async login(){
			let { tel, password } = this.user

			if(!tel){
				Toast('手机号不能为空')
				return
			}
			if(!/^1\d{10}$/.test(tel)){
				Toast('手机格式不正确')
				return
			}
			if(!password){
				Toast('密码不能为空')
				return
			}

			let res = await this.$store.dispatch('login', this.user)
			if(res.err){
				Toast(res.msg)
			}else{				
				let redirect = this.$route.query.redirect
				if( redirect ){
					this.$router.push(redirect)
				}else{
					this.$router.push('/success_response/register')
				}
			}

		},
		async logout(){
			await this.$store.dispatch('logout')
		}
	},
}
</script>
<style scoped lang="sass">
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
		.login-btn
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
		.link-line
			font-size: 0.32rem;
			height: 0.45rem;
			line-height: 0.45rem;
			color: #60626B;
			text-align: left;
			margin-top: 0.3rem;
			span
				display: inline-block;
				height: 100%; 
				vertical-align: middle;
				&:nth-of-type(1)
					margin-left: 1.99rem;
				&:nth-of-type(3)
					margin-left: 0.1rem;
				&.line
					border-left: 2px solid rgba(238,238,238,1)
					height: 0.22rem;
					width: 0;
					margin: 0 0.3rem;
			img
		    	width: 0.24rem;
		    	height: 0.33rem; 
		    	vertical-align: middle;   
	
</style>
