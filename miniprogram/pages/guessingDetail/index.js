// pages/guessingDetail/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dialog:false,
    num:0,
    sorryTips:false,
    addmoney:0,
    rateitem: 6.88,
    inputvalue:''
  },
  tabarClick: function (e) {
    console.log(e.target.dataset.num)
    this.setData({
      num: e.target.dataset.num
    })
  },
  addmoney:function (e){
    var _value = e.detail.value;
    var ints = /^\+?[1-9][0-9]*$/;
    if (!ints.test(_value)) {
      this.setData({ inputvalue: '', addmoney: 0 });
       wx.showToast({
        title: '请输入数字',
        icon: 'none',
        duration: 2000
      }); return}
    this.setData({ addmoney: _value * this.data.rateitem || 0, inputvalue: _value})
    //console.log(e.detail.value)
  },
  confirm: function (){
    if (Number(this.data.inputvalue) < 1) {
       this.setData({ sorryTips: true})
    }else{
      this.setData({ sorryTips: false, dialog: true });
    }
    
  },
  dialogConfirm:function (){
    this.setData({ dialog: false });
    setTimeout(() => {console.log(123);
      wx.navigateTo({
        url: '/pages/gamedetail/index'
      })
    },500)
  },
  closeDialog: function (){
    this.setData({ dialog: false });
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