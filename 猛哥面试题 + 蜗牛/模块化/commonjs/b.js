const mod = require('./a')

console.log(mod.c,mod.obj); //3
// let a = 3,b =a
// let a = {},b = a
mod.inc()
// 导入的值就是 把导出的值复制拷贝一份
// 如果一个模块被require了两次，他会把上一次的结果缓存起来
console.log(mod.c); //3
// AMD CMD


