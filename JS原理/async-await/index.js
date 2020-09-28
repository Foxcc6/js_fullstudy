function getData() {
    setTimeout(() => {
        return 'JSON'
    }, 500)
}

// 需要使用上面的异步函数的函数前面加上async,声明这是一个异步函数
async function testAsync() {
    // 在异步函数前面加上await，函数执行就会等待await声明的异步函数执行完毕，再往下执行
    try {
        await getData()
        //...剩下的代码
    } catch (error) {
        console.log(error);
    }
}

// 1. 函数声明式，函数表达式，对象方法，class方法，箭头函数都可以声明async
// 2. 任何一个await语句后面的promise对象变为reject，那么整个async函数会中断
// 3. async函数返回promise对象，必须等到所有的await命令后面的promise对象执行完才会发生状态改变




//
// 第五题:输出什么，
// async/await原理是什么，把下
// 面这段代码翻译成Promise
// function getJson() {
//     return new Promise((reslove, reject) => {
//         setTimeout(function () {
//             console.log(2)
//             reslove(2)
//         }, 2000)
//     })
// }
// async function testAsync() {
//     await getJson()
//     console.log(3)
// }
// testAsync()


// 我的答案
// function getJson() {
//     return new Promise((reslove, reject) => {
//         setTimeout(function () {
//             console.log(2)
//             reslove(2)
//         }, 2000)
//     })
// }

// function testAsync() {
//     return new Promise((reslove, reject) => {
//         getJson()
//     }).then(console.log(3))
// }
// testAsync()


function getJson() {
    return new Promise((reslove, reject) => {
        setTimeout(function () {
            console.log(2)
            reslove(2)
        }, 2000)
    })
}

function testAsync() {
    return new Promise.reslove().then (function() {
        return getJson()
    }).then(console.log(3))
}
testAsync()