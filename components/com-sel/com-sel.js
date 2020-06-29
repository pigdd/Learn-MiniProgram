// components/com-sel/com-sel.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    counter : 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleUpdate() {
      this.triggerEvent("update")
    },
    incremate(num) {
      this.setData({
        counter : this.data.counter + num
      })
    }
  }
})
