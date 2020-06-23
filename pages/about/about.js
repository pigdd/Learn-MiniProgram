// 获取全局定义的数据
const app = getApp()
const asic = app.globalData.asic
// 注册一个页面
Page({
  data: {
    name: "",
    age:asic
  },
  handleUserInfo(event) {
    console.log(event.detail.userInfo.nickName),
    this.setData({
      name: event.detail.userInfo.nickName
    })
  },
  // 监听页面的滚动
  onPageScroll(obj) {
    console.log(obj)
  },
  // 监听页面滚动到底部
  onReachBottom() {
    console.log("页面滚动到了底部")
  },
  onPullDownRefresh() {
    console.log("页面下拉刷新")
  }
})