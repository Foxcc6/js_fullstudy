// 包装类

var num =new Number(123)
num.abc = 'aaa'

console.log(num.abc)
console.log(num*2);

//num参与运算又变回了数字，不参与运算它还能当做对象来使
//能有属性和方法，同理字符串和布尔也一样
//但是null 和 undefined 不行


var str = 'avasd'
console.log(str.length);

var num = 4
num.len = 3
console.log(num.len);   // undefined 而不报错


// 包装类
var num = 4 
num.len = 3
//隐式过程

// new Number(4).len = 3
// delete len
// new Number(4).len
console.log(num.len)




// 考点
var arr = [1,2,3,4,5]
arr.length = 2
console.log(arr);

var str = 'abcd'
str.length = 2
console.log(str.length);


