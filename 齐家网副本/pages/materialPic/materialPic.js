// materialPic.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imagesList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options);
    let that = this;
    let images = [];
    wx.request({
      url: 'https://qzw.flhome.cn/material/'+ options.name +'/'+ options.productby +'/'+ options.field,
      header: {
        'content-type': 'application/json'
      },
      success: function(res){
        console.log(res.data);
        res.data.map(function(r){
          images.push(r.images[0].pic[0]);
        })
        console.log(images);
        that.setData({
          'images': images,
          imagesList: images.map( img => {
            return 'https://qzw.flhome.cn/images/vendors/' + img;
          })
          // imagesList: res.data.map(function (image) {
          //   let fileName = image.imags[0].pic[0];
          //   return 'https://qzw.flhome.cn/images/vendors/' + fileName;
          // })
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
  vendorDetail: function(e){
    console.log(e);
    var current = e.target.dataset.src;
    wx.previewImage({
      current: current,
      urls: this.data.imagesList
    })
  }
})