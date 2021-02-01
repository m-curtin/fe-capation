// pages/mine/mine.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    promiseList: [{
        iconUrl: "/assets/icons/promise/anquan.png",
        title: "安全问题",
        body: "安全可靠"
      },
      {
        iconUrl: "/assets/icons/promise/huishou.png",
        title: "回收方式",
        body: "上门回收"
      },
      {
        iconUrl: "/assets/icons/promise/jiage.png",
        title: "价格公道",
        body: "评估属实，绝不压价"
      },
      {
        iconUrl: "/assets/icons/promise/kuaisu.png",
        title: "快速打款",
        body: "交易成功，立即打款"
      },
    ],
    onlineConsultMap: {
      onlineConsultUrl: '/assets/mine/mine_asks.png',
      onlineMsg: '维修手机、液晶电视、电脑主机、笔记本、洗衣机空调等电子家电产品。'
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onShow() {
    console.log(app.globalData.userInfo);
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo(e) {
    console.log(e);
    if(!!e.detail.rawData) {
      app.globalData.userInfo = e.detail.userInfo
      this.setData({
        userInfo: e.detail.userInfo,
        hasUserInfo: true
      })
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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