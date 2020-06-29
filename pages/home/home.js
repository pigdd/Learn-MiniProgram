// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    counter : 0
  },
  handleincremate() {
    this.setData({
      counter : this.data.counter + 1
    })
  }
})