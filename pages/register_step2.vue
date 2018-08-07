<template>
	<div class="wrap">
		<div class="sms-box input-box">
		 	<input type="text" name="code" maxlength="11" v-model="code" placeholder="验证码">
		 	<button 
		 		class="sms-btn" 
		 		:class="{disabled:btnstate}" 
		 		@click="getCode" 
		 		:disabled="btnstate"
		 	>
		 		{{getCodeVal}}
		 	</button>
		</div>
		<div class="pw-box input-box">
		 	<input type="password" name="password" v-model="password" placeholder="设置6位数以上密码">
		</div>
		<button class="btn register-btn" @click="register">
			完成注册
		</button>
	</div>
</template>
<script>
import { Toast} from 'mint-ui';
export default{
	data () {
		return {
			code: '',
			password: '',
			getCodeVal: '获取验证码',
			btnstate: false
		}
	},
	methods:{
		async getCode () {
			var leftTime = 60
			this.getCodeVal = '重新获取（'+ leftTime-- +')'
			this.btnstate = true
			const timer = setInterval(() => {
				if(leftTime == 0){
					clearInterval(timer)
					leftTime = 60
					this.getCodeVal = '获取验证码'
					this.btnstate = false
				}
				this.getCodeVal = '重新获取（'+ leftTime-- +')'
			},1000)
		},
		async register () {
			const code = this.code.replace(/\s/g,'')
			const pw = this.password.replace(/\s/g,'')
			const tel = this.$route.query.tel
			const codeReg = /^\d{4}(\d{2})?$/

			if(!code){
				Toast('请输入验证码')
		        return 
		    }
		    if(!codeReg.test(code)){
		    	Toast('验证码格式不正确')
		        return
		    }
		    if(!pw){
		    	Toast('密码不能为空')
		        return 
		    }
		    if(pw.length < 6){
		    	Toast('密码长度不能小于6位')
		        return
		    }

		    let res = await this.$store.dispatch('register', {
		    	tel,
		    	code,
		    	pw
		    })

		    if(res.err){
		    	Toast(res.msg)
			}else{				
				this.$router.push('/success_response/register')
			}

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
				width: 2.8rem;
			&.sms-box
				margin-top: 0.6rem;
			.sms-btn
				background: #ffffff;
				font-size: 0.32rem;
				width: 2.7rem;
				text-align: right;
				padding-right: 0.3rem;
			.disabled
				color: #999999;
				disabled: disabled;
		.register-btn
			margin: 0 auto 0.2rem;
			width: 6.1rem;
			height: 0.88rem;
			border-radius: 1rem;
			background: #59A6DC;
			display: block;
			color: #ffffff;
			font-size: 0.32rem;
</style>
