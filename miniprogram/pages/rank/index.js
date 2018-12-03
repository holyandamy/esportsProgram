// pages/rank/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasMore:true,
    tabnum: 0,
    allrank:[
      {
        num:1,
        title:'柠檬冬瓜茶',
        gem:111,
        des:'测试测试测试测试测试测试'
      },
      {
        num: 2,
        title: '柠檬冬瓜茶',
        gem: 222,
        des: '测试测试测试测试测试测试'
      },
      {
        num: 3,
        title: '柠檬冬瓜茶',
        gem: 333,
        des: '测试测试测试测试测试测试'
      },
      {
        num: 4,
        title: '柠檬冬瓜茶',
        gem: 444,
        des: '测试测试测试测试测试测试'
      },
      {
        num: 5,
        title: '柠檬冬瓜茶',
        gem: 555,
        des: '测试测试测试测试测试测试'
      },
      {
        num: 6,
        title: '柠檬冬瓜茶',
        gem: 666,
        des: '测试测试测试测试测试测试'
      },
      {
        num: 7,
        title: '柠檬冬瓜茶',
        gem: 777,
        des: '测试测试测试测试测试测试'
      },
      {
        num: 8,
        title: '柠檬冬瓜茶',
        gem: 8888,
        des: '测试测试测试测试测试测试'
      },
      {
        num: 9,
        title: '柠檬冬瓜茶',
        gem: 999,
        des: '测试测试测试测试测试测试'
      },
    ]
  },
  tabarClick: function (e) {
    //console.log(e.target.dataset.num)
    this.setData({
      tabnum: e.target.dataset.tabnum
    })
  },
  loadMore: function () {
    
    if (!this.data.hasMore) return;
    wx.showLoading({ title: '拼命加载中...' });
    setTimeout(() => {
      this.setData({ allrank: this.data.allrank.concat(this.data.allrank) });
      wx.hideLoading()
    },500)
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
    this.setData({ hasMore: true });
    this.loadMore();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})