// // 实现一个函数执行出来的结果都是累加的
// var count = 0
// function test() {
//     count++
//     console.log(count)
// }
// test()


//不依赖外部变量实现如上效果
// 很难，函数里面没有一个始终固定不变的变量，每次重新执行函数都会初始化函数里面的所有东西
function add(){

    var count = 0
    function a() {
       console.log(++count) 

    }
    return a
}

var result = add()
result()
result()