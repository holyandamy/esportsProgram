var plugin = requirePlugin("myPlugin")
Page({
  //数据
  data: {
    num: 0,
    allgames:[
      {
        classtype:"gameall",
        title:'所有比赛'
      },
      {
        classtype: "lol",
        title: 'lol'
      },
      {
        classtype: "dota2",
        title: 'dota2'
      },
      {
        classtype: "csgo",
        title: 'csgo'
      },
      {
        classtype: "ow",
        title: 'ow',
    
      },
      {
        classtype: "dataosha",
        title: 'dataosha',
        
      },
      {
        classtype: "lushi",
        title: 'lushi',
        
      }
    ],
    gamestype:[
      '全部',
      'lol',
      'dota2',
      'csgo',
      'ow',
      "dataosha",
      'lushi'
    ],
    competition:[
      {
        title:'a',
        timetype: 1533139200000 ,
        home: {
          name: 'JAG',
          rates: 6.939
        },
        guest: {
          name: 'GRF',
          rates: 1.103
        }
      },
      {
        title: 'b',
        timetype: 1533052802000 ,
        home: {
          name: 'SK',
          rates: 1.5
        },
        guest: {
          name: 'FIN',
          rates: 2.3
        }
      },
      {
        title: 'c',
        timetype: 1535749205000 ,
        home: {
          name: 'AAA',
          rates: 111
        },
        guest: {
          name: 'BBB',
          rates: 222
        }
      },
      {
        title: 'd',
        timetype: 1533071408000 ,
        home: {
          name: 'AAA',
          rates: 111
        },
        guest: {
          name: 'BBB',
          rates: 222
        }
      },
      {
        title: 'e',
        timetype: 1533139200000 ,
        home: {
          name: 'AAA',
          rates: 111
        },
        guest: {
          name: 'BBB',
          rates: 222
        }
      },
      {
        title: 'f',
        timetype: 1533139200000 ,
        home: {
          name: 'AAA',
          rates: 111
        },
        guest: {
          name: 'BBB',
          rates: 222
        }
      },
      {
        title: 'g',
        timetype: 1533139200000 ,
        home: {
          name: 'AAA',
          rates: 111
        },
        guest: {
          name: 'BBB',
          rates: 222
        }
      },
      {
        title: 'h',
        timetype: 1505540080 ,
        home: {
          name: 'AAA',
          rates: 111
        },
        guest: {
          name: 'BBB',
          rates: 222
        }
      },
    ],
    imgUrls: [
      'https://cdn.esportsmatrix.com/lol/Content/images/uploaded/news/32b0b30d-29d4-48bc-b64b-2705ea34b1c5.jpg',
      'https://cdn.esportsmatrix.com/lol/Content/images/uploaded/news/fcfcb0b1-ebe9-44c0-bcb4-c10f4ae9fc87.jpg',
      'https://cdn.esportsmatrix.com/lol/Content/images/uploaded/news/1ca1e217-3e76-443d-8585-4700b7fc30ba.jpg'
    ],
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 1000
  },
  takePhoto() {
    const ctx = wx.createCameraContext()
    ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        this.setData({
          src: res.tempImagePath
        })
      }
    })
  },
  error(e) {
    console.log(e.detail)
  },
  tabarClick: function (e) {
    //console.log(e.target.dataset.num)
    this.setData({
      num: e.target.dataset.num
    })
  },
  loginhome:function (){
    wx.navigateTo({
      url: '/pages/logIn/index'
    })
  }
})