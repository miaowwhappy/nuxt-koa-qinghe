<template>
	<div class="wrap">
		<div class="item-box">
			<img src="~assets/img/about.png">
			<div class="company-icon">
				<div>
					<img src="~assets/img/clsj.png">
					<p>2015年</p>
					<p>成立时间</p>
				</div>
				<div>
					<img src="~assets/img/zb.png">
					<p>珠海</p>
					<p>总部</p>
				</div>
				<div>
					<img src="~assets/img/clsj.png">
					<p>家庭服务</p>
					<p>领域</p>
				</div>
			</div>
			<div class="company-detail">
				<p>
					广东清和家庭服务有限公司,原茂名市好好家庭服务有限公司,创办于2015年,基于公司发展需要,于2018年5月更名为广东清和服务有限公司,公司总部定位珠海,辐射全省,是家致力于家庭服务和社区020社交平台经营为一体的家庭服务企业。
				</p>
				<p>
					经过两年多的努力、探索,公司已经成为茂名市乃至粤西地区知名的家庭服务企业。目前公司现有职工100多人,未来将形成1000员工的规模,覆盖茂名市市区、珠海市市区,乃至全省各市县。公司已经为茂名市及珠海市家庭提供近3万次专业的家庭保洁、空调清洗等业务,好评率达95% 。
				</p>
				<p>
					公司的保洁员工90%自营,屏弃了传统“家务中介”的经营理念,引进全套进口保洁工具组和8色保洁布,让服务更安全、更专业、更高效!
				</p>
			</div>
			<div class="company-culture">
				<div class="line">
					<p>我们的理念：</p>
					<p>让更多人享受快乐。</p>
				</div>
				<div class="line">
					<p>我们的愿望：</p>
					<p>以打造服务型社交平台为战略目标,以创新家庭服务行业新标准为企业使命。</p>	
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {

}
</script>

<style scoped lang="sass">
@import '~assets/sass/baseColor.sass'

.wrap
	background: $base-bc-blue
	.item-box
		background: #ffffff
		>img
			display: block
			width: 100%
		.company-icon
			display: flex
			justify-content: space-around
			align-items: center
			text-align: center
			padding: 0.5rem 0
			border-bottom: 1px solid #EEEEEE
			img
				width: 0.6rem
				display: block
				margin: 0 auto
			p:nth-of-type(1)
				line-height: 0.48rem
				font-size: 0.32rem
				color: #22252E
				margin-top: 0.14rem
			p:nth-of-type(2)
				line-height: 0.36rem
				font-size: 0.24rem
				color: #60626B
				margin-top: 0.14rem
		.company-detail
			padding: 0.3rem
			line-height: 0.5rem
			font-size: 0.28rem
			color: #22252E
			border-bottom: 1px solid #EEEEEE
		.company-culture
			padding: 0.5rem 0.3rem
			.line
				display: flex
				align-items: flex-start
				line-height: 0.42rem
				font-size: 0.28rem
				&:not(:last-child)
					margin-bottom: 0.3rem 
				p:nth-of-type(1)
					white-space: nowrap;
					font-weight: bold
</style>












