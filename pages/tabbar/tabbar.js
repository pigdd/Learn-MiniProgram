// pages/tabbar/tabbar.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    litters : ["流行", "新款", "精选",]
  },
  showClick(event) {
    console.log(event)
    const name = event.detail.item
    wx.showToast({
      title: name,
    })
  },
  handleUpdate(){
    // 通过类名或者id名定义到该组件
    const sel = this.selectComponent("#sel-com")
    // 第一种修改方式：直接修改了组件中的数值
    // sel.setData({
    //   counter : sel.data.counter + 10
    // })
    //第二种修改方式：通过组件的方法进行修改
    sel.incremate(10)
  }
})