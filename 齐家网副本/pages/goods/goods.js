const app = getApp();

Page({

    data: {
        width: app.systemInfo.windowWidth,
        image: '',
        creator : ''
    },
    //广告栏
    
    onLoad : function(options){
      var that = this;
      console.log(options.id);
      that.setData({
          'creator' : options.id
      });
      //输出公司数据
      wx.request({
        url: 'http://localhost:3000/companys/'+options.id,
        header: {
          'content-type': 'application/json'
        },
        success : function(res){
          that.setData({
            'company': res.data,
            image: 'http://localhost:3000/images/'+res.data.images
          })
        }
      });
      //获得公司下的产品
      wx.request({
        url: 'http://localhost:3000/products/'+options.id,
        header: {
          'content-type': 'application/json'
        },
        success: function (res) {
          that.setData({
            'products': res.data,
          })
        }
      })
    },

    productDetail : function(e){
      var id = e.currentTarget.dataset.id;
      var that = this;
      console.log(id);
      wx.navigateTo({
        url: '../storelist/storelist?creator=' + that.data.creator +'&id=' + id,
      })
    }
})