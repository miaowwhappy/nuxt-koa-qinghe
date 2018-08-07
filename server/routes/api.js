import Router from 'koa-router'
import mongoose from "mongoose" 
import { UserSchema } from "../database/schema/user"

mongoose.model('User', UserSchema)
const User = mongoose.model('User')

const router = new Router()


router.post('/api/login',async(ctx, next) =>{
	const {tel, password} = ctx.request.body;
	var user = await User.findOne({ name: tel, password: password }).exec()
	if(user){    
		ctx.session.authUser = {
			user: tel,
			_id: user._id
		}

		return (ctx.body = {
			err: 0,
			user: {
				user: tel,
				_id: user._id
			}
		})
	}

	return (ctx.body = {
		err: 1,
		msg: '账号或密码错误'
	})
})
router.post('/api/logout',async(ctx, next) =>{
	ctx.session.authUser = null
	return (ctx.body = {
		err: 0,
	})
})
router.post('/api/register',async (ctx, next) => {
	const {tel, code, pw} = ctx.request.body
	const isTel = await User.findOne({ name: tel}).exec()
	if(isTel){
		return (ctx.body = {
			err: 1,
			msg: '号码已存在'
		})
	}
	if(code != 666666){
		return (ctx.body = {
			err: 2,
			msg: '验证码不正确'
		})
	}

	const user = new User({
		name: tel,
		password: pw
	})
	await user.save()

	ctx.session.authUser = tel

	return  (ctx.body = {
		err: 0,
		msg: '注册成功',
		user: tel
	})

})

router.post('/api/reset_pw_step1',async (ctx, next) => {
	const {tel, code} = ctx.request.body

	var isTel = await User.findOne({ name: tel}).exec()
	if(!isTel){
		return (ctx.body = {
			err: 1,
			msg: '号码不存在'
		}) 
	}
	if(code != 666666){
		return (ctx.body = {
			err: 2,
			msg: '验证码不正确'
		})
	}

	return (ctx.body = {
		err: 0,
		msg: 'success'
	})

})
router.post('/api/reset_pw_step2',async (ctx, next) => {
	const {tel,code,pw} = ctx.request.body

	var isTel = await User.findOne({ name: tel}).exec()
	if(!isTel){
		return (ctx.body = {
			err: 1,
			msg: '页面信息失效,请返回上一页'
		})
	}
	if(code != 666666){
		return (ctx.body = {
			err: 2,
			msg: '页面信息失效,请返回上一页'
		})
	}

	await User.findOne({ name: tel }).update({ password: pw }).exec()


	return (ctx.body = {
		err: 0,
		msg: 'success'
	})

})

export { router }