import { request} from "../../request/index.js"
import regeneratorRuntime from '../../lib/runtime/runtime';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsObj:{}
  },
  // 商品对象
  GoodsInfo:{},

  onLoad: function (options) {
    const {goods_id} = options
    this.getGoodsDetail(goods_id)
    
  },
  // 获取商品详情数据
  async getGoodsDetail(goods_id){
      const  goodsObj = await request({url:"/goods/detail",data:{goods_id}})
      this.GoodsInfo = goodsObj
     this.setData({
       goodsObj
     })
      
  },
  // 点击轮播图方法预览
  handlePrevewImage(e){
    const urls= this.GoodsInfo.pics.map(v=>v.pics_mid)
    const current =e.currentTarget.dataset.url
    wx.previewImage({
      current: current, // 当前显示图片的http链接
      urls: urls // 需要预览的图片http链接列表
    })
  },

  // 点击加入购物车
  handleCartAdd(){
    //获取缓存中的的购物车数组
    let cart = wx.getStorageSync("cart")||[];
    // 判断商品对象是否存在于购物车数组中
    let index = cart.findIndex(v=>v.goods_id===this.GoodsInfo.goods_id)
    if(index === -1){
      // 不存在 第一次添加
      this.GoodsInfo.num = 1;
      this.GoodsInfo.checked = true
      cart.push(this.GoodsInfo)
    }else{
      // 已经存在购物车数据 执行num++
      cart[index].num++
    }
    // 把购物车重新添加回缓存中
    wx.setStorageSync('cart', cart)
    //弹窗
    wx.showToast({
      title: '加入成功',
      icon: 'success',
      mask: true,
    });
  }
})