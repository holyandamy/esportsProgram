Component({
  data: {
    countDownDay:0,
    countDownHour:0,
    countDownMinute:0,
    countDownSecond:0
  },
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    //配置页面传过来的值,key值要一一对应
    'countdown': {
      type: Number, //必填，目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: ""     //可选，默认值，如果页面没传值过来就会使用默认值
    }

  },
  attached: function () {
    // 可以在这里发起网络请求获取插件的数据
    this.onLoad();
    this.setData({

    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  
  methods: {
    loginSuccess: function (e) {
      console.log(e.name)

    },
    onLoad: function (options) {
      
      var totalSecond = (this.properties.countdown - Date.parse(new Date())) / 1000;

      var interval = setInterval(function () {
        // 秒数
        var second = totalSecond;

        // 天数位
        var day = Math.floor(second / 3600 / 24);
        var dayStr = day.toString();
        if (dayStr.length == 1) dayStr = '0' + dayStr;

        // 小时位
        var hr = Math.floor((second - day * 3600 * 24) / 3600);
        var hrStr = hr.toString();
        if (hrStr.length == 1) hrStr = '0' + hrStr;

        // 分钟位
        var min = Math.floor((second - day * 3600 * 24 - hr * 3600) / 60);
        var minStr = min.toString();
        if (minStr.length == 1) minStr = '0' + minStr;

        // 秒位
        var sec = second - day * 3600 * 24 - hr * 3600 - min * 60;
        var secStr = sec.toString();
        if (secStr.length == 1) secStr = '0' + secStr;
        //console.log(totalSecond);
        this.setData({
          countDownDay: dayStr,
          countDownHour: hrStr,
          countDownMinute: minStr,
          countDownSecond: secStr,
        });
        totalSecond--;
        if (totalSecond < 0) {
          clearInterval(interval);
          // wx.showToast({
          //   title: '活动已结束',
          // });
          this.setData({
            countDownDay: '00',
            countDownHour: '00',
            countDownMinute: '00',
            countDownSecond: '00',
          });
        }
      }.bind(this), 1000)
    },
  }
})