// js是单线程的

function a() {
    let name = 'cc'
    console.log(name)
}

function b() {
    setTimeout(()=>{
        console.log('qq')
    },1000)  
}


b()
a()