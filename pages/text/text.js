// pages/text/text.js
Page({
  data: {
    message: "",
    flag: 'true'
  },
  handleinput(event){
    console.log(event);
    this.setData({
      message : event.detail.value
    })
  },
  try() {
    this.setData({
      flag : !this.data.flag
    })
  }
})