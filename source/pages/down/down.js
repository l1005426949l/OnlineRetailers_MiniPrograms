// pages/down/down.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: null, 
    imgUrls: null,
  },
  setPhotoInfo: function () {
    var that = this;
    wx.chooseImage({
      count: 1,
      sizeType: ["original", "compressed"],
      sourceType: ["album", "camera"],
      success: function (res) {
        var tempFilePaths = res.tempFilePaths
        that.setData({ imgUrl: tempFilePaths })
      },
    })
  },
  setPhotoInfos: function () {
    var that = this;
    wx.chooseImage({
      count: 1,
      sizeType: ["originals", "compresseds"],
      sourceType: ["albums", "cameras"],
      success: function (res) {
        var tempFilePaths = res.tempFilePaths
        that.setData({ imgUrls: tempFilePaths })
      },
    })
  },

  order:function(){
    wx.navigateTo({
      url: '/pages/install/install'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var d = new Date();
    wx.setNavigationBarTitle({
      title: "上传证件照片"
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