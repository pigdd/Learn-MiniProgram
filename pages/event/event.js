// pages/event/event.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies:["星际穿越", "侏罗纪世界", "复仇者联盟"],
    isActive : 3
  },
  btnclick() {
    console.log("按钮被点击了")
  },
  handleTouchStart() {
    console.log("handleTouchStart");
    wx.showToast({
      title: 'handleTouchStart',
      icon: 'success',
      duration: 2000
    })
  },
  handleTouchMove() {
    console.log("handleTouchMove");
    wx.showToast({
      title: 'handleTouchMove',
      icon: 'success',
      duration: 2000
    })
  },
  handleTouchEnd() {
    console.log("handleTouchEnd");
    wx.showToast({
      title: 'handleTouchEnd',
      icon: 'success',
      duration: 2000
    })
  },
  handleTap() {
    console.log("handleTap")

  },
  // 在触摸时间超过350ms会触发该事件，与tap事件只会发生一个
  handleLongPress() {
    console.log("handleLongPress");
    wx.showToast({
      title: 'handleLongPress',
      icon: 'success',
      duration: 2000
    })
  },
  handleBtnClick(event) {
    console.log("================");
    console.log(event)
  },
  click(event) {
    const item = event.currentTarget.dataset.item;
    const index = event.currentTarget.dataset.index;
    wx.showToast({
      title: item,
    })
    console.log(event)
    this.setData({
      isActive : index
    })
  },
  // end() {
  //   this.setData({
  //     isActive : false
  //   })
  // },
  // start() {
  //   this.setData({
  //     isActive : true
  //   })
  // }
})