// pages/indexlist/indexlist.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        listArr: [
            {maintitle:'主标题1',subtitle:'1',arr:['一的内容1']},
            {maintitle:'主标题2',subtitle:'2',arr:['二的内容2','二的内容2']},
            {maintitle:'主标题3',subtitle:'3',arr:['三的内容3','三的内容3','三的内容3']},
            {maintitle:'主标题4',subtitle:'4',arr:['四的内容4','四的内容4','四的内容4','四的内容4']},
            {maintitle:'主标题5',subtitle:'5',arr:['五的内容5','五的内容5','五的内容5','五的内容5','五的内容5']},
            {maintitle:'主标题6',subtitle:'6',arr:['六的内容6','六的内容6','六的内容6','六的内容6','六的内容6','六的内容6']},
            {maintitle:'主标题7',subtitle:'7',arr:['七的内容7','七的内容7','七的内容7','七的内容7','七的内容7','七的内容7','七的内容7']},
            {maintitle:'主标题8',subtitle:'8',arr:['八的内容8','八的内容8','八的内容8','八的内容8','八的内容8','八的内容8','八的内容8']},
        ],
        inputShowed: false,
        inputVal: "",
        keyArr:['A','B','C','D','E'],
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        
    },
    getData(e){
        console.log(e.detail.name)
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