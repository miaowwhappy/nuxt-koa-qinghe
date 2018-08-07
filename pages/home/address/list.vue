<template>
	<div class="wrap">
		<div class="page-view">
			<div class="page-wrapper">
				<div 
					class="li-item" 
					v-for="(item,index,key) in list"
					:key="key"
					@touchstart="showDeleteButton($event,item)"
					@touchmove="move($event)"
					@touchend="cancel"
				>
					<input 
						type="radio" 
						name="isDefault" 
						:id="item._id" 
						v-model="isDefault" 
						:value="item._id"
					>
					<label :for="item._id" @click.prevent="setDefault(item)" ></label>
					<div @click="useAddress(item)">
						<p>{{item.city}}{{item.address}}</p>
						<p>
							<span>{{item.name}}</span>
							<span v-if="item.gender == 'male'">先生</span>
							<span v-else>小姐</span>
							<span>{{item.tel}}</span>
						</p>
					</div>
					<img src="~assets/img/editor.png" @click="editor(item)">
				</div>
			</div>
		</div>
		<div class="bottom-fix-side">
			<nuxt-link class="add" to="/home/address/manage" tag="button">
				添加新地址
			</nuxt-link>
		</div>
	</div>
</template>
<script>
import { Indicator, MessageBox, Toast} from 'mint-ui';

export default {
	middleware: 'auth',
	async asyncData({store}) {
		

	},
	data() {
		return {
			list: [],
			isDefault: '',
			loop: null,
			x: '',
			y: ''
		}
	},
	async mounted() {
		await this.getList()
	},
	methods: {
		async getList() {
			Indicator.open()
			const data = await this.$store.dispatch('getAddressList')
			this.list = data.list
			Indicator.close()
		},
		async setDefault(item) {
			if(item.idDefault){
				return
			}
			MessageBox.confirm('设为默认地址?').then( async () => {
				Indicator.open()
				let res = await this.$store.dispatch('setDefaultAddress',{id:item._id})
				Toast(res.msg)
				Indicator.close()
				this.list = res.list
				
			});
		},
		showDeleteButton($event,item) {
			this.x = $event.changedTouches[0].clientX
			this.y = $event.changedTouches[0].clientY
			clearTimeout(this.loop)
			this.loop = null
			this.loop = setTimeout(() => {
				MessageBox.confirm('删除此地址?').then( async () => {
					Indicator.open()
					let res = await this.$store.dispatch('cancelAddress',{id:item._id})

					Toast(res.msg)
					Indicator.close()
					this.list = res.list
				});
			},2000)
		},
		move($event) {
			if(this.loop){
				if(Math.abs($event.changedTouches[0].clientX-this.x)>5||
					Math.abs($event.changedTouches[0].clientY-this.y)>5){
					this.cancel()
				}
			}
			
		},
		cancel() {
			clearTimeout(this.loop)
			this.loop = null
		},
		editor(item) {
			this.$router.push({path:'/home/address/manage',query:{
				id: item._id
			}})
		},
		useAddress(item) {
			if(!this.$route.query.use){
				return
			}

			this.$store.commit('SET_ADDRESS',{
				text: item.city + item.address,
				id: item._id
			})

			this.$router.push('/commit-order')
		}

	},
	watch: {
		list() {
			for (let i = 0; i < this.list.length; i++) {
				if(this.list[i].isDefault){
					this.isDefault =  this.list[i]._id; 
					break
				}
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
	display: flex
	flex-direction: column
	align-items: stretch
	.page-view
		flex: auto		
		.page-wrapper
			overflow: auto
			padding-bottom: 1.1rem
			.li-item 
				background: #ffffff
				display: flex
				padding: 0.3rem
				font-size: 0.28rem
				align-items: center
				input[name='isDefault']
					opacity: 0
					clip: rect(0,0,0,0)
					position: absolute
				input[name='isDefault']+label:before
					content: ''
					display: inline-block
					width: 0.4rem
					height: 0.4rem
					background: url("~assets/img/unchecked.png")
					background-size: 0.4rem 0.4rem
					vertical-align: top	
					margin-right: 0.22rem		
				input[name='isDefault']:checked+label:before
					background: url("~assets/img/checked.png")
					background-size: 0.4rem 0.4rem
				>div
					flex: auto
					p
						line-height: 0.4rem
						&:nth-of-type(1)
							margin-bottom: 0.3rem
						span
							color: #555A67
							&:nth-of-type(2)
								margin-right: 0.3rem
				>img 
					width: 0.4rem
					height: 0.4rem
				&:not(:last-child)
					border: 1px solid #EEEEEE

	.bottom-fix-side
		position: fixed
		width: 100%
		height: 1.1rem
		left: 0
		bottom: 0
		flex: none
		display: flex
		align-items: stretch
		.add 
			background: $blue
			color: #ffffff
			font-size: 0.32rem
			flex: auto
</style>











