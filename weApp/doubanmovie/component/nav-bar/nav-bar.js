// component/nav-bar/nav-bar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type:String,
      value:''
    },
    statusBarColor:{
      type:String,
      value:'#fff'
    },
    navBarColor:{
      type:String,
      value:'#FFF'
    },
    titleColor:{
      type:String,
      value:'#000'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    statusBarStytle:"",
    navBarStyle:""

  },

  lifetimes:{
    attached:function(){
      let navBarStyle = `background-color:${this.data.navBarColor};height:48px;color:${this.data.titleColor}`


      this.setData({
        navBarStyle: navBarStyle
      })
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
