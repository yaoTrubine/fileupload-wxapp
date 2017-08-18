const app = getApp();
Page({
  data: {
    items: [
        {
            id: 1,
            title: "a"
            },
            {
            id: 2,
            title: "b",
            },
            {
            id: 3,
            title: "c",
            }
       ],

    city:['全城'],
    sort:['口碑值','最热','最近'],
    index: 0,
    goods:[
        {
            id:1,
            name:'T6空间设计',
            word:1,
            praise:82.8,
            km: 1.2
        },
        {
            id:2,
            name:'C+创意空间',
            word:2,
            praise:82.8,
            km: 1.2
        }
    ]

  },

  bindPickerChange: function(e) {
      console.log(e.detail.value)
    this.setData({
        index: e.detail.value
    })

  },
  storelick : function(e){

      let id =  e.currentTarget.dataset.id;
      var that = this;
      var goods = that.data.goods
      for(let i=0;i<goods.length;i++){
          if (id === goods[i].id){
            console.log(goods[i].word)
            // goods[i].word
            goods[i].word += 1
            this.setData({
                    // 'good.word' : word +=1
            'goods[0].word': goods[0].word,
            'goods[1].word': goods[1].word,
            })
          }
      }
        
    // this.setData({
        
    // })
  },
})