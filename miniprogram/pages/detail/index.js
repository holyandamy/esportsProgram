// pages/detail/index.js
const app = getApp();
import douban from './../../utils/douban.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    start:1,
    count:10,
    subjects:[],
    hasMore:true,
    loading:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id)//options上个页面带过来的参数
    this.setData({ start: options.id });
    this.loadMore()
  },
  loadMore: function (){
    console.log(this.data.start);
    if (!this.data.hasMore) return;
    wx.showLoading({ title: '拼命加载中...' });
    wx.request({
      url: 'https://douban.uieee.com/v2/movie/in_theaters',
      data: {
        start: (this.data.start - 1) * 20,
        count: 10,
        city: '北京'
      },
      method: 'POST',
      header: { 'Content-Type': 'json' },//{  'content-type': 'application/json'},
      success: (res) => {
        console.log(res.data)
        if (res.data.subjects.length > 0) {
          this.setData({ subjects: this.data.subjects.concat(res.data.subjects) })
        } else {
          this.setData({ hasMore: false})
        }
        wx.hideLoading()
      },
      fail:(e) => {
        console.log(111111111111, e)
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    /*return douban.find('in_theaters', 1, 20)
      .then(d => {
        console.log(d.subjects)
      })
      .catch(e => {
        console.error(e)
      })*/
    
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
     wx.stopPullDownRefresh();
this.loadMore()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.setData({ hasMore: true })
    this.loadMore()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log(123)
  }
})