
Person.prototype = {
    name:'minggo',
    sayName:function(){
        console.log(this.name );
        
    }
}

function Person(){
    this.name = 'yuanlong'
}

var person = new Person()

// console.log(person.sayName()); //minggo

console.log(person.sayName()); //yuanlong