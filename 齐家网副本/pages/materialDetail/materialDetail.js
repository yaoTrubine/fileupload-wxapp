// materialDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name : '',
    image : '',
    id : '',
    defaultImage: 'https://qzw.flhome.cn/images/vendors/'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    let that = this;
    that.data.name = options.name;
    let material_1 = [], material_2 = [], material_3 = [],
    material_4 = [], material_5 = [], material_6 = [];
    // console.log(options);
    wx.request({
      url: 'https://qzw.flhome.cn/material/'+options.name,
      header : {
        'content-type': 'application/json'
      },
      success: function(res){
        console.log(res.data);
        that.setData({

          'image': 'https://qzw.flhome.cn/images/vendors/'+res.data[0].image[0],
          'name': res.data[0].name,
          'nodes': res.data[0].description
        })
        
      }
    });
    wx.request({
      url: 'https://qzw.flhome.cn/material/'+ options.name +'/'+ options.id,
      header: {
        'content-type': 'application/json'
      },
      success: function(res){
        res.data.map(function(r){
          switch(r.field){
            case 'firstCategory':
              material_1.push(r);
              break;
            case 'secondCategory':
              material_2.push(r);
              break;
            case 'thirdCategory':
              material_3.push(r);
              break;
            case 'fourthCategory':
              material_4.push(r);
              break;
            case 'fifthCategory':
              material_5.push(r);
              break;
            case 'sixthCategory':
              material_6.push(r);
              break;
          }
        })

        // console.log(res.data);
        that.setData({
          'material_1': material_1,
          'material_2': material_2,
          'material_3': material_3,
          'material_4': material_4,
          'material_5': material_5,
          'material_6': material_6,
        })
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
    let that = this;
    let vendor = that.data.name;
    let productBy = e.currentTarget.dataset.id;
    let name = e.currentTarget.dataset.name;
    wx.navigateTo({
      url: '../materialPic/materialPic?name='+vendor+'&productby='+productBy+'&field='+name,
      
    })
  }
})