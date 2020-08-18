// 对象
var mrLei = {
    name: 'LeiLei',
    age: 20,
    sex: 'boy',
    health: 100,
    smoke: function() {
      console.log('I am smoking cool!')
      this.health--
    },
    drink: function() {
      console.log('I am drink')
      this.health++
    }
  }
  // mrLei.health++
//   mrLei.smoke()
//   mrLei.drink()
//   mrLei.drink()
//   console.log(mrLei.health)

//增
mrLei.boyFriend = 'zhihong'
console.log(mrLei.boyFriend)

//查 
console.log(mrLei.sex);

//修改
mrLei.sex = 'girl'

//删除
delete mrLei.name


// 对象创建
var obj = {}        //对象字面量 | 对象直接量

1. 
let a = new Object()   // var obj = {}   没有区别
a.name = 'wn'
let b = new Object()

2. 
function Car(color) {
    this.color = color
    this.name = 'BMW'
    this.height = '1400'
    this.long = '4900'
    this.weight = 1000
    this.health = 100
    this.run = function () {
        this.health--
    }
}

var car = new Car('black')
var car1 = new Car()
