// 登录是在app.js中做的
App({
  globalData: {
    token : ''
  },
  onLaunch: function () {
    // 每次打开页面，先查询缓存中是否有token
    // 1、先从缓存中取出token
    const token = wx.getStorageSync('token')
    // 2、判断token是否有值
    if(token && token.length !== 0) {
      this.check_token(token)
    }else{
      this.login()
    }
    
  },
  check_token(token){
    console.log("token判断")
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      method: 'post',
      header : {
        token
      },
      success : (res) => {
        console.log(res)
        if(!res.data.errcode) {
          // 将token存储到公共数据中，其他页面调用
          this.globalData.token = token 
        }else{
          this.login()
        }
      },
      fail(err) {
        console.log(err)
      }
    })
  },
  login() {
    console.log("第一次登录")
    wx.login({
      // 登录操作，通过wx.login获取用户的code,code只有5分钟是有效
      complete: (res) => {
        console.log(res)
        const code = res.code
        wx.request({
          url: 'http://123.207.32.32:3000/login',
          method : 'post',
          data: {
            code
          },
          // *****注意要用箭头函数，否则this会报错
          success: res =>{
            console.log(res)
            // 1、获取登录的token
            const token = res.data.token;
            // 2、将token存储到localStorage中
            this.globalData.token = token
            console.log("--" + token)
            // 3、将token保存到本地
            wx.setStorageSync('token', token)
          }
        })
      },
    })
  }
})
