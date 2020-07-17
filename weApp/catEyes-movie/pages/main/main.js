// pages/main/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLeft:true,
    indicatorDots:true,
    autoplay:true,
    interval:3000,
    duration:500,
    circular:true,
    imgUrls:
      ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594983935528&di=2f130db015569d0100505f2dc8f43f5f&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F48bde38df922044f708c0f09201a15879b6c90e02369a4-6i2Fqw_fw658',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594983973332&di=6b71ed75575879fbbbb2f3ce550cf4a3&imgtype=0&src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_ls%2F0%2F8839353760_640330%2F0',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594983973326&di=94d522ffe462b4167a3f0de65579e1c8&imgtype=0&src=http%3A%2F%2Fp0.ifengimg.com%2Fpmop%2F2017%2F1129%2FF03675036ECF87D2DD855B6B4886FA57248C7223_size1194_w3840_h2160.jpeg'
      ],
      movieList: [
        {
          isShow: 0,
          name: "第一次的离别",
          imgUrl: "https://p1.meituan.net/moviemachine/4ea68a0de8949d99fd7ff426b84d3c381761878.jpg@1l_1e_1c_128w_180h",
          actor: "艾萨·亚森,凯丽比努尔·热合米图力,艾力乃孜·热合米图力",
          time: "2020-07-20",
          wantSee: '9745'
        },
        {
          isShow: 1,
          name: "璀璨薪火3D",
          imgUrl: "https://p0.meituan.net/moviemachine/1b6ca45db703c6df1c1ad8412ad0639a633073.jpg@1l_1e_1c_128w_180h",
          actor: "",
          time: "2020-07-20",
          wantSee: '1248'
        }
      ]
  },
  tabChangeHot(){
    this.setData({
      isLeft:true
    })
  },
  tabChangeWaiting(){
   //this.data.isLeft = false 错误
    this.setData({
      isLeft:false
    })
  }, // function  tabChangeWaiting() {}

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})