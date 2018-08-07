<template>
	<div class="wrap">
		<list-nav></list-nav>
		<div class="content">
			<scroll ref="scroll"
				:data="hasPay"
				:scrollbar="scrollbarObj"
				:pullDownRefresh="pullDownRefreshObj"
				:pullUpLoad="pullUpLoadObj"
				:startY="parseInt(startY)"
				@pullingDown="onPullingDown"
				@pullingUp="onPullingUp"
			>
				<div class="service-item" v-for="item in hasPay">
					<div class="top-side">
						<span>支付时间：{{item.payTime}}</span>
						<span>{{item.statusText}}</span>
					</div>
					<nuxt-link tag="div" class="bottom-side" :to="{path:'/mylist/detail',query:{type:item.type}}">
						<img src="/img/index/1m_w1.png">
						<div>
							<p>{{item.typeName}}</p>
							<p>{{item.address}}</p>
						</div>
					</nuxt-link>
				</div>
		    </scroll>
	    </div>	
	</div>
</template>
<script>
import ListNav from "~/components/ListNav"
import Scroll from "~/components/scroll"
import axios from "axios"

export default{
	layout: 'incf',
	middleware: 'auth',
	components: {
		Scroll,
		ListNav
	},
	data () {
		return {
			scrollbar: true,
	        scrollbarFade: true,
	        pullDownRefresh: true,
	        pullDownRefreshThreshold: 90,
	        pullDownRefreshStop: 40,
	        pullUpLoad: true,
	        pullUpLoadThreshold: 0,
	        startY: 0,
	        scrollToX: 0,
	        scrollToY: -200,
	        scrollToTime: 700,
	        scrollToEasing: 'bounce',
	        scrollToEasingOptions: ['bounce', 'swipe', 'swipeBounce'],
			hasPay: [],
			hasPayPage: 0,
			hasPayPages: 0,
			limit: 5

		}
		
	},
	async asyncData ({store}) {
		let page = 0
		let limit = 5
		let {hasPay,pages} = await store.dispatch('getHasPayList',{page,limit})

		return {
			hasPay,
			hasPayPages: pages
		}
	},
	methods: {
		async getHasPayList (page, limit) {
			let res = await this.$store.dispatch('getHasPayList',{page,limit})
			return res
		},
		async onPullingDown() {
        	// 下拉加载
	        if (this._isDestroyed) {
	            return
	        }
	        let res = await this.getHasPayList(0,this.limit)
	        this.hasPayPages = res.pages
	        this.hasPayPage = 0

	        if(res.err){	        	
	        	this.$refs.scroll.forceUpdate()
	        }else{
	        	this.hasPay = res.hasPay 	        	
	        }
	        

	    },
	    async onPullingUp() {
	        // 更新数据
	        if (this._isDestroyed) {
	            return
	        }
	        this.hasPayPage += 1
	        
	        if( this.hasPayPage > this.hasPayPages){
	        	this.hasPayPage = this.hasPayPages
	        }
	        let res = await this.getHasPayList(this.hasPayPage,this.limit)

	        this.hasPayPages = res.pages
	        if(res.err){
	        	this.$refs.scroll.forceUpdate()
	        }else{
	        	this.hasPay = this.hasPay.concat(res.hasPay)
	        }
	    },
	    rebuildScroll() {
	        Vue.nextTick(() => {
	          this.$refs.scroll.destroy()
	          this.$refs.scroll.initScroll()
	        })
	    }
	},
	watch: {
      	scrollbarObj: {
        	handler() {
          		this.rebuildScroll()
       		},
        	deep: true
      	},
      	pullDownRefreshObj: {
	        handler() {
	          this.rebuildScroll()
	        },
	        deep: true
	      },
	     pullUpLoadObj: {
	        handler() {
	          this.rebuildScroll()
	        },
	        deep: true
	     },
      	startY() {
	        this.rebuildScroll()
	    }
    },
    computed: {
      scrollbarObj: function () {
        return this.scrollbar ? {fade: this.scrollbarFade} : false
      },
      pullDownRefreshObj: function () {
        return this.pullDownRefresh ? {
          threshold: parseInt(this.pullDownRefreshThreshold),
          stop: parseInt(this.pullDownRefreshStop)
        } : false
      },
      pullUpLoadObj: function () {
        return this.pullUpLoad ? {
          threshold: parseInt(this.pullUpLoadThreshold),
        } : false
      }
    },
}	
</script>
<style lang="sass" scoped>
@import '~assets/sass/baseColor.sass'

.wrap
	background: $base-bc-blue
	height: 100%
	display: flex
	flex-direction: column
	.content
		flex: auto
		height: 100%
		overflow: hidden
		.service-item 
			width: 100%
			margin-bottom: 0.2rem
			background: #ffffff url('~assets/img/home/arrow_r.png') no-repeat 95% 60%
			background-size: 0.45rem 0.45rem
			.top-side 
				height: 0.8rem
				border-bottom: 1px solid #EEEEEE
				font-size: 0.28rem
				padding: 0 0.3rem
				display: flex
				justify-content: space-between
				align-items: center
				& span:nth-of-type(1)
					color: #60626A
					flex: none
				& span:nth-of-type(2)
					color: #FC454C
					flex: none
			.bottom-side 
				padding: 0.3rem
				display: flex
				img 
					width: 0.8rem
					height: 0.8rem
					flex: none							
				&>div 
					flex: none
					margin-left: 0.2rem
					p:nth-of-type(1)
						line-height: 0.45rem
						color: #60626A
						font-size: 0.32rem
					p:nth-of-type(2)
						line-height: 0.4rem
						color: #60626A
						margin-top: 0.1rem
						font-size: 0.28rem

</style>