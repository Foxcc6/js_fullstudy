import { request} from "../../request/index.js"
import regeneratorRuntime from '../../lib/runtime/runtime';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //左侧菜单数据
    leftMenuList:[],
    // 右侧的商品数据
    rightContent:[],
    // 被点击的左侧菜单
    currentIndex:0,
    // 右侧内容滚动条距离顶部的距离
    scrollTop:0
  },
  //接口的返回数据
    Cates:[],


  onLoad: function (options) {
    /* web本地存储和小程序中有区别
      web:localstorage.setItem('key','value') localStorage.getItem('key')
      小程序中： wx.setStorageSync('key','value'); wx.getStorageSync('key')
    */ 


    // 缓存 1.判断本地存储中有没有旧数据
    //      2.没有旧数据就发新请求
    //      3.有旧的数据 同时也没有过期 就使用本地存储


    // 获取本地存储数据
    const Cates = wx.getStorageSync('cates')
    if(!Cates){
      this. getCates()
    }else{
      // 有旧的数据 定义一个过期时间 30s
      if(Date.now()-Cates.time>1000*30){
        // 重新发请求
        this.getCates()
      }else{
        this.Cates = Cates.data;
        let leftMenuList = this.Cates.map(v=>v.cat_name)
        let rightContent =this.Cates[0].children;
        this.setData({
          leftMenuList,
          rightContent
        })  
      }
    }
  },


  // 获取分类数据
  getCates(){
    request({
      url:'/categories'
    })
    .then(res=>{
     this.Cates = res
      
    // 把接口数据存入到本地存储中
    wx.setStorageSync('cates', {time:Date.now(),data:this.Cates})

     //左侧大菜单数据
     let leftMenuList = this.Cates.map(v=>v.cat_name)
     // 右侧商品数据
     let rightContent =this.Cates[0].children;
     this.setData({
       leftMenuList,
       rightContent
     })
    })
  },
  //左侧菜单的点击事件
  handleItemTap(e){
   // const {index}=e.currentTarget.dataset; //???
   const index = e.currentTarget.dataset.index
   let rightContent =this.Cates[index].children;
   this.setData({
     currentIndex:index,
     rightContent,
     // 重新设置右侧scroll-view标签距离顶部的距离
     scrollTop:0
   })
   
  }
 
})