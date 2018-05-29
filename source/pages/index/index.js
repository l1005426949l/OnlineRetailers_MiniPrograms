Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 为适应后端id与小程序视图id映射，临时变量
    wxmlTabid:2,
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
    morkData: null,
    winWidth: 0,
    goodsWelfareItems: null,
    recommends:null,
    movies:null,
    goods:null,
    good:null,
    goodsWelfareIt:null,
    goodsWel:null,
    goodsWelfare:null,
    rec:null,
    rece:null,
    reces:null,
    recesme:null,
    recesmed:null,
    winHeight: 300,
    // tab切换  
    currentTab: 0,
    vId: "",
  },
  catchTapCategory: function () {
    wx.navigateTo({
      url: '/pages/details/details'
    })
  },
  inder: function () {
    wx.navigateTo({
      url: '/pages/couple/couple'
    })
  },
  details: function () {

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'https://web.bfy100.com/supvp/supvp/jselectionquery',
      data: {

      },
      method: "POST",
      header: {
        "content-type": "application/json"
      },
      // 成功
      success: function (res) {
        console.log(res.data.d);
        that.setData({ morkData: res.data.d });
      },
      // 失败返回
      fail: function () {
        console.log(res.data);
      },
    }),
      // 商品详情
      wx.request({
        url: 'https://web.bfy100.com/supvp/supvp/jcommodityquery',
        data: {
          selectid:2 ,
        },
        method: "POST",
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        // 成功
        success: function (res) {
          console.log(res.data.d.bottom);
          that.setData({ goodsWelfareItems: res.data.d.bottom});
        },
        // 失败返回
        fail: function () {
          console.log(res.data);
        },
      })
    wx.request({
      url: 'https://web.bfy100.com/supvp/supvp/jcommodityquery',
      data: {
        selectid: 7,
      },
      method: "POST",
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      // 成功
      success: function (res) {
        console.log(res.data.d.bottom);
        that.setData({ good: res.data.d.bottom });
      },
      // 失败返回
      fail: function () {
        console.log(res.data);
      },
    })
    wx.request({
      url: 'https://web.bfy100.com/supvp/supvp/jcommodityquery',
      data: {
        selectid: 6,
      },
      method: "POST",
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      // 成功
      success: function (res) {
        console.log(res.data.d.bottom);
        that.setData({ goods: res.data.d.bottom });
      },
      // 失败返回
      fail: function () {
        console.log(res.data);
      },
    })
    wx.request({
      url: 'https://web.bfy100.com/supvp/supvp/jcommodityquery',
      data: {
        selectid: 5,
      },
      method: "POST",
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      // 成功
      success: function (res) {
        console.log(res.data.d.bottom);
        that.setData({ goodsWel: res.data.d.bottom });
      },
      // 失败返回
      fail: function () {
        console.log(res.data);
      },
    })
    wx.request({
      url: 'https://web.bfy100.com/supvp/supvp/jcommodityquery',
      data: {
        selectid: 11,
      },
      method: "POST",
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      // 成功
      success: function (res) {
        console.log(res.data.d.bottom);
        that.setData({ goodsWelfare: res.data.d.bottom });
      },
      // 失败返回
      fail: function () {
        console.log(res.data);
      },
    })
    wx.request({
      url: 'https://web.bfy100.com/supvp/supvp/jcommodityquery',
      data: {
        selectid: 12,
      },
      method: "POST",
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      // 成功
      success: function (res) {
        console.log(res.data.d.bottom);
        that.setData({ goodsWelfareIt: res.data.d.bottom });
      },
      // 失败返回
      fail: function () {
        console.log(res.data);
      },
    })
      // 轮播图
      wx.request({
        url: 'https://web.bfy100.com/supvp/supvp/jcommodityquery',
        data: {
          selectid: 2,
  
        },
        method: "POST",
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        // 成功
        success: function (res) {
          console.log(res.data.d.top);
          that.setData({ movies: res.data.d.top});
        },
        // 失败返回
        fail: function () {
          console.log(res.data);
        },
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
    var that = this;
    console.log('加载更多')
    setTimeout(() => {
      this.setData({
        isHideLoadMore: true,
        
      })
      // 下拉加载更多
      wx.request({
        url: 'https://web.bfy100.com/supvp/supvp/jcommoditypagequery',
        data: {
          selectid:2,
          Page:2,
        },
        method: "POST",
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        // 成功
        success: function (res) {
          console.log(res.data.d);
          that.setData({ recommends: res.data.d });
        },
        // 失败返回
        fail: function () {
          console.log(res.data);
        },
      })
    }, 1000)    
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
   * 隐藏
   */
  tapHidden: function (e) {
    this.setData({ flag: true });
  },
  /**
   * 长按
   */
  longTap: function (e) {
    this.setData({ flag: false });
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
    console.log("sdsd" + e.detail.current)
    ///如果是最后一个
    switch (e.detail.current) {
      case 0 : that.setData({ vId: "a2", currentTab: 0, wxmlTabid:2 });
        break;
      case 1: that.setData({ vId: "a7", currentTab: 1, wxmlTabid: 7 }); 
        break;
      case 2: that.setData({ vId: "a6", currentTab: 2, wxmlTabid: 6 });
        break;
      case 3: that.setData({ vId: "a5", currentTab: 3, wxmlTabid: 5  });
        break;
      case 4: that.setData({ vId: "a11", currentTab: 4, wxmlTabid: 11 });
        break;
      case 5: that.setData({ vId: "a12", currentTab: 5, wxmlTabid: 12 });
        break;
    }

  },
  /** 
   * 点击tab切换 
   */
  swichNav: function (e)
   {
     var  tempid;
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
        // 如果两次点击时间在300毫秒内，则认为是双击事件 
        if (currentTime - lastTapTime < 300) {
          // 成功触发双击事件时，取消单击事件的执行 
          clearTimeout(that.lastTapTimeoutFunc);
          //  这里写双击事件
          that.setData({ flag: false });
        } else {
          // 单击事件延时300毫秒执行，这和最初的浏览器的点击300ms延时有点像。 
          that.lastTapTimeoutFunc = setTimeout(function () {
            //单击事件
            switch (e.target.dataset.current) {
              case '2': tempid=0;
                break;
              case "7": tempid = 1;
                break;
              case "6": tempid = 2;
                break;
              case "5": tempid = 3;
                break;
              case "11": tempid = 4;
                break;
              case "12": tempid = 5;
                break;
            }
            if (that.data.currentTab === tempid) {
              return false;
            } else {
              that.setData({
                currentTab: tempid,
                wxmlTabid: e.target.dataset.current
              })
            }
          }, 300);
         
        }
      }
    }
  }
})