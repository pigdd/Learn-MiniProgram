// components/style-com/style-com.js
Component({
  options : {
    // 组件和页面之间的样式本互不影响，小程序中不推荐使用id、标签、属性选择器
    // 默认值是“isolated：产生隔离，组件和页面的样式相互不影响
    //"apply-shared":页面的样式会对组件的样式产生影响
    //“shared”：组件和页面之间相互影响
    styleIsolation : 'shared'
  }
})
