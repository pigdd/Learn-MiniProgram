// pages/about/about.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    status:true,
    hobbies: ["篮球", "游泳", "唱歌", "跳舞"],
    url:[],
  },

  handleclear(event) {
    console.log(event)
  },
  buttonClick() {
    // 微信小程序的弹出框
    wx.showModal({
      title: '点击按钮',
      content: '这是一个弹窗',
    })
  },
  handlechooseAldum() {
    wx.chooseImage({
      success: (res) => {
        console.log(res);
        const path = res.tempFilePaths[0]
        this.setData({
          url : path
        })
      },
    })
  },
  imageload() {
    console.log("图片开始加载了")
  }
})