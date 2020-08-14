//index.js
const app = getApp()
const github=require('../../api/githubs.js')

Page({
  data: {
    trends:[]
 
  },
  
  onSearch:function(value){
    console.log(value,'+++++++++++++++');
  },

    onLoad: function () {
      wx.startPullDownRefresh({})     //下拉加载刷新
    },

   onPullDownRefresh: function () {
      this.reloadData()
    },
    reloadData: function () {
      //到api模块去做
      github
      .trendings()
      .then(data => {
      console.log(data)
    })
  }
})
