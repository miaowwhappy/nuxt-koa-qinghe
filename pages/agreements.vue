<template>
	<div class="wrap">
		<div class="item-box">
			<div class="item-li">
				《清和服务注册协议》
			</div>
			<div class="item-li">
				《家务包年服务说明》
			</div>
			<div class="item-li">
				《清和服务用户协议》
			</div>
			<div class="item-li">
				《清和服务在家用户购买协议》
			</div>
		</div>
	</div>
</template>
<style lang="sass" scoped>
@import '~assets/sass/baseColor.sass'

.wrap 
	height: 100%
	background: $base-bc-blue
	padding-top: 0.2rem
	.item-box		
		background: #ffffff
		vertical-align: center
		.item-li 
			display: flex
			align-items: center
			height: 1.1rem
			width: 100%
			font-size: 0.32rem
			color: #22252E
			line-height: 1.1rem
			background: url('~assets/img/home/arrow_r.png') no-repeat 90% center
			background-size: 0.48rem 0.48rem
			text-indent: 0.3rem
			&:not(:last-child)
				border-bottom: 1px solid rgb(238,238,238)
</style>