import Koa from 'koa'
import { Nuxt, Builder } from 'nuxt'
import bodyParser from "koa-bodyparser"
import session from "koa-session"
import mongoose from "mongoose" 
import { router } from "./routes/api"
import { home } from "./routes/home"


const auth = async (ctx, next) => {
  await next()
}

async function start () {
  const app = new Koa()
  const host = process.env.HOST || '127.0.0.1'
  const port = process.env.HOST || 7000

  app.use(bodyParser())

  // Import and Set Nuxt.js options
  let config = require('../nuxt.config.js')
  config.dev = !(app.env === 'production')

  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  app.keys = ['some session']

  const CONFIG = {
    key: "SESSION",
    maxAge: 86400000,
    overwrite: true,
    httpOnly: true,
    signed: true,
    rolling: false
  }
  app.use(session(CONFIG, app))

  app.use(auth)
  app.use(router.routes())
  app.use(home.routes())

  app.use(async (ctx, next) => {
    await next()
    ctx.status = 200 // koa defaults to 404 when it sees that status is unset
    ctx.req.session = ctx.session
    return new Promise((resolve, reject) => {
      ctx.res.on('close', resolve)
      ctx.res.on('finish', resolve)
      nuxt.render(ctx.req, ctx.res, promise => {
        // nuxt.render passes a rejected promise into callback on error.
        promise.then(resolve).catch(reject)
      })
    })
  })
  

  app.listen(port, host)
  console.log('Server listening on :' + host + ":" + port) // eslint-disable-line no-console

  mongoose.Promise = Promise
  mongoose.set('debug',true)
  mongoose.connect('mongodb://localhost:27017/qinghe',{
    useNewUrlParser: true
  })
    
  mongoose.connection.on('open',async () => {
    console.log('mongodb opened!')
  })

}

start()
