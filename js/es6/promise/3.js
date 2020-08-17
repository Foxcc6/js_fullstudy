
let xq = new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log('原来相亲了');
        resolve('相亲成功！嘿嘿')
    }, 2000)
})

xq.then((res)=>{
    // console.log(res)   
  return  marry()
})
.then((res)=>{
     baby1()
})




// function xq() {
//     setTimeout(() => {
//         console.log('原来相亲了');
//         marry()
//     }, 2000)
// }


  let marry = new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log('原来结婚了');
    }, 1000)
})






function baby1() {
    setTimeout(() => {
        console.log('小圆1出生')
    }, 500)
}
