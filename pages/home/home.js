// pages/home/home.js
Page({
  data:{
    name: "0"
  },
  handleShowToast() {
    wx.showToast({
      // 根据文档可以改变其他属性
      title: 'toast弹窗',
      duration: 3000,
      icon: 'none',
      // 弹窗开始展示的时候就开始执行
      complete: function() {
        console.log("弹窗完成")
      }
    })
  },
  handleShowModal() {
    wx.showModal({
      title: "标题",
      content: "展示框的内容",
      // res可以判定用户点击的是取消还是确定
      success: function(res) {
        console.log(res)
      }
    })
  },
  handleShoeLoad() {
    wx.showLoading({
      title: "加载ing",
      // 添加蒙版之后就不可以再进行交互
      mask: true,
    })
    // 调用hideLoading函数关闭这个弹窗
    setTimeout(() => {
        wx.hideLoading()
    }, 1000);
  },
  handleActionSheet(event){
    var that = this
    var na
    wx.showActionSheet({
      itemList: ['贾花花', '阳花花'],
      success: res => {
        console.log(res)
        if(res.tapIndex == 0) {
          na = "海王"
          console.log(na)
          this.setData({
            name : na
          })
        } else if(res.tapIndex == 1){
          that.setData({
            name:"小阳阳"
          })
        }else{
          that.setData({
            name: "undefined"
          })
        }
      },
  
    })
  },
  // 页面设置分享
  onShareAppMessage(options) {
    return {
      title: "你好啊！花花们",
      // path: ""设置好友打开时的路径
      // imageurl设置分享的时候显示的页面
      imageUrl : 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2096233205,907558215&fm=26&gp=0.jpg'
    }
  }
})