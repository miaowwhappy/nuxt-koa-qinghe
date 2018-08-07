import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions.js'

Vue.use(Vuex)

const store = () => new Vuex.Store({
	state: {
		authUser: null,
		orderInfo: {
			address: {
				text: '请选择服务地址',
				id: 0,
			},
			time: {
				text: '请选择服务时间',
				val: 0
			},
			coupon: {
				text: '请选择优惠券',
				val: 0,
			},

		}
	},

	mutations: {
		SET_USER: function(state, user){
			state.authUser = user
		},
		SET_COUPON: function(state, {text, val}){
			state.orderInfo.coupon.text = text
			state.orderInfo.coupon.val = val
		},
		SET_ADDRESS: function(state, {text, id}){
			state.orderInfo.address.text = text
			state.orderInfo.address.id = id
		},
		SET_SERVICE_TIME: function(state, {text, val}){
			state.orderInfo.time.text = text
			state.orderInfo.time.val = val
		},
	},
			 
	actions
})

export default store