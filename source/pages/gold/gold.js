//index.js
//获取应用实例
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsWelfareItems: [
      {
        goodId: 0,
        name: '泊尔崖蜜蜜光面膜（5片盒装）无能为力我了....',
        text: '让我们共同见证美好的明天',
        url: 'bill',
        imageurl: '/imga/goods.png',
        newprice: "86",
        oldprice: "88",
      },
      {
        goodId: 1,
        name: '泊尔崖蜜蜜光面膜（5片盒装）无能为力我了....',
        text: '让我们共同见证美好的明天',
        url: 'bill',
        imageurl: '/imga/goods.png',
        newprice: "147.00",
        oldprice: "150.00",
      },
      {
        goodId: 2,
        name: '泊尔崖蜜蜜光面膜（5片盒装）无能为力我了....',
        text: '让我们共同见证美好的明天',
        url: 'bill',
        imageurl: '/imga/goods.png',
        newprice: "86.00",
        oldprice: "88.00",
      },
      {
        goodId: 3,
        name: '泊尔崖蜜蜜光面膜（5片盒装）无能为力我了....',
        text: '让我们共同见证美好的明天',
        url: 'bill',
        imageurl: '/imga/goods.png',
        newprice: "97.00",
        oldprice: "99.00",
      },
      {
        goodId: 4,
        name: '泊尔崖蜜蜜光面膜（5片盒装）无能为力我了....',
        text: '让我们共同见证美好的明天',
        url: 'bill',
        imageurl: '/imga/goods.png',
        newprice: "398.00",
        oldprice: "459.00",
      }, {
        goodId: 5,
        name: '泊尔崖蜜蜜光面膜（5片盒装）无能为力我了....',
        text: '让我们共同见证美好的明天',
        url: 'bill',
        imageurl: '/imga/goods.png',
        newprice: "238.00",
        oldprice: "358.00",
      }
      , {
        goodId: 6,
        name: '泊尔崖蜜蜜光面膜（5片盒装）无能为力我了....',
        text: '让我们共同见证美好的明天',
        url: 'bill',
        imageurl: '/imga/goods.png',
        newprice: "248.00",
        oldprice: "348.00",
      }
    ]
  },
  catchTapCategory: function () {
    wx.navigateTo({
      url: '/pages/details/details'
    })
  },
  //事件处理函数
  indos:function(){
    wx.navigateTo({
      url: '/pages/cates/cates'
    })
  },
  inder:function(){
    wx.navigateTo({
      url: '/pages/enshrine/enshrine'
    })
  },
  indoer:function(){
    wx.navigateTo({
      url: '/pages/history/history'
    })
  },
  toOrder: function (e) {
    wx.navigateTo({
      url: '/pages/order/order?id=' + e.currentTarget.dataset.gotoid
    })
  },
  toDer:function(){
    wx.navigateTo({
      url: '/pages/privilege/privilege'
    })
  },
  toOrders: function () {
    wx.navigateTo({
      url: '/pages/install/install'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {   
    wx.setNavigationBarTitle({
      title: "金卡"
    })
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
