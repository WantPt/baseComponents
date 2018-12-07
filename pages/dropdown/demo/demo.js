// pages/dropdown/demo/demo.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        list: [{
            name: '基本单选',
            params: {
                dropdownList: [{
                    iconImg: '/menu1.png',
                    title: '列表一',
                    default: true,
                }, {
                    iconImg: '',
                    title: '列表二',
                }, {
                    iconImg: '',
                    title: '列表三',
                }, ],
                baseConfig: {
                    iconColor: '09c3eb'
                }
            },
        },{
            name: '基本多选',
            params: {
                dropdownList: [{
                    title: '列表一',
                    default: true,
                }, {
                    iconImg: '',
                    title: '列表二',
                }, {
                    iconImg: '',
                    title: '列表三',
                }, ],
                baseConfig: {
                    multiple: true,
                    iconImg:'/menu1.png'
                }
            },
        },],
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
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

    },
    dropdownBtn(e) {
        console.log(e.detail)
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
})