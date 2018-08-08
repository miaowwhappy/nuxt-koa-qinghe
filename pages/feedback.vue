<template>
	<div class="wrap">
		<div class="textarea-section">
			<div>
				<img src="~assets/img/red_paper.png">
				留下宝贵意见，获得1到99元随机微信红包
			</div>
			<textarea placeholder="请尽管说出清和的不足，我们将努力改进" v-model="content">
			</textarea>
		</div>
		<div class="input-section">
			<input 
				type="text" 
				name="tel" 
				placeholder="请留下您的手机号码，以便我们回复您" 
				v-model="tel"
				maxlength="11"
			>
		</div>
		<button class="submit btn" @click="submit">
			提交
		</button>
		<button class="contact btn">
			直接联系客服
		</button>
	</div>
</template>
<script>
import { Toast } from 'mint-ui';
export default{
	data () {
		return {
			content: '',
			tel: ''
		}
	},
	methods: {
		async submit () {
			const content = this.content.replace(/\s/g,'') 
			const tel = this.tel.replace(/\s/g,'')

			if(content.length < 10){
				Toast("请至少输入10位字符")
				return
			}
			if(!/^1\d{10}$/.test(tel)){
				Toast("请输入正确的手机号")
				return
			}

			let res = await this.$store.dispatch('postFeedback',{content,tel})

			if(res.err){
				Toast(res.msg)
			}else{
				this.$router.push('/success_response/feedback')
			}

		}
	}

}
</script>
<style lang="sass" scoped>
@import '~assets/sass/baseColor.sass'

.wrap 
	height: 100%
	background: $base-bc-blue
	padding-top: 0.22rem
	.textarea-section
		width: 7.1rem
		height: 4.68rem
		background: #ffffff
		margin: 0 auto 0.2rem
		padding: 0 0.3rem
		border-radius: 0.08rem
		div
			height: 0.85rem
			line-height: 0.85rem
			font-size: 0.24rem
			color: #22252e			
			img 
				width: 0.3rem
				vertical-align: middle
				margin-right: 0.1rem
		textarea 
			width: 100%
			height: 3.7rem
			font-size: 0.28rem
			border: 1px solid #EEEEEE
			padding: 0.2rem
	.input-section
		width: 7.1rem
		height: 1rem
		margin: 0 auto 0.4rem
		background: #ffffff	
		border-radius: 0.08rem
		input
			width: 7.1rem
			height: 1rem
			display: block
			font-size: 0.28rem
			text-indent: 0.3rem
			background: transparent
			border: none
	.btn
		width: 6.9rem
		height: 0.88rem
		margin: 0 auto
		display: block
		font-size: 0.34rem
		border-radius: 0.08rem
		&.submit
			margin-bottom: 0.2rem
			background: $blue
			color: #ffffff
		&.contact
			border: 1px solid $blue
			background: transparent
			color: $blue
		
</style>











