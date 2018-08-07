<template>
	<div class="wrap">
		<div class="user-info-box item-box">
			<div class="name-input input-box border-bottom-1px">
				<span>姓名：</span>
				<input type="text" name="name" placeholder="请输入联系人姓名" v-model="name">
			</div>
			<div class="gender-input border-bottom-1px">
				<input type="radio" name="gender" id="male" value="male" v-model="gender">
				<label for="male">先生</label>
				<input type="radio" name="gender" id="female" value="female" v-model="gender">
				<label for="female">女士</label>
			</div>
			<div class="tel-input input-box">
				<span>电话：</span>
				<input type="text" name="name" placeholder="请输入联系人电话" v-model='tel'>
			</div>
		</div>
		<div class="address-box item-box">
			<div class="city-input input-box border-bottom-1px">
				<span>辖区：</span>
				<input 
					type="text" 
					name="name" 
					placeholder="请选择所在市、区" 
					readonly="readonly" 
					v-model="city"
					@click="isCityPickerShow = true"
				>
			</div>
			<div class="add-input input-box">
				<span>地址：</span>
				<input type="text" name="address" placeholder="请填写小区/街道、楼号-门牌号" v-model="address">
			</div>
		</div>
		<div class="is-set-default item-box">
			<input type="checkbox" name="isDefault" id="isDefault" v-model="isDefault">
			<label for="isDefault">设为默认地址</label>
		</div>
		<button class="save" @click="save">保存</button>
		<mt-picker 
			:slots="slots" 
			:valueKey="valueKey"
			:showToolbar="showToolbar"
			@change="onValuesChange"
			class="city-picker"
			ref="cityPicker"
			v-show="isCityPickerShow"
		>
			<div class="toolbar">
				<span @click="isCityPickerShow = false">取消</span>
				<span @click="saveCity">确定</span>
			</div>	
		</mt-picker>
		<div class="mask" v-show="isCityPickerShow">
			
		</div>	
	</div>
</template>
<script>
import { Toast, Picker } from 'mint-ui'
import { iosProvinces, iosCitys, iosCountys} from '~/assets/js/area.js'

export default {
	middleware: 'auth',
	components: {
		MtPicker: Picker
	},
	async asyncData({route,store}) {
		const id = route.query.id
		
		if(id){
			const res = await store.dispatch('getAddress',{id})
			let li = res.li[0]
			return {
				id: li._id,
				gender: li.gender,
				isDefault: li.isDefault,
				name: li.name,
				tel: li.tel,
				city: li.city,
				address: li.address
			}

		}else{
			return {
				id: null,
				gender: 'male',
				isDefault: true,
				name: '',
				tel: '',
				city: '',
				address: '',
				
			}
		}
	},


	data() {
		return {
			id: null,
			gender: 'male',
			isDefault: true,
			name: '',
			tel: '',
			city: '',
			address: '',
			showToolbar: true,
			isCityPickerShow: false,
			slots: [
				{
					flex: 1,
					values: iosProvinces,
					className: 'slot1',
					textAlign: 'center'
				},
				{
					flex: 1,
					values: iosCitys,
					className: 'slot2',
					textAlign: 'center'
				},
				{
					flex: 1,
					values: iosCountys,
					className: 'slot3',
					textAlign: 'center'
				}
			],
			valueKey: 'value',
		}
	},
	mounted() {
		let picker = this.$refs.cityPicker

		let value0 = picker.getSlotValue(0)
		let nowCitys = iosCitys.filter((item) => {
  			return item.parentId == value0.id
  		})
   		picker.setSlotValues(1, nowCitys)
   		if(picker.getSlotValue(1)){
       		let nowCountys = iosCountys.filter((item) => {
       			return item.parentId == picker.getSlotValue(1).id
       		})
       		picker.setSlotValues(2, nowCountys)
   		}
	},
	methods: {
		async save() {
			let name = this.name,
				gender = this.gender,
				tel = this.tel,
				city = this.city,
				address = this.address,
				isDefault = this.isDefault;

			if(!name){
				Toast('姓名不能为空')
				return
			}
			if(!tel){
				Toast('手机号不能为空')
				return
			}
			if(!city){
				Toast('辖区不能为空')
				return
			}
			if(!address){
				Toast('地址不能为空')
				return
			}

			let res;
			if(this.id){
				res = await this.$store.dispatch('updateAddress',{
					name,
					gender,
					tel,
					city,
					address,
					isDefault,
					id: this.id
				})				
			}else{
				res = await this.$store.dispatch('postAddress',{
					name,
					gender,
					tel,
					city,
					address,
					isDefault
				})
			}
			
			
			if(res.err){
				Toast(res.msg)
			}else{
				Toast(res.msg)
				this.$router.push('/home/address/list')
			}
		},
		onValuesChange(picker, values) {
      		let nowCitys = iosCitys.filter((item) => {
      			return item.parentId == values[0].id
      		})
       		picker.setSlotValues(1, nowCitys)
       		if(picker.getSlotValue(1)){
	       		let nowCountys = iosCountys.filter((item) => {
	       			return item.parentId == picker.getSlotValue(1).id
	       		})
	       		picker.setSlotValues(2, nowCountys)
       		}

      	},
      	saveCity() {
      		let values = this.$refs.cityPicker.getValues()
      		let city = '';
      		values.forEach((item) => {
      			city += item.value
      		})
      		this.city = city
      		this.isCityPickerShow = false
      	}
	}
}	
</script>
<style lang="sass" scoped>
@import '~assets/sass/baseColor.sass'

.city-picker
	position: fixed
	background: #ffffff
	left: 0
	bottom: 0
	width: 100%
	z-index: 100
	.toolbar
		display: flex
		justify-content: space-between
		align-items: strenth
		border: 1px solid #EEEEEE
		height: 0.8rem
		font-size: 0.34rem
		span 
			flex: none
			line-height: 0.8rem
			width: 2rem
			text-align: center
			&:nth-of-type(2)
				color: $blue


.mask
	position: fixed
	background: #000000
	opacity: 0.5
	left: 0
	top: 0
	width: 100%
	height: 100%
	z-index: 99



.wrap
	height: 100%
	background: $base-bc-blue
	.item-box
		background: #ffffff
		margin-bottom: 0.21rem
		.input-box
			padding: 0.3rem
			line-height: 0.4rem
			color: #555A67
			font-size: 0.28rem
			span:nth-of-type(1)
				margin-right: 0.2rem
			span:nth-of-type(2)
				color: #9FA3B1
			input
				border: none
	.user-info-box
		.gender-input
			line-height: 0.4rem
			font-size: 0.28rem
			padding: 0.3rem
			label:nth-of-type(1)
				margin-left: 1rem
			label:nth-of-type(2)
				margin-left: 0.5rem
			input[name='gender']
				opacity: 0
				clip: rect(0,0,0,0)
				position: absolute
			input[name='gender']+label:before
				content: ''
				display: inline-block
				width: 0.5rem
				height: 0.4rem
				background: url("~assets/img/unchecked.png") no-repeat
				background-size: 0.4rem 0.4rem
				vertical-align: top			
			input[name='gender']:checked+label:before
				background: url("~assets/img/checked.png") no-repeat
				background-size: 0.4rem 0.4rem
	.address-box 
		input 
			width: 5rem	

	.is-set-default
		font-size: 0.28rem
		line-height: 0.4rem
		color: #262626
		padding: 0.3rem
		input[name='isDefault']
			opacity: 0
			clip: rect(0,0,0,0)
			position: absolute
		input[name='isDefault']+label:before
			content: ''
			display: inline-block
			width: 0.6rem
			height: 0.4rem
			background: url("~assets/img/unchecked.png") no-repeat
			background-size: 0.4rem 0.4rem
			vertical-align: top			
		input[name='isDefault']:checked+label:before
			background: url("~assets/img/checked.png") no-repeat
			background-size: 0.4rem 0.4rem
	.save
		display: block
		width: 6.9rem
		height: 0.88rem
		line-height: 0.88rem
		background: #036EB8
		margin: 0.4rem auto 0
		font-size: 0.34rem
		color: #ffffff
		border-radius: 0.08rem
</style>