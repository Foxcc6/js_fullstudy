// 中间件
const fs = require('fs').promises
const Koa = require('koa')
const app = new Koa() 

// 中间件   实现某一个独立的功能
const main = async function(ctx){
    ctx.response.type = 'html'
    ctx.response.body = await fs.readFile('./template.html','utf-8')
}

app.use(main)
app.listen(3000)