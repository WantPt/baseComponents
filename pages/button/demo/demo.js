// pages/button/demo/demo.js
// pages/modal/demo/demo.js
const A = getApp();
Page(A.assignPage({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        name: 'type',
        blocks: [
          { text: '大按钮', type: 'l', tapEvent: 'tapEvent' }, //b - 大、m - 中、ms - 中小、s - 小、mi - 特小、sku - SKU、kw - 关键字
          { text: '中按钮(默认)', type: 'm', tapEvent: 'tapEvent' },
          { text: '中小按钮', type: 'ms', tapEvent: 'tapEvent' },
          { text: '小按钮', type: 's', tapEvent: 'tapEvent' },
          { text: '特小按钮', type: 'mi', tapEvent: 'tapEvent' },
          { text: 'SKU按钮', type: 'sku' },
          { text: '关键字', type: 'kw' }
        ]
      },
      {
        name: 'loading',
        blocks: [
          { text: '不需要加载样式按钮(默认)'},
          { text: '需要加载样式-正常加载', loading: true, tapEvent: 'tapEvent' },
          { text: '需要加载样式-加载超时', loading: true, tapEvent: 'tapEvent1' },
        ]
      },
      {
        name: 'disabled',
        blocks: [
          { text: '正常按钮（默认）' },
          { text: '禁用按钮', disabled: true }
        ]
      },
      {
        name: 'style',
        blocks: [
          { text: '自定义样式', color: 'lightPink', bgColor: '#00f', bdColor: 'lightPink' },
          { text: '主题按钮', theme: 'bg-p1' },
        ]
      }
    ],
    curItem: -1
  },
  // 展开收起
  expand: function (e) {
    let index = e.currentTarget.dataset.index;
    if (index == this.data.curItem) {
      this.setData({ curItem: -1 });
    } else {
      this.setData({ curItem: index });
    }
  },
  tapEvent: function (e) {
    let index = e.currentTarget.dataset.index;
    let btn = this.selectComponent('#vwx-button' + index);
    let timer = setTimeout(function(){
      btn.hideLoading();
      clearTimeout(timer);
    }, 5000);
  },
  tapEvent1: function (e) {
    let index = e.currentTarget.dataset.index;
    let btn = this.selectComponent('#vwx-button' + index);
    let timer = setTimeout(function () {
      btn.hideLoading();
      clearTimeout(timer);
    }, 40000);
  }
}))