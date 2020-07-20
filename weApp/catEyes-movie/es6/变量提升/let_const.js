// var name = "张三"
// console.log(name)


// console.log(name)


// let name = "popo"

// for(let i = 0;i < 3; i++){ // 父作用域
//     let i = 'abc'           //子作用域
//     console.log(i)
// }
 

//暂时性死区
var tmp = 123;
if(true){
    tmp = 'abc'
    let tmp      //let权级更重
}


