Component({
  data: {
    list:[]
  },
  properties: {
    //配置页面传过来的值,key值要一一对应
    'listdatas': {
      type: Object, //必填，目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: ""     //可选，默认值，如果页面没传值过来就会使用默认值
    }

  },
  attached: function(){
    // 可以在这里发起网络请求获取插件的数据
    this.setData({
      list: [{
        name: '电视',
        price: 1000
      }, {
        name: '电脑',
        price: 4000
      }, {
        name: '手机',
        price: 3000
      }]
    })
  },
})