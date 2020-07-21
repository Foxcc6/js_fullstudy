// //----------------数组的赋值-------------------
// let a = 1
// let b = 2
// let c = 3

// let [a,b,c] = [1,2,3]


// let[foo,[[bar],baz]] = [1,[[2],3]]

// let [,,third] = ['a','b','c']
// let [x,y] = [1,2,3]

// let [head, ...tail] = [1,2,3,4] //...代表的是所有 输出为1，【2,3,4,】

// let [a,b,...c] = ['hello']  //输出为  hello undefined []

// let[x,y = 'aaa'] = ['a',undefined]  //undefined 解构出来默认赋值是不成功的  输出为 a,aaa


// let[x = 1,y = x] = [2 , 3]  //输出为2，3





// //-----------------对象的赋值-------------------------------

// let {foo,bar} = {foo:'aaa',bar:'bbb'}   //对象当中必须放键值对


// let{foo:baz} = {foo:'aaa',bar:'bbb'} //输出foo报错，输出baz为aaa,   foo是匹配模式，baz才是变量

let obj ={
    name:'aaa',
    desc:{
        alone:false,
        age:20,
        sanwei:[50,100,120]
    }

}
let {name,desc:{alone,age},desc:{sanwei:[x,y,z]}} = obj
console.log(name,age,alone,x,y,z)


let x
({x} = {x : 1})    //{x} JS会识别为代码块，所以得打括号


let {length:len} = 'hello'
console.log(len)




//---------------------数值和布尔值解构---------------------
let{ toString : s} = true
console.log;(s === Boolean.prototype.toString)

