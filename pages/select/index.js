// pages/modal/index.js
const A = getApp();
Page(A.assignPage({

   /**
    * 页面的初始数据
    */
   data: {
      list: [{
            id: 'demo',
            name: 'Demo',
            active: true
         },
         {
            id: 'normal',
            name: '常用',
            active: false
         },
         {
            id: 'doc',
            name: '文档',
            active: false
         }
      ]
   },

   /**
    * 生命周期函数--监听页面加载
    */
   onLoad: function(options) {

   },

   /**
    * 生命周期函数--监听页面初次渲染完成
    */
   onReady: function() {

   },

   /**
    * 生命周期函数--监听页面显示
    */
   onShow: function() {

   },

   /**
    * 生命周期函数--监听页面隐藏
    */
   onHide: function() {

   },

   /**
    * 生命周期函数--监听页面卸载
    */
   onUnload: function() {

   },

   /**
    * 页面相关事件处理函数--监听用户下拉动作
    */
   onPullDownRefresh: function() {

   },

   /**
    * 页面上拉触底事件的处理函数
    */
   onReachBottom: function() {

   },

   /**
    * 用户点击右上角分享
    */
   openmodal: function() {
      A.showModal({
         content: 'demo',
         showCancel: false
      })
   }
}))