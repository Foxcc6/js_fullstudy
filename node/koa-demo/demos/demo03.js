//  引入依赖
const Koa = require('koa')

const app = new Koa() //定义一个新的KOA实例

// ctx.request.accepts 检查http请求的accept的内容的
// Accept 属于请求头，代表客户端希望接受的数据类型，跟Content-Type类似
const main = ctx => {
 if(ctx.request.accepts('xml')){
    ctx.response.type = 'xml'
    ctx.response.body='<data>hello world</data>'
 }else if(ctx.request.accepts('html')){
    ctx.response.type = 'html'
    ctx.response.body='<p>hello world</p>'
 }else if(ctx.request.accepts('json')){
    ctx.response.type = 'json'
    ctx.response.body='{data:hello world}'
 }else{
    ctx.response.type = 'text'
    ctx.response.body='hello world'
 }
}
app.use(main)


app.listen(3000,()=>{
    console.log('3000端口');
    
})