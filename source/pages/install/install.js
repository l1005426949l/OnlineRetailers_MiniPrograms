// pages/install/install.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: ['男', '女'],
    index: 0,
    data: '1994-11-03',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindPickerChang: function (e) {
    console.log("picker发生概念，携带的值是：", e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  bindPickerTime: function (e) {
    console.log("性别：", e.detail.value)
    this.setData({
      time: e.detail.value
    })
  },

  bindPickerDate: function (e) {
    console.log("出生日期：", e.detail.value)
    this.setData({
      data: e.detail.value
    })
  },
  //实名认证
 toder: function(){
   wx.navigateTo({
     url: '/pages/approve/approve'
   })
 },
 //地址管理
 toders: function(){
   wx.navigateTo({
     url: '/pages/site/site'
   })
 },
 //关于我们
 abouts: function(){
   wx.navigateTo({
     url: '/pages/about/about',
   })
 },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var a = new Date;
      wx.setNavigationBarTitle({
        title: '账户设置',
      })


      var that = this
      //调用应用实例的方法获取全局数据  
      app.getUserInfo(function (userInfo) {
        //更新数据  
        that.setData({
          userInfo: userInfo
        })
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