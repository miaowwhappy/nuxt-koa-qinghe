<template>
	<div class="evaluate">
		<span v-for="(item, index) in spans" @click="eva(index)" :class="{bc: star >= index && isShow}"></span>
	</div>
</template>
<script>
export default{
	props:{
		justShow: {
			type: Boolean,
			default: false
		},
		starNum: {
			type: Number,
			default: 0
		}
	},
	data () {
		return {
			spans: new Array(5),
			//prevIndex: 0,
			isShow: false,
			star: this.starNum - 1
		}
	},
	mounted () {
		if(this.justShow){
			this.isShow = true
		}
	},
	methods: {
		eva (index) {
			/*
			**
				if(index === 0){
					if(this.prevIndex !== 0){
						this.isShow = true
					}else{
						this.isShow = !this.isShow
					}				
				}else{
					this.isShow = true
				}
				this.star = index
				this.prevIndex = index	
			**
			*/	
			if(!this.justShow){
				this.isShow = true
				this.star = index
				this.$emit('setStar',++index)
			}	
		}
	}
}
</script>
<style lang="sass" scoped>
	.evaluate
		height: 0.4rem
		display: flex
		span 
			flex: none
			display: inline-block
			width: 0.35rem
			height: 0.35rem
			background: url('/img/star-white.png') no-repeat top center
			background-size: 0.35rem 0.35rem
			margin-right: 0.1rem
		.bc 
			background: url('/img/star-red.png') no-repeat top center
			background-size: 0.35rem 0.35rem
</style>