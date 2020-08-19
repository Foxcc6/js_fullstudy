const Koa = require ('koa')
const app = new Koa()


const main = ctx => {
    
    ctx.response.body = `${ctx.request.url}-${ctx.request.method}-${Date.now()}`
}

app.use(main)

app.listen(3000)