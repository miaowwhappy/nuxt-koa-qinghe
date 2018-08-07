import axios from 'axios'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export default {
	nuxtServerInit ({commit}, {req}) {
		if(req.session&&req.session.authUser){
			commit('SET_USER', req.session.authUser)
		}
	},
	async login ({commit},{tel,password}) {
		let res = await axios.post('/api/login',{
			tel,
			password
		})
		let {data} = res
		if(!data.err){
			commit('SET_USER',data.user)
		}

		return data
	},
	async logout ({commit}) {
		commit('SET_USER', null)
		await axios.post('/api/logout')		
	},
	async register ({commit},{tel,code,pw}) {
		let res = await axios.post('/api/register',{
			tel,
			code,
			pw
		})

		let {data} = res
		if(!data.err){
			commit('SET_USER',data.user)
		}

		return data
	},
	async resetPWStepOne ({commit},{tel,code}) {
		let res = await axios.post('/api/reset_pw_step1',{
			tel,
			code
		})

		return res.data
	},
	async resetPWStepTwo ({commit},{tel,code,pw}) {
		let res = await axios.post('/api/reset_pw_step2',{
			tel,
			code,
			pw
		})

		return res.data
	},
	async postFeedback ({commit},{content,tel}){
		let res = await axios.post('/api/feedback/post',{
			content,
			tel
		})
		
		return res.data
	},
	async getCoupon ({commit}){
		let res = await axios.get('/api/coupon/get',{
			headers: {'content-type': 'application/x-www-form-urlencoded'},
   			withCredentials: true
		})
		
		return res.data
	},
	async postEvaluation ({commit},body){
		
		let res = await axios.post('/api/evaluation/post',body)

		return res.data
	},
	async getEvaluations ({commit},body){
		
		let res = await axios.post('/api/evaluations/get',body)

		return res.data
	},
	async getHasPayList ({commit},body){
		let res = await axios.post('/api/hasPayList/get',body)

		return res.data
	},

	async getAllList ({commit},body){
		let res = await axios.post('/api/allList/get',body)

		return res.data
	},

	async postAddress ({commit},body){
		let res = await axios.post('/api/address/post',body)

		return res.data
	},
	async getAddress ({commit},body){
		let res = await axios.post('/api/address/get',body)

		return res.data
	},
	async updateAddress ({commit},body){
		let res = await axios.post('/api/address/update',body)

		return res.data
	},
	async getAddressList ({commit}){
		let res = await axios.get('/api/addressList/get')

		return res.data
	},
	async setDefaultAddress ({commit},body){
		let res = await axios.post('/api/addressList/setDefault',body)
		return res.data
	},
	async cancelAddress ({commit},body){
		let res = await axios.post('/api/addressList/cancel',body)
		return res.data
	},


}


