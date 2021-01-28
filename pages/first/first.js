// pages/first/first.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerBackgroundImg: [
      '/assets/first/banner/banner1.png', 
      '/assets/first/banner/banner2.png', 
      '/assets/first/banner/banner3.png',
      '/assets/first/banner/banner4.png', 
    ],
    swiperBottomList: [
      '安全可靠',
      '在线咨询下单',
      '上门服务',
      '坐等收款'
    ],
    tabTopImgList: [
      {
        img: '/assets/first/icons/tabTop/1.png',
        desc: '家电回收'
      },
      {
        img: '/assets/first/icons/tabTop/2.png',
        desc: '打复印机回收'
      },
      {
        img: '/assets/first/icons/tabTop/3.png',
        desc: '电子家电维修'
      },
      {
        img: '/assets/first/icons/tabTop/4.png',
        desc: '二手产品'
      },
      {
        img: '/assets/first/icons/tabTop/5.png',
        desc: '手机平板回收'
      },
    ],

    tabBottom1ImgList: [
      {
        img: '/assets/first/icons/tabBottom/tab1/1.png',
        desc: '碟机路由器回收'
      },
      {
        img: '/assets/first/icons/tabBottom/tab1/2.png',
        desc: '废料积压回收'
      },
      {
        img: '/assets/first/icons/tabBottom/tab1/3.png',
        desc: '电脑主机回收'
      },
      {
        img: '/assets/first/icons/tabBottom/tab1/4.png',
        desc: '电表类回收'
      },
      {
        img: '/assets/first/icons/tabBottom/tab1/5.png',
        desc: '电路板类回收'
      },
    ],

    tabBottom2ImgList: [
      {
        img: '/assets/first/icons/tabBottom/tab2/1.png',
        desc: '办公品回收'
      },
      {
        img: '/assets/first/icons/tabBottom/tab2/2.png',
        desc: '通讯类回收'
      },
      {
        img: '/assets/first/icons/tabBottom/tab2/3.png',
        desc: '商家合作'
      },
      {
        img: '/assets/first/icons/tabBottom/tab2/4.png',
        desc: '废品站合作'
      },
      {
        img: '/assets/first/icons/tabBottom/tab2/5.png',
        desc: '加盟回收'
      },
    ],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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