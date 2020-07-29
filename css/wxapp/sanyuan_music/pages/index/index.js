//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    bannaList:[],
    recommendList:[],
    isRecommendListLoading:true
   
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    // 接口地址 -------------------------------------
    wx.request({
      url: 'http://47.98.159.95/m-api/banner',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        console.log(res)
        this.setData({
         isRecommendListLoading:false
        })
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })  
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
