<template>
	<div class="wrap">
		<div class="evaluate-star-box item-box">
			<div><span>准时程度</span><star @setStar="setTimeStar"></star></div> 
			<div><span>态度评价</span><star @setStar="setAttitudeStar"></star></div> 
			<div><span>打扫质量</span><star @setStar="setQualityStar"></star></div> 
		</div>
		<div class="evaluate-text-box item-box">
			<div class="top-side">
				<img src="~assets/img/red_paper.png">
				留下宝贵评价，获得1到99元随机微信红包
			</div>
			<div class="bottom-side">
				<div class="tags-box">
					<span 
						v-for="(item,index) in tags" 
						:class="{isChoose: item.isChoose}"
						@click="item.isChoose = !item.isChoose"
					>
						{{item.text}}
					</span>
				</div>				
				<textarea placeholder="我还有其他要说" v-model="content">
					
				</textarea>	
			</div>
		</div>
		<button class="btn submit" @click="submit">提交</button>
	</div>
</template>
<script>
import Star from '~/components/star.vue'
import { Toast } from 'mint-ui';

export default{
	middleware: 'auth',
	data () {
		return {
			timeStarNum: 0,
			attitudeStarNum: 0,
			qualityStarNum: 0,
			tags: [
				{
					text: '准时',
					isChoose: false
				},
				{
					text: '态度好',
					isChoose: false
				},
				{
					text: '打扫质量',
					isChoose: false
				},
				{
					text: '不准时',
					isChoose: false
				},
				{
					text: '态度不好',
					isChoose: false
				},
				{
					text: '打扫质量不好',
					isChoose: false
				},
			],
			content:''
		}
	},
	methods: {
		setTimeStar (num) {
			this.timeStarNum = num
		},
		setAttitudeStar (num) {
			this.attitudeStarNum = num
		},
		setQualityStar (num) {
			this.qualityStarNum = num
		},
		async submit () {
			const timeStarNum = this.timeStarNum,
				  attitudeStarNum = this.attitudeStarNum,
			      qualityStarNum = this.qualityStarNum,
			      tags = this.tags,
			      content = this.content;

			if(!timeStarNum || !attitudeStarNum || !qualityStarNum){
				Toast('请给服务评星！')
				return
			}
			const newTags = this.tags.filter( item => item.isChoose)
			if(!newTags.length){
				Toast('请至少选择一个标签！')
				return
			}

			const res = await this.$store.dispatch('postEvaluation',{
				timeStarNum,
				attitudeStarNum,
				qualityStarNum,
				tags: newTags,
				content
			})
			if(res.err){
				Toast(res.msg)
		    }else{
		    	this.$router.push('/success_response/evaluate')
		    }
		}
	},
	components: {
		Star
	}
}
</script>
<style lang="sass" scoped>
@import '~assets/sass/baseColor.sass'

.wrap
	height: 100%
	background: $base-bc-blue
	.item-box
		width: 7.1rem		
		background: #ffffff
		border-radius: 0.08rem		
		margin: 0 auto 0.2rem
	.evaluate-star-box
		font-size: 0.28rem
		color: #22252E
		height: 2.4rem
		padding: 0.3rem
		div 
			display: flex
			margin-bottom: 0.3rem
			height: 0.4rem
			&>* 
				flex: none
			span 
				margin-right: 0.2rem
	.evaluate-text-box
		.top-side
			height: 0.8rem
			line-height: 0.8rem
			font-size: 0.24rem
			color: #22252E
			border-bottom: 1px solid #EEEEEE
			padding-left: 0.3rem
			img 
				width: 0.3rem
				height: 0.4rem
				vertical-align: middle
		.bottom-side
			padding: 0.3rem 0.3rem 0 0.3rem			
			.tags-box
				overflow: hidden
				span
					float: left
					width: 3.15rem
					height: 0.58rem
					display: block
					border-radius: 0.08rem
					border: 1px solid #eeeeee
					font-size: 0.28rem
					line-height: 0.58rem
					text-align: center
					color: #22252E
					margin-bottom: 0.2rem
					&:nth-child(odd)
						margin-right: 0.2rem
					&.isChoose
						background: $blue
						color: #ffffff
			textarea
				width: 6.5rem
				height: 1.8rem
				border: 1px solid #D3D6DB
				font-size: 0.28rem
				line-height: 0.4rem
				padding: 0.2rem
	.btn
		width: 6.9rem
		height: 0.88rem
		margin: 0 auto
		display: block
		font-size: 0.34rem
		border-radius: 0.08rem
		margin-top: 0.4rem
		&.submit
			margin-bottom: 0.2rem
			background: $blue
			color: #ffffff
</style>










