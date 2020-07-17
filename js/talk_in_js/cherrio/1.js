// 对象是由方法和属性构成 语法
// JSON object 对象字面量 literal object


var duck={
    type: '煌上煌 ',
    yz:99,
    ducksing:function(){
        console.log('嘎嘎嘎')
    }
}

var jj={
    name:'jajun',
    ducksing:function(){
        console.log('嘎嘎嘎')
}}
var yl={
    name:'yuanlong',  
}
var xgg = [jj,yl]
//js中没有Array
//undefind 
var cherrio;//关键字 标识符
//console.log(cherrio)   //undefind
//console.log(typeof cherrio)  //undefind
//变量的类型由值决定
cherrio = new Array();
//array只是object的子类型
//console.log(typeof cherrio);  //object array 

for(var i= 0;i < 999;i++)
{
    cherrio.push(duck);
}
//可能会有同名属性
for(var i = 0;i < xgg.length;i++){
    if(typeof xgg[i].ducksing == 'function'){
        cherrio.push(xgg[i]);
    }
}

cherrio.push()
if(cherrio.length = 1000 ){
    console.log('已经招募完成，报告国王')
}
duck.ducksing();



for(let singer of cherrio){//es6
    singer.ducksing();
}
