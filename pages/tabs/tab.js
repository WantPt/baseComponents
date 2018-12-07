// pages/index.js
const A = getApp();
Page(A.assignPage({
   data: {
      tabs: [{
            value: "modal 弹窗"
         },
         {
            value: "Tab 标签"
         },
         {
            value: "Tab2 标签"
         },
         {
            value: "Tab 标签"
         }
      ]
   },
   onLoad: function(options) {
      A.updata.getMember();
      console.log(this.route);
   },
   onShow: function() {},
   tapMenu: function(evt) {
      A.showModal();
      console.log(evt.detail.value);
   }
}));