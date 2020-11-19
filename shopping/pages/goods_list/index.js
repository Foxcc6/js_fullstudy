import { request} from "../../request/index.js"
import regeneratorRuntime from '../../lib/runtime/runtime';
Page({

  data: {
    tabs:[{
      id:0,
      value:"综合",
      isActive:true
    },
    {
      id:1,
      value:"销量",
      isActive:false
    },
    {
      id:2,
      value:"价格",
      isActive:false
    }],
    goodsList:[]
  },
  // 总页数
  totalPages:1,


  // 接口要的参数
  QueryParams:{
    query:'',
    cid:'',
    pagenum:1,
    pagesize:10
  },
  onLoad: function (options) {
    this.QueryParams.cid = options.cid||"",
    this.QueryParams.query = options.query||""
    this. getGoodList()
  },

  // 页面上滑触底事件
  onReachBottom(){
    // 1.判断有没有下一页
    if(this.QueryParams.pagenum>=this.totalPages){
      wx.showToast({title: '没有下一页了' });
    }else{
      this.QueryParams.pagenum++
      this.getGoodList()
    }
  },

  // 下拉刷新事件
  onPullDownRefresh(){
    // 重置数组
    this.setData({
      goodsList:[],
    })
    // 重置页码
    this.QueryParams.pagenum=1
    // 发送请求
    this.getGoodList()
  },

  // 获取商品列表数据
  async getGoodList(){
    const res = await request({url:"/goods/search",data:this.QueryParams})
    // 获取总条数，页数
    const total = res.total
    this.totalPages = Math.ceil(total/this.QueryParams.pagesize)
    this.setData({
      goodsList:[...this.data.goodsList,...res.goods]
    })
    // 关闭下拉刷新窗口
    wx.stopPullDownRefresh();
  },

  // 标题点击事件
  handleTabsItemChange(e){
    //获取点击的标题索引
    const {index} = e.detail;
    // 修改原数组
    let {tabs} =this.data;
    tabs.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false)
    // 赋值到data中
    this.setData({
      tabs
    })

    
  }
  
})