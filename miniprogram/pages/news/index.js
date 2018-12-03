// pages/news/index.js
Page({

  /**
   * 页面的初始数据
   */
  loginhome: function () {
    console.log(55)
    wx.navigateTo({
      url: '/pages/logIn/index'
    })

  },
  data: {
    imgUrls: [
      'https://cdn.esportsmatrix.com/lol/Content/images/uploaded/news/32b0b30d-29d4-48bc-b64b-2705ea34b1c5.jpg',
      'https://cdn.esportsmatrix.com/lol/Content/images/uploaded/news/fcfcb0b1-ebe9-44c0-bcb4-c10f4ae9fc87.jpg',
      'https://cdn.esportsmatrix.com/lol/Content/images/uploaded/news/1ca1e217-3e76-443d-8585-4700b7fc30ba.jpg'
    ],
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    listdatas: [
      {
        imgurl: [
          'https://cdn.esportsmatrix.com/lol/Content/images/uploaded/news/32b0b30d-29d4-48bc-b64b-2705ea34b1c5.jpg'
        ],
        title: '本日(25/7)赛事预测(LPL): IG VS SS (17:00)',
        destitle: 'CN',
        destime: '15小时',
        myurl: '111111111111',
        id: 1
      },
      {
        imgurl: [
          'https://cdn.esportsmatrix.com/lol/Content/images/uploaded/news/fcfcb0b1-ebe9-44c0-bcb4-c10f4ae9fc87.jpg'
        ],
        title: '本日(25/7)赛事预测(LPL): IG VS SS (17:00)',
        destitle: 'CN',
        destime: '15小时',
        myurl: '222222222',
        id: 2
      },
      {
        imgurl: [
          'https://cdn.esportsmatrix.com/lol/Content/images/uploaded/news/347ce929-006a-4847-9332-89a9e0a2d281.png'
        ],
        title: '本日(25/7)赛事预测(LPL): IG VS SS (17:00)',
        destitle: 'CN',
        destime: '15小时',
        myurl: '3333333333',
        id: 3
      },
      {
        imgurl: [
          'https://cdn.esportsmatrix.com/lol/Content/images/uploaded/news/d91b8542-ec57-4897-8576-402e9ad2cbaf.jpg'
        ],
        title: '本日(25/7)赛事预测(LPL): IG VS SS (17:00)',
        destitle: 'CN',
        destime: '15小时',
        myurl: '4444444',
        id: 4
      },
      {
        imgurl: [
          'https://cdn.esportsmatrix.com/lol/Content/images/uploaded/news/fa97657d-8610-413b-ba95-60b1d7b506ff.png'
        ],
        title: '本日(25/7)赛事预测(LPL): IG VS SS (17:00)',
        destitle: 'CN',
        destime: '15小时',
        myurl: '55555555',
        id: 5
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