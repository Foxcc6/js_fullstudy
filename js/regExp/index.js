// 正则的定义
let patt1 = new RegExp("hello")
let patt2 = /word/
//正则的使用 test()

// let pat = /my/       //正则就
// let str = "this is my code..."


// let arr = str.split(' ')
// console.log(arr.indexOf('my'))

// console.log(pat.test(str))

// let pat = /hello/
// let msg = 'oh hello world'
// console.log(pat.exec(msg))

//正则表达式的类型
// /pattern/attributes   g i   全局匹配，   区分大小写匹配


// 不区分大小写
// let str = 'Visit NanChang oh my world'
// let pat = /nanchang/i
// let pat2 = /NanChang/gi
// console.log(pat2.test(str))


//字符串的正则
// let str = 'Visit W3School'
// console.log(str.search(/W3school/i))




// let str = '1 plus 2 equl 33'
// console.log(str.match(/\d+/g))


// let str = "Hello pp! oh I am wn"
// console.log(str.replace(/wn/,"snail"))
// console.log(str.split(/\s+/))


//正则写法
//[abc]查找方括号之间的任何字符
// let str = "Is this all there is?"
// let pat = /[a-h]/g
// console.log(str.match(pat))

//[^abc]查找任何不在方括号之间的字符
// let str = "hello pp like jinlong"
// let pat =/[^like]/g
// console.log(str.match(pat))


// let str = 'hello ziChen! How air you? '
// let pat =/hello|you/g
// console.log(str.match(pat))



// let str = "That's hot!"
// let pat = /h.t/g    //输出  hat  hot


// let pat =/\W/g
// let str = "That's hot!100%"



// let str = 'moon'
// let pat = /oon\b/g
// console.log(str.match(pat))


// let str = "hello yangyang! hello world!"
// let pat = /lo*/g
// console.log(str.match(pat))



//手机号正则
let tel = '12826864511'
let pat = /^1([3-9])\d{9}$/
console.log(pat.test(tel))