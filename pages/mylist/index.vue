<template>
	<div class="wrap">
		<list-nav></list-nav>
		<div class="content">
			<scroll ref="scroll"
				:data="all"
				:scrollbar="scrollbarObj"
				:pullDownRefresh="pullDownRefreshObj"
				:pullUpLoad="pullUpLoadObj"
				:startY="parseInt(startY)"
				@pullingDown="onPullingDown"
				@pullingUp="onPullingUp"
				class="scroll"
			>
				<div class="service-item" v-for="item in all">
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
					<div class="isShowBtn" v-if="item.type==5">
						<nuxt-link tag="button" class="next-btn" :to="{path:'/order-pay'}">立即支付</nuxt-link>
						<button class="cancel-btn">取消订单</button>
					</div>
					<div class="isShowBtn" v-else-if="item.type==2">
						<nuxt-link tag="button" to="/commit-order" class="next-btn">重新下单</nuxt-link>			
					</div>
				</div>
		    </scroll>
	    </div>	
	</div>
</template>
<script>
//serviceType 0 未服务待分配 1 未服务已分配 2 已取消 3 已服务 4 进行中 5 待支付
import ListNav from "~/components/ListNav"
import Scroll from "~/components/scroll"
import axios from "axios"

export default{
	layout: 'incf',
	middleware: 'auth',
	components: {
		Scroll,
		ListNav,
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
			all: [],
			page: 0,
			pages: 0,
			limit: 5
		}
		
	},
	async asyncData ({store}) {
		let page = 0
		let limit = 5
		let {all,pages} = await store.dispatch('getAllList',{page,limit})

		return {
			all,
			pages: pages
		}
	},
	methods: {
		async getAllList (page, limit) {
			let res = await this.$store.dispatch('getAllList',{page,limit})
			return res
		},
		async onPullingDown() {
        	// 下拉加载
	        if (this._isDestroyed) {
	            return
	        }
	        let res = await this.getAllList(0,this.limit)
	        this.pages = res.pages
	        this.page = 0

	        if(res.err){	        	
	        	this.$refs.scroll.forceUpdate()
	        }else{
	        	this.all = res.all 	        	
	        }
	        

	    },
	    async onPullingUp() {
	        // 更新数据
	        if (this._isDestroyed) {
	            return
	        }
	        this.page += 1
	        
	        if( this.page > this.pages){
	        	this.page = this.pages
	        }
	        let res = await this.getAllList(this.page,this.limit)

	        this.pages = res.pages
	        if(res.err){
	        	this.$refs.scroll.forceUpdate()
	        }else{
	        	this.all = this.all.concat(res.all)
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
		overflow: hidden
		flex: auto
		height: 100%
		.service-item 
			width: 100%
			margin-bottom: 0.2rem
			background: #ffffff			
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
				background: url('~assets/img/home/arrow_r.png') no-repeat 95% 30%
				background-size: 0.45rem 0.45rem
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
			.isShowBtn 
				height: 1.3rem				
				border-top: 1px solid #EEEEEE
				display: flex
				flex-direction: row-reverse
				align-items: center
				button
					width: 3.3rem
					height: 0.7rem
					font-size: 0.28rem
					margin-right: 0.3rem
					&.cancel-btn
						border: 1px solid #D3D6DB
						color: #555A67
						background: #ffffff
					&.next-btn
						background: $blue
						color: #ffffff



</style>