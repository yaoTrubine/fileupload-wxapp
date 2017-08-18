const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods: [
      {
        url: 'http://p1.meituan.net/wedding/5c683d257d0a418c146308b455bb5b582651471.jpg%40640w_480h_0e_1l%7Cwatermark%3D0',
        content: '筒灯',
      },
      {
        url: 'http://p1.meituan.net/wedding/adf460e1e88714cb30e118387de0b09e3536225.jpg%40640w_480h_0e_1l%7Cwatermark%3D0',
        content: '餐厅灯',
      },
      {
        url: 'http://p1.meituan.net/wedding/5c683d257d0a418c146308b455bb5b582651471.jpg%40640w_480h_0e_1l%7Cwatermark%3D0',
        content: '主灯',
      },
      {
        url: 'http://p1.meituan.net/wedding/adf460e1e88714cb30e118387de0b09e3536225.jpg%40640w_480h_0e_1l%7Cwatermark%3D0',
        content: '过道灯',
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://localhost:3000/products',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data)
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },
  goodDetail: function(e){
    var url = e.currentTarget.dataset.id;
    // console.log(url);
    // console.log(e.currentTarget.dataset.id);
    wx.navigateTo({
      url: '../lamp/lamp?name=' + url,
    })
  }
})

