// pages/panle/panle.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        paneObj: {
            panleTxt:['测试panle模板','副标题'],
            panleData:{
                allData:'我是全部的绑定数据',
                mainData:'我是左标题的绑定数据',
                subData:'我是右标题的绑定数据'
            },
            baseClass: {
                mainTitleColor:'',
                subtitleColor:'red',
                mainTitleImg:'/menu1.png',
                subtitleImg:{
                    icon: 'icon-pq-rightarr',
                    size: 30,
                    color: 'red'
                },
                slotShow:0,
                slotHeight:200
            }
        },
        paneObj1: {
            panleTxt:['测试panle模板'],
            baseClass: {
                subtitleImg:{
                    icon: 'icon-pq-rightarr',
                    size: 30,
                },
                slotShow:1,
                slotHeight:200
            }
        },
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
    panelBtn(e){
        console.log(e.detail)
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