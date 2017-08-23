// company.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var that = this;
    var data = [];
    wx.request({
      url: 'https://qzw.flhome.cn/companys',

      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
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
  goodDetail: function (e) {
    var id = e.currentTarget.dataset.id;
    console.log(e);
    wx.navigateTo({
      url: '../goods/goods?id=' + id,
    })
  }
})