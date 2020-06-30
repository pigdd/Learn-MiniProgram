// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title : '页面中的数据'
  },

  handlepushPage() {
    wx.navigateTo({
      url: '/pages/detail/detail',
    })
  }
})