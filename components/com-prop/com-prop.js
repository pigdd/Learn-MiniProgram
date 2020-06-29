// components/com-prop/com-prop.js
Component({
  /**
   * 组件的属性列表
   * 组件给页面传值的两种写法，
   */
  properties: {
    // title : String
    title : {
      type : String,
      value : "默认",
      // 设置观察者
      observer : function(newVal, oldVal) {
        console.log(newVal + ',' + oldVal)
      }
    },
    content : {
      type : String,
      value : "default"
    },
  },
  // 页面给组件自定义样式
  externalClasses : ["titleclass"]
})
