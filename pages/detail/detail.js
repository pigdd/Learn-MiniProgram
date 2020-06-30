// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    logo : ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      logo : options.logo
    })
  },
  // 在页面退出的时候进行调用
  onUnload:function() {
    // getCurrentPages获取所有活跃的页面
    const pages = getCurrentPages()
    const home = pages[pages.length - 2]
    home.setData({
      title : "通过跳转改变的数据"
    })
  },
  handleBackPage() {
    wx.navigateBack({
      complete: (res) => {
        
      },
    })
  }
})