// components/com-train/com-train.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    litters: {
      type : Array,
      value : []
    }
  },
  methods: {
    click(event) {
      let index = event.currentTarget.dataset.index
      let item = event.currentTarget.dataset.item
      console.log(index)
      this.setData({
        indexActive : index
      })
      this.triggerEvent("handleClick", {item, index} )
    }
    
  },
  data: {
    indexActive : 0
  }

})
