const A = getApp();
Page(A.assignPage({

    /**
     * 页面的初始数据
     */
    data: {
        list: [{
                name: '基本单选',
                blocks: [
                    { text: '基本单选', params: { change: 'onlyChange', range: ['单选1', '单选2', '单选3'] } },
                ]
            },
            {
                name: '多类型的选择器',
                blocks: [
                    { text: '时间选择器', params: { mode:'time',change:'onlyChange' } },
                    { text: '日期选择器', params: { mode:'date',change:'onlyChange' } },
                    { text: '省市区选择器', params: {  mode:'region',change:'onlyChange' } }
                ]
            },
            {
                name: '基本多选',
                blocks: [
                    { text: '自定义选择器', params: { mode: 'multiSelector',range:[['第一列1','第一列2','第一列3'],['第二列1','第二列2','第二列3']],change:'onlyChange',colchange:'moreChange' } },
                ]
            }
        ],
        curItem: -1
    },
    // 展开收起
    expand: function(e) {
        let index = e.currentTarget.dataset.index;
        if (index == this.data.curItem) {
            this.setData({ curItem: -1 });
        } else {
            this.setData({ curItem: index });
        }
    },
    onlyChange(e){
        console.log(e.detail)
    },
    moreChange(e){
        console.log(e.detail)
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
    onShareAppMessage: function() {

    }
}))