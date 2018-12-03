// pages/shop/index.js
var plugin = requirePlugin("myPlugin")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dialog:false,
    test:{
      title:'',
      imgurl:''
    },
    imgUrls: [
      'https://cdn.esportsmatrix.com/lol/Content/images/uploaded/news/32b0b30d-29d4-48bc-b64b-2705ea34b1c5.jpg',
      'https://cdn.esportsmatrix.com/lol/Content/images/uploaded/news/fcfcb0b1-ebe9-44c0-bcb4-c10f4ae9fc87.jpg',
      'https://cdn.esportsmatrix.com/lol/Content/images/uploaded/news/1ca1e217-3e76-443d-8585-4700b7fc30ba.jpg'
    ],
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    nineblock:[
      {
        imgurl:'',
        title:'热卖'
      },
      {
        imgurl: '',
        title: '精品推荐'
      },
      {
        imgurl: '',
        title: '英雄联盟'
      },
      {
        imgurl: '',
        title: '刀塔2'
      },
      {
        imgurl: '',
        title: 'CS:GO'
      },
      {
        imgurl: '',
        title: '虚拟点卡'
      },
      {
        imgurl: '',
        title: '敬请期待'
      },
      {
        imgurl: '',
        title: '敬请期待'
      }
    ],
    shoplist:[
      {
        title:' (美服)英雄联盟中级皮肤卡内瑟斯',
        imgurl:'https://eshop.66esports.cn/content/images/thumbs/0000538_415.jpeg',
      },
      {
        title: '测试222',
        imgurl: 'https://eshop.66esports.cn/content/images/thumbs/0000542_415.jpeg',
      },
      {
        title: '测试333',
        imgurl: 'https://eshop.66esports.cn/content/images/thumbs/0000543_415.jpeg',
      },
      {
        title: '测试444',
        imgurl: 'https://eshop.66esports.cn/content/images/thumbs/0000464_feast-of-abscession-bundle_415.jpeg',
      },
      {
        title: '测试555',
        imgurl: 'https://eshop.66esports.cn/content/images/thumbs/0000539_415.jpeg',
      },
      {
        title: '测试666',
        imgurl: 'https://eshop.66esports.cn/content/images/thumbs/0000544_crystal-maiden-arcana-set_415.jpeg',
      }
    ]
  },
  showdialog: function (e){
    var index = e.currentTarget.dataset.index;
    var item = this.data.shoplist[index];
    console.log(index);
    
    this.setData({ 
      dialog: true, 
      test: {
        title: item.title,
        imgurl: item.imgurl
      }
    });
    setTimeout( ()=>{
      this.setData({ dialog: false});
    },1000)
  },
  addmoney :function (){
    wx.navigateTo({
      url: '/pages/recharge/index'
    })
  },
  mytools: function () {
    wx.navigateTo({
      url: '/pages/mytools/index'
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