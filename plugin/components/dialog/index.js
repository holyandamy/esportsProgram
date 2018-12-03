Component({
  data: {

  },
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  attached: function () {
    // 可以在这里发起网络请求获取插件的数据
    this.setData({

    })
  },
  methods: {
    loginSuccess: function (e) {
      console.log(e.name)

    }
  }
})