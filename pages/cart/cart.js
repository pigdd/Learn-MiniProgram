// 注册一个页面
// 第一件事：监听页面的生命周期
// 2、初始化数据
// 3、监听一些事件
Page({
  // 页面被加载出来
  onLoad() {
    console.log("onload");
    wx.request({
      url: 'http://123.207.32.32:8080/recommend',
      success: (res) => {
        console.log(res)
      }
    })
  },
  // 页面显示会回调
  onShow() {
    console.log("onshow")
  },
  // 页面初次渲染完后会回调（仅是初次）
  onReady() {
    console.log("onready")
  },
  onHied() {
    console.log("onhide")
  },
  onUnload() {
    console.log("onunload")
  }
})