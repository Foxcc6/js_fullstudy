const Koa = require ('koa');
const compose = require('koa-compose'); //中间件调用简洁一些
const app = new Koa()

const logger = (ctx,next) =>{
    console.log(`${ctx.request.url}-${ctx.request.method}-${Date.now()}`);
    next()
}

const main = ctx => {
    ctx.response.body = 'hello world'
    //ctx.response.body = `${ctx.request.url}-${ctx.request.method}-${Date.now()}`
}


const middlewares = compose([logger,main])
app.use(middlewares)

//app.use(logger)
//app.use(main)
app.listen(3000)