function identify(){
    return this.name.toUpperCase()
}
function speak(){
    let greeting = "hello.I'm"+identify.call(this) 
    console.log(greeting)
}

let me = {
    name:'wn'

}

speak(me)

// this所处的词法作用域在哪里生效了，this作用域就指向哪里

function foo(){
    let person = {
        name:'wn',
        age:'18'
    }
    console.log(this)  //window
}


function bar(){
    let person = {
        name:'wn',
        age:'18'
    }
    foo()
}





function foo(){
    console.log(this.a)  //obj.a
}
var obj = {
    a:2,
    foo:foo
}
obj.foo()  //foo此刻被OBJ所拥有或者包含