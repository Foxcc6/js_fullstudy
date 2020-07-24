// // set类似于数组  但是不一样的地方是set这种数据结构内部的成员是唯一值  不能有相同值



//  const s = new Set()      // 类数组  set {}
// // const arr = new Array()  // 和 const arr = [] 一样
// // console.log(s)

// let arr = [2,3,4,1,3,2,5]
// for(let item of arr){
//     console.log(item)
// }


// arr.forEach((x) => {
//     s.add(x)
// })
// console.log(s)


// const set = new Set([1,2,3,4,4,5,5])
// console.log(set.size)
// // set {}

// // const set = new Set(document.querySelectorAll('div'))
// // console.log(set.size)


// //  数组去重
// // let arr = [2,3,4,1,3,2,5]
// console.log([...new Set(arr)])

// // 字符串去重
// console.log([...new Set('abcdab')])



// const set = new Set()
// set.add(1)
// set.add(2)
// set.add(3)  //set.add(1).add(2).add(3)

// set.delete(2)
// set.clear()
// console.log(set.has(3))


// const set = new Set[1,2,3,4,5]
// const array =Array.from(set)
// Array.forEach(e => {
//     console.log(e)
// })

// //数组去重 
// function dedupe(array){
//     return Array.from(new Set(array))

// }
//   console.log(dedupe([1,2,3,4,4,5,6]))



  //  set  遍历
  let set = new Set(['red','green','blue'])

//   keys()是set 结构中返回键名的遍历器
 for(let item of set.keys()){
    //  console.log(item)
 }

//  values() 是set 结构中返回键值的遍历器
 for(let item of set.values()){
    console.log(item)
    
}
//  entries() 是set 结构中返回键值对的遍历器


// 取到的东西是一样的，但真实的东西不一样