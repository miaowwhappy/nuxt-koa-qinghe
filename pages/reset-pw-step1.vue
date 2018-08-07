<template>
	<div class="wrap">
		<img src="~assets/img/reset.png" class="img">
		<p>为了账号安全，请验证身份</p>
		<div class="tel-box input-box">
		 	<input type="text" name="tel" v-model="tel" maxlength="11" placeholder="设置6位数以上密码">
		</div>
		<div class="sms-box input-box">
		 	<input type="text" name="code" maxlength="6" v-model="code" placeholder="验证码">
		 	<button 
		 		class="sms-btn" 
		 		:class="{disabled:btnstate}" 
		 		@click="getCode" 
		 		:disabled="btnstate"
		 	>
		 		{{getCodeVal}}
		 	</button>
		</div>		
		<button class="btn next-btn" @click="resetNext">
			下一步
		</button>
	</div>
</template>
<script>
import { Toast } from 'mint-ui';
export default{
	data () {
		return {
			code: '',
			tel: '',
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
		async resetNext () {
			const tel = this.tel.replace(/\s/g,'')
			const code = this.code.replace(/\s/g,'')
			const codeReg = /^\d{4}(\d{2})?$/

			if(!tel){
				Toast('手机号不能为空')
				return
			}
			if(!/^1\d{10}$/.test(tel)){
				Toast('手机格式不正确')
				return
			}
			if(!code){
				Toast('请输入验证码')
		        return 
		    }
		    if(!codeReg.test(code)){
		    	Toast('验证码格式不正确')
		        return 
		    }

		    let res = await this.$store.dispatch('resetPWStepOne', {tel, code})

		    if(res.err){
		    	Toast(res.msg)
		    }else{
		    	this.$router.push({path:'/reset-pw-step2',query:{
		    		tel,
		    		code
		    	}})
		    }

		}
	}

}
</script>
<style lang="sass" scoped>
	.wrap
		text-align: center;
		.img
			width: 1.6rem;
			height: 2rem;
			margin-top: 0.6rem;
		&>p:nth-of-type(1)
			font-size: 0.24rem
			line-height: 0.33rem
			color: #60626B
			margin: 0.4rem auto 0.6rem
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
			.sms-btn
				background: #ffffff;
				font-size: 0.32rem;
				width: 2.7rem;
				text-align: right;
				padding-right: 0.3rem;
			.disabled
				color: #999999;
				disabled: disabled;
		.next-btn
			margin: 0 auto;
			width: 6.1rem;
			height: 0.88rem;
			border-radius: 1rem;
			background: #59A6DC;
			display: block;
			color: #ffffff;
			font-size: 0.32rem;
</style>