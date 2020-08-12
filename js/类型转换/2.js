// 一元操作符 +
// 任何字符类型与字符串相加都是字符串
// console.log(1+'1')
// 1==>'1'  //隐式类型转换 '1'+ '1'


console.log(+ '1')
// +   ToNumber        Number ('1')
console.log(+['1'])

// Toprimitive(input,[preferredType])
// input 表示要处理的值
// preferredType 非必填，表示希望转换成的类型     只有  Number 和 String
// 如果preferredType没传，当input是日期类型时，preferredType相当于string，其他情况都相当于number


//  Toprimitive(obj,Number)
// 1. 如果obj是基本类型，直接返回
// 2. 否则调用 valueof,如果返回一个原始值，则JS将其返回
// 3. 否则调用 toString,如果返回一个原始值，则JS将其返回
// 4. 否则JS抛出一个类型错误异常

//  Toprimitive(obj,String)
// 1. 如果obj是基本类型，直接返回
// 2. 否则调用 toString,如果返回一个原始值，则JS将其返回
// 3. 否则调用 valueof,如果返回一个原始值，则JS将其返回
// 4. 否则JS抛出一个类型错误异常



// 对象使用valueof 时会报错  {}隐式转换不了



//二元操作符 +
// val1 + val2   = > Toprimitive(val1) +Toprimitive(val2)
// null + 1      1
// []+[]        ""
// []+{}
// {}+{}