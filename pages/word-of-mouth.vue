<template>
	<div class="wrap">
		<div class="header">
			<p>92%非常满意</p>
			<p>已有{{len}}人评论了此服务</p>
		</div>
		<div class="item-box word-box" v-for="(item,index) in list">
			<div class="item-header">
				<span>{{item.user.name | formatTel}}</span>
				<span>{{item.addTime | formatTime}}</span>
			</div>	
			<div class="item-content">
				{{item.content}}
			</div>
			<div class="item-star">
				<star
					:justShow="justShow"
					:starNum="item.qualityStarNum"
				></star>
			</div>
		</div>
	</div>
</template>

<script>
import Star from '~/components/star.vue'
import { dateTimeFormatter } from '~/assets/js/utlis.js'

export default{
	async asyncData({ store }) {
		let res = await store.dispatch('getEvaluations')
		console.log(res)
		return {
			list: res.list,
			len: res.count
		}
	},
	data() {
		return {
			justShow: true,
			list: [],
			len: 0
		}
	},
	components: {
		Star
	},
	filters: {
		formatTime(value){
			return dateTimeFormatter(value, 'yyyy-MM-dd hh:mm:ss')
		},
		formatTel(value){
			return value.slice(0,3) + '****' + value.slice(7,11)
		}
	}
}	
</script>
<style lang="sass" scoped>
@import '~assets/sass/baseColor.sass'

.item-box
	backgroud: #ffffff	
.wrap
	background: $base-bc-blue
	height: 100%
	.header
		padding: 0.6rem 0
		text-align: center
		background-color: #ffffff
		p:nth-of-type(1)
			font-size: 0.32rem
			line-height: 0.45rem
			color: #0C58A9
			font-weight: bold
		p:nth-of-type(2)
			font-size: 0.28rem
			line-height: 0.40rem
			color: #60626B
			margin-top: 0.2rem
	.item-box
		background: #ffffff
		margin-top: 0.2rem
		font-size: 0.28rem
		line-height: 0.4rem
		padding: 0.3rem
		.item-header
			display: flex
			justify-content: space-between
			color: #60626B
			span:nth-of-type(2)
				color: #9FA3B1
		.item-content
			margin-top: 0.2rem
			color: #22252E
		.item-star
			margin-top: 0.2rem
</style>









