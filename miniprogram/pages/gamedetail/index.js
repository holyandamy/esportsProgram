// pages/gamedetail/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    timetype: 1533052800000,
    matchlist:[
      {
        num:1,
        title:'BO3 总比赛胜利',
        home:{
          imgurl:'https://cdn.esportsmatrix.com/lol/Content/images/uploaded/team/38e4c577-e2d1-43b1-a099-c43739853339.png',
          des:'BLG',
          rates:1.702,
          types:'串联'

        },
        guest:{
          imgurl: 'https://cdn.esportsmatrix.com/lol/Content/images/uploaded/team/da1cc871-3c89-477b-83a4-21478f7bdea6.png',
          des: 'FPX',
          rates: 2.161,
          types: '串联'
        }
      },
      {
        num: 2,
        title: 'BO3 啊啊啊',
        home: {
          imgurl: 'https://cdn.esportsmatrix.com/lol/Content/images/uploaded/team/38e4c577-e2d1-43b1-a099-c43739853339.png',
          des: 'BLG',
          rates: 2.702,
          types: '串联'

        },
        guest: {
          imgurl: 'https://cdn.esportsmatrix.com/lol/Content/images/uploaded/team/da1cc871-3c89-477b-83a4-21478f7bdea6.png',
          des: 'FPX',
          rates: 3.161,
          types: '串联'
        }
      }
    ]
  },
  homeTo:function (){
    wx.navigateTo({
      url: '/pages/guessingDetail/index'
    })
  },
  guestTo:function (){
    wx.navigateTo({
      url: '/pages/guessingDetail/index'
    })
  },
  competitionHistory: function (){
    wx.navigateTo({
      url: '/pages/betsHistory/index'
    })
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