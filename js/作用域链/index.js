function test(){

}

// 函数也是对象，也能拥有属性
// test.name  test.prototype
// test.[[scope]]  自己的作用域  隐式属性，不可能被拿出来用


// test() ---> AO:{}  //回收
// test() ---> AO:{}


a()

// a 定义 a.[[scope]]   --->0：GO:{}
// a 执行 a.[[scope]]   --->0：aAO:{}  1：GO{}
// b 定义 a.[[scope]]   --->0：aAO:{}  1：GO{}
// b 执行 a.[[scope]]   --->0：bAO:{}  1:aAO:{}  2：GO{}


// b 执行完了，b的AO就要销毁

// 紧接着a也说，我也执行完了，我的AO也要销毁，因为a的AO包含了b函数，当a的AO销毁时b函数直接失效
