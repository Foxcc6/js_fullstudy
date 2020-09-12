//Object.create 的实现原理

let a = { b:1 }

let c = Object.create(a)

function create(obj) {
    if (typeof obj !== 'object') { throw TypeError }
    function F() {}
    F.prototype = obj
    let o = new F()
    return o


    // return {
    //     __proto__:obj
    // }
}