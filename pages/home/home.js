// pages/home/home.js
// 对象字面量
Page({
  data: {
    name: "pigdd",
    students: [
      {name: "mt", age: 18},
      {name: "cc", age: 19},
      {name: "yx", age: 20}
    ],
    conuter:0
  },
  btnClick(){
    // 错误做法：数据更新，但是不会在页面显示
    // this.data.conuter++;
    this.setData({
      conuter: this.data.conuter + 1
    })
  },
  btnreduce() {
    this.setData({
      conuter: (this.data.conuter - 1 > 0) ? this.data.conuter - 1 : 0
    })
  }
})