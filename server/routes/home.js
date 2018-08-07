import Router from 'koa-router'
import mongoose from "mongoose" 
import { FeedbackSchema } from "../database/schema/feedback"
import { EvaluationSchema } from "../database/schema/evaluation"
import { AddressSchema } from "../database/schema/address"

mongoose.model('Feedback', FeedbackSchema)
const Feedback = mongoose.model('Feedback')

mongoose.model('Evaluation', EvaluationSchema)
const Evaluation = mongoose.model('Evaluation')

mongoose.model('Address', AddressSchema)
const Address = mongoose.model('Address')

const home = new Router()
const sleep = time => new Promise(resolve => setTimeout(resolve, time))

home.post('/api/feedback/post', async (ctx, next) => {
	const {content, tel} = ctx.request.body;

	const feedback = new Feedback({
		content,
		tel
	})

	await feedback.save()
	
	return (ctx.body = {
		err: 0,
		msg: '评论成功'
	})

})

home.get('/api/coupon/get', async (ctx, next) => {
	let couponGroup = [
		{
			limit_name: '仅限单次·居家保洁',
			limit_other_name: '新用户专享',
			type: 0,
			money: 10,
			userful_life: '2018-07-02'

		},
		{
			limit_name: '全品类通用',
			limit_other_name: '新用户专享',
			type: 0,
			money: 160,
			userful_life: '2018-07-02'

		},
		{
			limit_name: '全品类通用',
			limit_other_name: '新用户专享',
			type: 1,
			money: 160,
			userful_life: '2018-07-02'

		},
		{
			limit_name: '全品类通用',
			limit_other_name: '新用户专享',
			type: 2,
			money: 160,
			userful_life: '2018-07-02'

		},
	]

	//await sleep(2000)	
	return ctx.body = couponGroup
	

})

home.post('/api/evaluation/post', async (ctx, next) => {
	const {timeStarNum,attitudeStarNum,qualityStarNum,tags,content} = ctx.request.body;

	
	/*
	**
		if(!ctx.session.authUser){
			throw new Error('用户不存在')
			return	
		}
	**
	*/

	const userId = ctx.session.authUser._id;

	const evaluation = new Evaluation({
		timeStarNum,
		attitudeStarNum,
		qualityStarNum,
		tags,
		content,
		user: userId
	})

	await evaluation.save()

	return (ctx.body = {
		err: 0,
		msg: '评论成功'
	})

})

home.post('/api/evaluations/get', async (ctx, next) => {
	let count = await Evaluation.find().count().exec()

	let list = await Evaluation.find().populate({path: 'user'}).exec()
	return ctx.body = {
		err: 0,
		msg: '获取成功',
		list,
		count
	}
})



home.post('/api/hasPayList/get', async (ctx, next) => {
	let hasPay = [{
				payTime: '2018-07-03 22:01:25',
				statusText: '待分配',
				typeName: '单次·居家保洁',
				address: '市辖区世纪大道恒大山水城1…',
				type: 0
			},
			{
				payTime: '2018-07-03 22:01:25',
				statusText: '待分配',
				typeName: '单次·居家保洁',
				address: '市辖区世纪大道恒大山水城2…',
				type: 0
			},
			{
				payTime: '2018-07-03 22:01:25',
				statusText: '待分配',
				typeName: '单次·居家保洁',
				address: '市辖区世纪大道恒大山水城3…',
				type: 0
			},
			{
				payTime: '2018-07-03 22:01:25',
				statusText: '待分配',
				typeName: '单次·居家保洁',
				address: '市辖区世纪大道恒大山水城4…',
				type: 0
			},
			{
				payTime: '2018-07-03 22:01:25',
				statusText: '待分配',
				typeName: '单次·居家保洁',
				address: '市辖区世纪大道恒大山水城5…',
				type: 0
			},
			{
				payTime: '2018-07-03 22:01:25',
				statusText: '待分配',
				typeName: '单次·居家保洁',
				address: '市辖区世纪大道恒大山水城6…',
				type: 0
			},
			{
				payTime: '2018-07-03 22:01:25',
				statusText: '待分配',
				typeName: '单次·居家保洁',
				address: '市辖区世纪大道恒大山水城7…',
				type: 0
			}];

	let {page,limit} = ctx.request.body
	page = page ? page : 0
	limit = limit ? limit : 4

	let pages = Math.ceil(hasPay.length / limit)

	let start = Math.min(page,pages-1) * limit
	let end = Math.min(start + limit, hasPay.length)

	hasPay = hasPay.slice(start, end)
	//await sleep(2000)

	if(page > pages - 1){
		return (ctx.body = {
			err: 1,
			msg: '已经到最后一页了',
			pages
		})
	}else{
		return (ctx.body = {
			err: 0,
			msg: '获取成功',
			pages,
			hasPay
		})
	}

})

home.post('/api/allList/get', async (ctx, next) => {
	//serviceType 0 未服务待分配 1 未服务已分配 2 已取消 3 已服务 4 进行中 5 待支付
	let all = [{
				payTime: '2018-07-03 22:01:25',
				statusText: '待支付',
				typeName: '单次·居家保洁',
				address: '市辖区世纪大道恒大山水城1…',
				type: 5
			},
			{
				payTime: '2018-07-03 22:01:25',
				statusText: '已取消',
				typeName: '单次·居家保洁',
				address: '市辖区世纪大道恒大山水城2…',
				type: 2
			},
			{
				payTime: '2018-07-03 22:01:25',
				statusText: '待分配',
				typeName: '单次·居家保洁',
				address: '市辖区世纪大道恒大山水城3…',
				type: 0
			},
			{
				payTime: '2018-07-03 22:01:25',
				statusText: '待分配',
				typeName: '单次·居家保洁',
				address: '市辖区世纪大道恒大山水城4…',
				type: 0
			},
			{
				payTime: '2018-07-03 22:01:25',
				statusText: '待分配',
				typeName: '单次·居家保洁',
				address: '市辖区世纪大道恒大山水城5…',
				type: 0
			},
			{
				payTime: '2018-07-03 22:01:25',
				statusText: '待支付',
				typeName: '单次·居家保洁',
				address: '市辖区世纪大道恒大山水城6…',
				type: 5
			},
			{
				payTime: '2018-07-03 22:01:25',
				statusText: '待分配',
				typeName: '单次·居家保洁',
				address: '市辖区世纪大道恒大山水城7…',
				type: 0
			}];

	let {page,limit} = ctx.request.body
	page = page ? page : 0
	limit = limit ? limit : 4

	let pages = Math.ceil(all.length / limit)

	let start = Math.min(page,pages-1) * limit
	let end = Math.min(start + limit, all.length)

	all = all.slice(start, end)
	//await sleep(2000)

	if(page > pages - 1){
		return (ctx.body = {
			err: 1,
			msg: '已经到最后一页了',
			pages
		})
	}else{
		return (ctx.body = {
			err: 0,
			msg: '获取成功',
			pages,
			all
		})
	}

})

home.post('/api/address/post', async (ctx, next) => {
	const {name,gender,tel,city,address,isDefault} = ctx.request.body;

	const userId = ctx.session.authUser._id;

	if(isDefault){
		await Address.update({user:userId},{isDefault:false},{multi:true}).exec()
	}

	const addressNew = new Address({
		name,
		gender,
		tel,
		city,
		address,
		isDefault,
		user: userId
	})
	try{
		await addressNew.save()
	} catch(e) {

		return (ctx.body = {
			err: 1,
			msg: e
		})
	}

	return (ctx.body = {
		err: 0,
		msg: '地址保存成功'
	})

})
home.post('/api/address/get', async (ctx, next) => {
	const { id } = ctx.request.body

	const li = await Address.find({ _id:id }).exec()
	return ctx.body = {
		err: 0,
		msg: "获取成功",
		li
	}
})
home.post('/api/address/update', async (ctx, next) => {

	const {name,gender,tel,city,address,isDefault,id} = ctx.request.body;

	const userId = ctx.session.authUser._id;

	console.log(ctx.params.id)

	if(isDefault){
		await Address.update({user:userId},{isDefault:false},{multi:true}).exec()
	}

	await Address.update({_id:id},{
		name,
		gender,
		tel,
		city,
		address,
		isDefault,
	}).exec()

	return (ctx.body = {
		err: 0,
		msg: '地址更新成功'
	})
})
home.get('/api/addressList/get', async (ctx, next) => {
	if(!ctx.session.authUser){		
		return ctx.redirect('/')
	}

	const userId = ctx.session.authUser._id;

	const list = await Address.find({user:userId}).sort({isDefault:-1}).exec()

	return (ctx.body = {
		err: 0,
		msg: "获取成功",
		list
	})

})

home.post('/api/addressList/setDefault', async (ctx, next) => {
	const { id } = ctx.request.body

	if(!ctx.session.authUser){		
		
	}

	const userId = ctx.session.authUser._id;
	await Address.update({user:userId},{isDefault:false},{multi:true}).exec()

	let li = await Address.update({_id:id},{isDefault:true}).exec()
	const list = await Address.find({user:userId}).sort({isDefault:-1}).exec()

	return (ctx.body = {
		err: 0,
		msg: "设置默认地址成功",
		li,
		list
	})

})
home.post('/api/addressList/cancel', async (ctx, next) => {
	const { id } = ctx.request.body

	if(!ctx.session.authUser){		
		
	}

	const userId = ctx.session.authUser._id;

	let li = await Address.remove({_id:id}).exec();

	const list = await Address.find({user:userId}).sort({isDefault:-1}).exec()

	await sleep(2000)
	return (ctx.body = {
		err: 0,
		msg: "删除地址成功",
		li,
		list
	})

})





export { home }