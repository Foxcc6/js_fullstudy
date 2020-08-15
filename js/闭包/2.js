function a() {

    function b(){
        var bbb = 234
        console.log(aaa) // 看上去应该报错，实际上有值，这就是闭包
    }
    var aaa = 132
        return b        // b 出生在a里面，但是被保存出去了
    }
    var global = 100
    var demo = a() 
    demo()






