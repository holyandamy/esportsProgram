// pages/recharge/index.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    defaultSize: 'default',
    primarySize: 'default',
    warnSize: 'default',
    disabled: false,
    plain: false,
    loading: false,
    listsmoney:[
      {
        title: 'RMB5'
      },
      {
        title: 'RMB10'
      },
      {
        title: 'RMB15'
      },
      {
        title: 'RMB20'
      },
      {
        title: 'RMB25'
      },
      {
        title: 'RMB30'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },
  paymoney: function (){
    var nowTime=new Date().getTime();
    var paySign = 'MD5(appId = wxd678efh567hg6787 & nonceStr=5K8264ILTKCH16CQ2502SI8ZNMTM67VS & package=prepay_id = wx2017033010242291fcfe0db70013231072 & signType=MD5 & timeStamp=1490840662 & key=qazwsxedcrfvtgbyhnujmikolp111111) = 22D9B4E54AB1950F51E0649E8810ACD6';
    wx.showModal({
      title: '提示',
      content: '付款确认',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定');
          wx.requestPayment({
            'timeStamp': nowTime+'',
            'nonceStr': '5K8264ILTKCH16CQ2502SI8ZNMTM67VS',
            'package': 'prepay_id=wx2017033010242291fcfe0db70013231072',
            'signType': 'MD5',
            'paySign': paySign,
            'success': function (res) {
              console.log('支付成功');
              wx.navigateTo({
                url: '/pages/paysuccess/index'
              })
            },
            'fail': function (res) {
              console.log('支付失败', res.message);
              wx.navigateTo({
                url: '/pages/payfail/index'
              })
            }
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
    
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})