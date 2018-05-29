Page({

  /**
   * 页面的初始数据
   */
  data: {

    //tab栏状态切换-开关
    flag: true,
    // 触摸开始时间
    touchStartTime: 0,
    // 触摸结束时间
    touchEndTime: 0,
    // 最后一次单击事件点击发生时间
    lastTapTime: 0,
    // 单击事件点击后要触发的函数
    lastTapTimeoutFunc: null,

    winWidth: 0,
    winHeight: 300,
    // tab切换  
    currentTab: 0,
    vId: "",
    
  },
  // 代付款详情
  inder:function(){
    wx.navigateTo({
      url: '/pages/payment/payment'
    })
  },
  // 待收货
  inders:function(){
    wx.navigateTo({
      url: '/pages/ving/ving',
    })
  },
  onders:function(){
    wx.navigateTo({
      url: '/pages/ving/ving',
    })
  },
  //售后
  onder:function(){
    wx.navigateTo({
      url: '/pages/after/after',
    })
  },
  dess:function(){
    wx.navigateTo({
      url: '/pages/trading/trading',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {    
    this.setData({ currentTab: options.id });
    wx.setNavigationBarTitle({
      title: "我的订单"
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

  },
  /**
  * 按钮触摸开始触发的事件
  */
  touchStart: function (e) {
    console.log(e);
    this.touchStartTime = e.timeStamp
  },
  /**
   * 按钮触摸结束触发的事件
   */
  touchEnd: function (e) {
    console.log(e);
    this.touchEndTime = e.timeStamp
  },
  /**
   * 回到顶部
   */
  gotoTop: function (e) {
    wx.pageScrollTo({
      scrollTop: 0
    })
  },
  /** 
   * 滑动切换tab 
   */
  bindChange: function (e) {
    //  this.gotoTop();
   
    var that = this;
    that.setData({ currentTab: e.detail.current });
    ///如果是最后一个
    switch (e.detail.current) {
      case 0: that.setData({ vId: "a" });
        break;
      case 1: that.setData({ vId: "b" });
        break;
      case 2: that.setData({ vId: "c" });
        break;
      case 3: that.setData({ vId: "d" });
        break;
    }

  },
  /** 
   * 点击tab切换 
   */
  swichNav: function (e) {
    // this.gotoTop();
    if (!!e) {
      var that = this;
      // 控制点击事件在350ms内触发，加这层判断是为了防止长按时会触发点击事件
      if (that.touchEndTime - that.touchStartTime < 350) {
        // 当前点击的时间 
        var currentTime = e.timeStamp;
        var lastTapTime = that.lastTapTime;
        // 更新最后一次点击时间 
        that.lastTapTime = currentTime
          // 单击事件延时300毫秒执行，这和最初的浏览器的点击300ms延时有点像。 
          that.lastTapTimeoutFunc = setTimeout(function () {
            //单击事件
            if (that.data.currentTab === e.target.dataset.current) {
              return false;
            } else {
              that.setData({
                currentTab: e.target.dataset.current
              })
            }
          }, 100);

      }
    }
  }
})