function throttle(fn,delay) {
    let time;
    return function(){
        if(!time){
            time = setTimeout(()=>{
                fn()
                time = null
            },delay)
        }
    }
}

function throttle(fn,delay) {
    let prev = Date.now()
    return function(){
        let now = Date.now()
        if(now-prev>delay){
            fn()
            prev = now
        }
    }
}