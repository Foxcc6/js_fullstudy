// function foo() {
//     console.log(this.a)
// }

// var obj = {
//     a:2,
//     foo:foo
// }

// obj.foo()

function foo() {
    console.log(this.a)
}

var obj = {
    a:2,
}

foo.call(obj)      //显式绑定
foo.apply(obj)     //显示绑定    还有一个bind


var a = {
    user:'woniu',
    fn:function(){
        console.log(this.user)
    }
}
var b = a.fn
b.call(a)   //后面还可以接参数
b.apply(null)



var a = {
    user:'woniu',
    fn:function(){
        console.log(this.user)
    }
}
var b = a.fn
var c = b.bind(a)
c()



