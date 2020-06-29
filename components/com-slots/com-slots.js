// components/com-slots/com-slots.js
Component({
  /**
   * 组件的属性列表
   */
  options: {
    multipleSlots : true
  },
  // 组件的声明周期
  // 组件中监听生命周期的函数
  // 1、监听组件在页面中使用的声明周期
  pageLifetimes: {
    show() {
      console.log("监听组件在页面显示时")
    },
    hide() {
      console.log("监听组件在页面隐藏时")
    },
    resize() {
      console.log("监听组件所在的页面大小改变时")
    }
  },
  // 2、组件自身的生命周期
  lifetimes: {
    created() {
      console.log("组件被创建时的函数")
    },
    attached() {
      console.log("组件被添加时的函数")
    },
    ready() {
      console.log("组件被渲染时的函数")
    },
    moved() {
      console.log("组件被移动到另一个节点时的函数")
    },
    detached() {
      console.log("组件被移除掉的时候回执行的函数")
    }
  }
})
