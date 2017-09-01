// material.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    'vendors' : [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    let cate1=[],cate2=[],cate3=[],cate4=[],
        cate5=[], cate6=[], cate7=[], cate8=[],
        cate9=[], cate10=[], cate11=[], cate12=[],
        cate13=[], cate14=[], cate15=[], cate16=[],
        cate17=[], cate18=[], cate19=[];

    wx.request({
      url: 'http://localhost:8888/material',
      header : {
        'content-type': 'application/json'
      },
      success : function(res){
        res.data.map(function(r){
          switch (r.category){
            case '瓷砖类':
            console.log(r);
            cate1.push(r);
            break;
            case '橱柜类':
            console.log(r);
            cate2.push(r);
            break;
            case '室内用门类':
            cate3.push(r);
            console.log(r);
            break;
            case '防盗门窗类':
            cate4.push(r);
            console.log(r);
            break;
            case '乳胶漆类':
            cate5.push(r);
            console.log(r);
            break;
            case '窗帘类':
            cate6.push(r);
            console.log(r);
            break;
            case '定制柜体类':
            cate7.push(r);
            console.log(r);
            break;
            case '板材类':
            cate8.push(r);
            console.log(r);
            break;
            case '木地板类':
            cate9.push(r);
            console.log(r);
            break;
            case '灯饰类':
            cate10.push(r);
            console.log(r);
            break;
            case '墙纸地毯类':
            cate11.push(r);
            console.log(r);
            break;
            case '卫浴类':
            cate12.push(r);
            console.log(r);
            break;
            case '集成天花板类':
            cate13.push(r);
            console.log(r);
            break;
            case '五金类':
            cate14.push(r);
            console.log(r);
            break;
            case '硅藻泥类':
            cate15.push(r);
            console.log(r);
            break;
            case '大理石类':
            cate16.push(r);
            console.log(r);
            break;
            case '艺术玻璃类':
            cate17.push(r);
            console.log(r);
            break;
            case '马赛克类':
            cate18.push(r);
            console.log(r);
            break;
            case '软硬包类':
            cate19.push(r);
            console.log(r);
            break;
          }
        })
        that.setData({
          'cate1': cate1,
          'cate2': cate2,
          'cate3': cate3,
          'cate4': cate4,
          'cate5': cate5,
          'cate6': cate6,
          'cate7': cate7,
          'cate8': cate8,
          'cate9': cate9,
          'cate10': cate10,
          'cate11': cate11,
          'cate12': cate12,
          'cate13': cate13,
          'cate14': cate14,
          'cate15': cate15,
          'cate16': cate16,
          'cate17': cate17,
          'cate18': cate18,
          'cate19': cate19,
        });
      }
    })
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

  },
  vendorDetail(e){
    console.log(e);
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../materialDetail/materialDetail?id='+id,
    })
  }
})