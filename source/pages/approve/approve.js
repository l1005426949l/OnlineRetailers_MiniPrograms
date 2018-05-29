// pages/approve/approve.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isTrue: false,
    inputName: "",
    inputIdCard: "",
  },
  inoder: function () {
    wx.navigateTo({
      url: '/pages/down/down'
    })
  },
  isNull: function (str) {
    if (str == "") return true;
    var regu = "^[ ]+$";
    var re = new RegExp(regu);
    return re.test(str);
  },
  verification:function(){
    if (this.isNull(this.data.inputName) ||this.isNull(this.data.inputIdCard)){
      this.setData({
        isTrue: false
      })
    }else{
      this.setData({
        isTrue: true
      })
    }
  },
  bindChangeName: function (e) {
    this.data.inputName = e.detail.value;
    this.verification();
  },
  bindChangeIdCard: function (e) {
    this.data.inputIdCard = e.detail.value;
    this.verification();
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    wx.setNavigationBarTitle({
      title: "实名认证"
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
  ,

})