const Koa = require('koa')

const app = new Koa() //定义一个新的KOA实例


const main = ctx => {
    // console.log(ctx);
    if(ctx.request.url !=='/'){
        ctx.response.type = 'html'
        ctx.response.body = '<a href="/">Index Page</a>'
    }else{
        ctx.response.body = 'Hello World'
    }
}

app.use(main)


app.listen(3000,()=>{
    console.log('3000端口');
    
})

