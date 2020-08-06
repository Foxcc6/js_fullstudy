let data = [
    {value:'周杰伦的听妈妈的话，我爱了GIAO',time:5,color:'red',speed: 1,fontsize:22},
    {value:'周杰伦的听妈妈的话，我爱了GIAO',time:10,color:'blue',speed: 1,fontsize:30},
    {value:'周杰伦的听妈妈的话，我爱了GIAO',time:6},
    {value:'周杰伦的听妈妈的话，我爱了GIAO',time:10,color:'black',speed: 1,fontsize:24},
    {value:'嗷嗷嗷嗷嗷嗷嗷奥利给',time:10,color:'yellow',speed: 1,fontsize:28},
    {value:'嗷嗷嗷嗷嗷嗷嗷奥利给11111111111111111111111111111',time:10},
]

// 获取所有需要的dom元素
let canvas = document.getElementById('canvas')
let video = document.getElementById('video')
let $txt = document.getElementById('text')
let $btn = document.getElementById('btn')
let $color = document.getElementById('color')
let $range = document.getElementById('range')


// 创建 CanvasBarrage 
class  CanvasBarrage{
    constructor(canvas,video,opts = {}){ //constructor是一种用于创建和初始化class对象的特殊方法
        //opts{}表示如果没有传值，就默认为{},防止报错，

        if(!canvas||!video) return 
        
        //将传进来的参数挂载到this上
        this.video = video
        this.canvas = canvas
        // 设置canvas的宽高和video一致
        // 创建canvasBarrage的实例
        let CanvasBarrage = new CanvasBarrage(canvas,video,{data})
        //设置canvas 和 video的宽高一样
        this.canvas.width = video.width
        this.canvas.height = video.height


        //获取画布
        this.ctx = canvas.getContext('2d')


        // 设置默认参数，如果没传就给带上
        let defOpts = {
            color:'#e91e63',
            speed: 1.5,
            opacity:0.5,
            fontsize:20,
            data:[]
        }

        //合并对象，再挂载到this上,后面覆盖前面
        Object.assign(this,defOpts,opts)
        // 添加属性用来判断播放暂停，默认是true为暂停
        this.isPaused = true
        // 得到所有的弹幕消息
        this.barrages = this.data.map(item => new Barrage(item,this))

    }
}

// 创建Barrage类，用来实例化每一条弹幕
class Barrage{
    constructor(obj,ctx){              //obj一条弹幕的信息
        this.value = obj.value    //弹幕的内容
        this.time = obj.time;     //弹幕的出现时间
        // 把obj 和ctx都挂载到this 上方便获取
        this.obj = obj
        this.context = ctx
    }


    // 初始化弹幕
    init(){
        // 如果数据里没有涉及这4种参数就直接取默认参数
        this.color = this.obj.color || this.context.color
        this.speed = this.obj.speed || this.context.speed
        this.opacity = this.obj.opacity || this.context.opacity
        this.fontsize = this.obj.fontsize ||  this.context.fontsize


        //计算每一条弹幕的宽度
        let p = document.createElement('p')
        p.style.fontsize = this.fontsize +'px' 
        p.innerHTML = this.value
        document.body.appendChild(p)


        //把P标签添加到body里，这样就可以拿到宽度
        //设置弹幕的宽度
        this.width = p.clientWidth
        // 得到了弹幕的宽度后就把P标签移除
        document.body.removeChild(p)


        //设置弹幕出现的位置
        this.x = this.context.canvas.width
        this.y = this.context.canvas.height*Math.random()

        //超出范围的处理
        if(this.y<this.fontsize){
            this.y = this.fontsize
        }else if (this.y > this.context.canvas.height - this.fontSize) {
            this.y = this.context.canvas.height - this.fontSize
          }
      
    }
}








// let aaa = new  CanvasBarrage()