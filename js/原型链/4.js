//方法重写 


Object.prototype.toString =function(){
    return 'haahaha'
}


function Person(){

}

var person = new Person()
console.log(person.toString());
