Person.prototype.name = 'wn'

function Person(){
    // var this ={                          //构造函数第一步创造
    //     __proto__:Person.prototype
    // }
}
var person = new Person()
console.log(person.name);


var obj = {
    name:'蜗牛'
}