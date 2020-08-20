const Koa = require ('koa')
const app = new Koa()
const router = require('koa-route')


const about = ctx=> {
    ctx.response.type = 'html'
    ctx.response.body = '<a href="/">About</a>'  
}

const main = (ctx) =>{
    // if(ctx.request.url == '/about'){
    //     ctx.response.type = 'html'
    //     ctx.response.body = '<a href="/">About</a>'    
    // }else{
        ctx.response.body = 'hello world'
     }
  



app.use(router.get('/about',about))
app.use(router.get('/',main))

app.listen(3000)
// app.use(main)
// 区分客户端请求的是哪个接口  路由


