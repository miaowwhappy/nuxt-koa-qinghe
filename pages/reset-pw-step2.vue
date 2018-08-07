<template>
	<div class="wrap">
		<div class="pw-box input-box">
		 	<input type="password" name="password" v-model="pw"  placeholder="设置6位数以上密码">
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
			pw: '',
		}
	},
	methods:{
		async resetNext () {
			const tel = this.$route.query.tel
			const code = this.$route.query.code
			const codeReg = /^\d{4}(\d{2})?$/
			const telReg = /^1\d{10}$/
			const pw = this.pw.replace(/\s/g,'')

			if(!telReg.test(tel)){
				Toast('页面失效，返回上一层!')
				return false
			}
		    if(!codeReg.test(code)){
		    	Toast('页面失效，返回上一层!')
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

		    let res = await this.$store.dispatch('resetPWStepTwo', {tel, code, pw})

		    if(res.err){
		    	Toast(res.msg)
		    }else{
		    	this.$router.push('/success_response/reset_pw')
		    }

		}
	}

}
</script>
<style lang="sass" scoped>
	.wrap
		text-align: center
		.input-box
			width: 6.1rem
			height: 0.88rem
			border: 1px solid rgba(238,238,238,1)
			border-radius: 1rem
			margin: 0 auto 0.2rem
			line-height: 0.88rem
			font-size: 0.32rem
			text-align: left
			input
				border: none
				margin-left: 0.5rem
				outline: none
				font-size: 0.32rem
				width: 2.8rem
			&.pw-box
				margin-top: 0.6rem		
		.next-btn
			margin: 0 auto
			width: 6.1rem
			height: 0.88rem
			border-radius: 1rem
			background: #59A6DC
			display: block
			color: #ffffff
			font-size: 0.32rem
</style>
</template>