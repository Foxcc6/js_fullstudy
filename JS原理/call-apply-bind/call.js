// let obj = {
//     name:'wn',
//     age:18
// }
// let name = '蜗牛'
// function fn() {
//     console.log(this.name); 
// }

// fn.call(obj)



实现原理
Function.prototype.myCall = function (context) {
    // this指向调用call 的对象
    if (typeof this !== 'function') {
        // 调用call的不是函数
        throw new TypeError('ERROR')
    }
    
    const fn = Symbol('fn') //symbol 唯一值
    const args = [...arguments].slice(1) //fn的参数
    context = context || window
    // 将调用call函数的对象添加到context的属性中
    context[fn] = this
    // 执行该属性
    const result = context[fn](...args)
    //删除该属性
    delete context[fn]
    //返回执行结果
    return result
}
