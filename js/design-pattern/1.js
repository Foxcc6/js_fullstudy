// function calculateBonus(){
//     var A = A
//     var B = B
//     var C = C
//     var D = D
//     var level
//     var base = 20000
//     if(level==D){
//         return base*14;
//     }
//     if(level==C){
//         return base*16;
//     }
//     if(level==B){
//         return base*18;
//     }
//     if(level==A){
//         return base*20;
//     }
// }
/**
 *  功能：计算年收益
 * @author HLC
 * @data 2020-7-16
 * @params {salary 工资 number}
 * {level 评级 string}
 * @return  年收益 number
 */
function calculateBonus(salary,level="C"){
    
   

    if(typeof +salary !='number'||salary < 0){
        throw new TypeError('工资必须是整数');

        salary = parseInt(salary)
    }
    if (['A','B','C','D','S'].indexOf(level)==-1){
        throw new Error('错误的等级')
    }
    if (level == 'D'){
        return salary*12;
    }
    else if(level =='B'){
        return salary*18
    }
    else if(level =='A'){
        return salary*20
    }
    else if(level =='S'){
        return salary*100
    }
    return salary * 16
}

    
    // // if(salary!==Number){
    // //     console.log('工资请输入数值')
    // if(level!='A'&level!='B'&level!='C'&level!='D'){
    //   console.log('等级请输入ABCD四个等级')
    // }
console.log(calculateBonus('20000'));