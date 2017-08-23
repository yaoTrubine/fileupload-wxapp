Page({

  /**
   * 页面的初始数据
   */
  data: {
    product: '',
    imagesList : []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    console.log(options);
    wx.request({
      url: 'https://qzw.flhome.cn/products/' + options.creator + '/' + options.id,
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data);
        
        that.setData({
          'product': res.data[0],
          nodes: res.data[0].description,
          imagesList: res.data[0].images.map(function(image){
            return 'https://qzw.flhome.cn/images/products/'+image;
          })
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
  imageTouch: function(e){
    console.log(e);
    console.log(this.data.imagesList);
    // https://qzw.flhome.cn/images/products
    
    var current = e.target.dataset.src;
    wx.previewImage({
      current : current,
      urls: this.data.imagesList
    })
  }
})