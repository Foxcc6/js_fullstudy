//引入 用来发送请求的方法
import { request} from "../../request/index.js"
Page({
  data: {
    //轮播图数组
    swiperList:[],
    //导航数组
    catesList:[],
    // 楼层数据
    floorList:[]
    
  },
  //options(Object)
  onLoad: function(options){
    //发送异步请求获取轮播图数据
    const self = this
    // wx.request({
    //   url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',

    //   success: function(res){
    //     // success
    //     self.setData({
    //       swiperList:res.data.message
    //     })
    //   },
  
    // })
    this.getSwiperList()
    this.getCatesList()
    this. getFloorList()
  },

  //获取轮播图数据
  getSwiperList(){
    request({url: '/home/swiperdata'})
    .then(res=>{
      this.setData({
              swiperList:res
         })
    })
  },


    //获取分类导航数据
    getCatesList(){
      request({url: '/home/catitems'})
      .then(res=>{
        this.setData({
                catesList:res
           })
      })
    },

    //获取楼层数据
    getFloorList(){
      request({url:'/home/floordata'})
      .then(res=>{
        this.setData({
          floorList:res
           })
      })
    },
  onReady: function(){
    
  },
  onShow: function(){
    
  },
  onHide: function(){

  },
  onUnload: function(){

  },
  onPullDownRefresh: function(){

  },
  onReachBottom: function(){

  },
  onShareAppMessage: function(){

  },
  onPageScroll: function(){

  },
  //item(index,pagePath,text)
  onTabItemTap:function(item){

  }
});