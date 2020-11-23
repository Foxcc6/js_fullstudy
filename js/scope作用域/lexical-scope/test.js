// console.log(fs);
// console.log(fs());
// var fs = 10
// function fs(){
//     var a ;
//     console.log(a);
//     a=10;
//     console.log(a);
    
    
// }

function foo() {
    var myName = " 极客时间 "
    let test1 = 1
    const test2 = 2
    var innerBar = {
    getName:function(){
    console.log(test1)
    return myName
    },
    setName:function(newName){
    myName = newName
    }
    }
    return innerBar
    }
    var bar = foo()
    bar.setName(" 极客邦 ")
    bar.getName()
    console.log(bar.getName())