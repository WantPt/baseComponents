    // pages/card/card.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        cardObj: {
            cardImg: '/menu1.png',
            titleTxt: '主标题主标题主标题主标题主标题主标题主标题主标题',
            footTxtR: '待付款',
            contentTxt:['下单时间:2018-06-14 14:59:40','数量:1'],
            footTxt:'总价:¥0.04'

        },
        cardObj1: {
            cardImg: '/menu1.png',
            titleTxt: '主标题主标题主标题主标题主标题主标题主标题主标题',
            footTxt: '下单时间:2018-06-14 14:59:40',
            titleTxtR:['¥0.20','x1']
        },
        cardObj2: {
            cardImg: '/menu1.png',
            titleTxtRImg:'/menu1.png',
            titleTxt: '主标题主标题主标题主标题主标题主标题主标题主标题',
            titleTxtR: ['店铺认证'],
            contentTxt: ['浙江省杭州市萧山区利二花苑14幢8楼'],
            footTxt: '',
            footTxtR: '',
            footTxtObj:[{
                name: '粉丝：',
                num: '23  ',
            },{
                name: '店铺销量：',
                num: '231 ',
            },{
                name: '当前活动：',
                num: '41 ',
            },],
            titleTxtLine:1
        },
        cardObj3: {
            cardImg: '/menu1.png',
            titleTxtRImg:'/menu1.png',
            titleTxt: '主标题主标题主标题主标题主标题主标题主标题主标题',
            titleTxtR: ['店铺认证'],
            contentTxt: ['浙江省杭州市萧山区利二花苑14幢8楼'],
            footTxt: '',
            footTxtR: '',
            titleTxtLine:1
        },
        cardObj4: {
            cardImg: '/menu1.png',
            titleTxtRImg:'',
            titleTxt: '主标题主标题主标题主标题主标题主标题主标题主标题',
            titleTxtR: [],
            contentTxt: [],
            footTxt: '',
            footTxtR: '',
            footPriceImg:'/menu1.png',
            footPriceTxt:['团长价：¥0.05','最低价：¥0.03']
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