// pages/wxml/wxml.js
Page({

  data: {
    time: new Date().toLocaleString(),
    isAcive: false,
    isShow : true,
    score: 55,
    scores: [55, 68, 78, 80 ,95, 78, 85],
    sco: 0,

  },
  onLoad() {
    // setInterval(() => {
    //   this.setData({
    //     time: new Date().toLocaleString()
    //   })
    // }, 1000)
  },
  handleFontColor() {
    this.setData({
      isAcive: !this.data.isAcive
    })
  },
  handleShow() {
    this.setData({
      isShow: !this.data.isShow
    })
  },
  handlescore() {
    let num = 0
    for(let i of this.data.scores) {
      num += i
    }
    this.setData({
      sco: num / this.data.scores.length
    })
    console.log(this.data.scores.length)
  }
})