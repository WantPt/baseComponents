// pages/modal/demo/demo.js
const A = getApp();
Page(A.assignPage({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      { 
        name: 'title', 
        blocks: [
          { text: '无标题模态框', params: { showTitle: false } }, 
          { text: '有标题模态框', params: { title: '有标题模态框' } }, 
          { text: '自定义标题样式模态框', params: { title: '自定义标题样式模态框', titleColor: '#e60012' } }
        ] 
      },
      {
        name: 'content', 
        blocks: [
          { text: '基本样式内容模态框', params: { content: '基本样式内容模态框' } },
          { text: '列表样式内容模态框', params: { contType: 1, content: [{label: '1、', text: '列表样式内容模态框'}, {color: '#e60012', label: '2、', text: '列表样式内容模态框'}] } },
          { text: '富文本内容模态框', params: { contType: 2, content: '<div style="font-size: 12px; color: #666; text-align: center;"><span style="font-size: 16px; color: #e60012;">富文本</span>内容模态框</div><div style="color: #666; text-align: left;"><span style="font-weight:bolder;">富文本</span>内容模态框，<span style="font-weight:bolder;">富文本</span>内容模态框，<span style="font-weight:bolder;">富文本</span>内容模态框，<span style="font-weight:bolder;">富文本</span>内容模态框，<span style="font-weight:bolder;">富文本</span>内容模态框</div>' } }
        ]
      },
      { 
        name: 'button', 
        blocks: [
          { text: '基本样式按钮：隐藏取消模态框', params: { showCancel: false } },
          { text: '基本样式按钮模态框', params: {} },
          { text: '列表样式按钮模态框', params: { btnType: 1, btnList: [{
            bgColor: '#e60012',
            bdColor: '#e60012',
            color: '#fff',
            text: '按钮1'
          }, {
            bgColor: '#fff',
            bdColor: '#e60012',
            color: '#e60012',
            text: '按钮2'
          }, {
            bgColor: '#fff',
            bdColor: '#e60012',
            color: '#e60012',
            text: '按钮3'
          }]} }
        ]
      }
    ],
    curItem: -1
  },
  // 展开收起
  expand: function (e) {
    let index = e.currentTarget.dataset.index;
    if (index == this.data.curItem){
      this.setData({ curItem: -1 });
    }else{
      this.setData({ curItem: index });
    }
  },
  // 打开模态框
  showModal: function(e){
    if(this.data.curItem == 2 && e.currentTarget.dataset.index == 2){
      A.showModal(Object.assign(this.data.list[2].blocks[2].params, { success: this.btnListSuccess }))
    }else{
      A.showModal(e.currentTarget.dataset.params)
    }
  },
  // 模态框按钮列表按钮事件
  btnListSuccess: function(e){
    const _that = this;
    let arr = ['按钮1', '按钮2', '按钮3'];
    A.S.toast(arr[e.currentTarget.dataset.index]);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  
  }
}))