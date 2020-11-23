//块作用域


for (var i = 0; i < 10; i++){  //i会污染到整个函数作用域中
    console.log(i)
}
    console.log(i)





// var foo = true,baz = 10 ;
// if(foo){
//     var bar =3


// if (baz>bar){
//     console.log(baz)
// } }



// if(foo){
//     var bar =3
// }

// if (baz>bar){
//     console.log(baz)
// }

var foo = true,baz = 10 ;
if(foo){
    let bar =3
    if(baz>bar){
        console.log(baz,bar)
    }
}