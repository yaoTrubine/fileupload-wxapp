//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    width: app.systemInfo.windowWidth,
    height: app.systemInfo.windowHeight,
    banner: ['https://aspiretocdn.lingy.cc/111.jpg',
            'http://i.dxlfile.com/adm/material/2017_01_04/2017010411165785666.jpg',
            'http://i.dxlfile.com/adm/material/2017_01_04/20170104140739205869.jpg',
            'http://i.dxlfile.com/adm/material/2017_01_16/20170116171332214897.jpg'],
    functions: [
      {
        url: '../../images/设计咨询.png',
        name: '设计咨询',
        id: '01'
      },
      {
        url: '../../images/造价咨询.png',
        name: '造价咨询',
        id: '02'
      },
      {
        url: '../../images/装修公司.png',
        name: '装修公司',
        id: '03'
      },
      {
        url: '../../images/装修材料.png',
        name: '装修材料',
        id: '04'
      },
    ],

  },

  onLoad: function () {
    var that = this;
    var data = [];
    wx.request({
      url: 'http://localhost:3000/companys',
      
      header: {
        'content-type': 'application/json'
      },
      success: function(res){
        // for(var i=0;i<res.data.length;i++){
        //   data.push(res.data[i]);
        // }
        // console.log(data);
        // that.setData({
        //   'goods': data
        // })
        console.log(res.data);
        that.setData({
          'goods': res.data
        })
      }
    })
  },
  onShow: function(){
    var that = this;
    console.log(that.data.goods);
  },

  fucClick(event){
    const id = event.currentTarget.dataset.id;
    console.log(id);
    switch(id){
      case '03':
        wx.navigateTo({
          url: '../company/company',
        })
    }
    // wx.navigateTo({
    //   url: '../storelist/storelist',
    // })

  },
  goodDetail: function(e){
    var id = e.currentTarget.dataset.id;
    console.log(e);
    wx.navigateTo({
      url: '../goods/goods?id='+id,                 
    })
  }

})
