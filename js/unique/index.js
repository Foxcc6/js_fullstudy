// 数组去重
let array = [1,1,'1','1']    //[1,'1']


function unique(array) {
//  1.将数组中的每一项拿出来作为主角 
//  2.
    for(let i = 0;i<array.length;i++){
        // array[i]
        for(let j = array.length-1;j >i;j--){
            //当外面的for循环执行一次时，内层for会执行 length-i 次
            if(array[i] === array[j]){
                array.splice(j,1)
            }
        }
    }
        return array
}

console.log(unique(array))

