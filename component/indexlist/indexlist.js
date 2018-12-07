// component/indexlist/indexlist.js
Component({
    externalClasses: ['title', 'conter', 'fiexd'],
    properties: {
        search: {
            type: Boolean,
            value: true
        },
        listArr: {
            type: Array,
            value: []
        },
        keyArr: {
            type: Array,
            value: []
        },
        baseconfig: {
            type: Object,
            value: {
                titleH: 45,
                conH: 45,
                fiexdH: 25,
            }
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        intoView: "",
        inputVal: "",
        newList: [],
        nowChangeIndex: 0,
        oldChangeIndex: 0,
        clickIndex: 0,
        oldHeight: 0,
        fiexdFlag: true,
        fiexd_icon: false,
        fiexd_iconTxt: ''
    },

    /**
     * 组件的方法列表
     */
    methods: {
        // 点击获取当前点击的文字
        getData(e) {
            this.triggerEvent('getData', e.currentTarget.dataset)
        },
        showInput: function() {
            this.setData({
                inputShowed: true,
            });
        },
        hideInput: function() {
            this.setData({
                inputVal: "",
                inputShowed: false
            });
        },
        clearInput: function() {
            this.setData({
                inputVal: ""
            });
        },
        // 悬浮框滑动
        fiexdScrollStrat(e) {
            console.log(e.changedTouches[0].pageY);
            let startPageY = e.changedTouches[0].pageY
            let intoView = 'a' + e.currentTarget.dataset.id;
            let nowChangeIndex = e.currentTarget.dataset.index;
            let oldChangeIndex = this.data.nowChangeIndex;
            let nowHeight = 0;
            let listArr = this.data.listArr;
            let titleH = Number(this.data.baseconfig.titleH); //标题的高度
            let conH = Number(this.data.baseconfig.conH); //内容的高度
            if (oldChangeIndex - nowChangeIndex > 0) {
                for (let j = 0; j < nowChangeIndex; j++) {
                    nowHeight += (Number(listArr[j].arr.length) * conH) + titleH
                }
            } else {
                for (let a = 0; a < nowChangeIndex; a++) {
                    nowHeight += (Number(listArr[a].arr.length) * conH) + titleH
                }
            }
            let keyArr = this.data.keyArr;
            let fiexd_iconTxt = keyArr[nowChangeIndex];
            if (fiexd_iconTxt) {
                this.setData({ fiexd_iconTxt, fiexd_icon: false })
                setTimeout(() => {
                    this.setData({ fiexd_icon: true })
                }, 50)
            }
            this.setData({
                intoView,
                clickIndex: nowChangeIndex,
                nowChangeIndex,
                oldChangeIndex: nowChangeIndex,
                startPageY,
                fiexdIndex: nowChangeIndex,
                nowHeight
            })
        },

        fiexdScrollmove(e) {
            let fiexdIndex = this.data.fiexdIndex; //当前的定位点
            let startPageY = this.data.startPageY; //初始点击点的记录
            let movePageY = e.changedTouches[0].pageY; //当前移动的距离
            let fiexdH = this.data.baseconfig.fiexdH; //浮动框的单个框高度
            let countJag = startPageY - movePageY;
            let listArr = this.data.listArr;
            let titleH = Number(this.data.baseconfig.titleH); //标题的高度
            let conH = Number(this.data.baseconfig.conH); //内容的高度

            if (countJag % fiexdH == 0) {
                let nowHeight = 0;
                fiexdIndex -= countJag / fiexdH;
                fiexdIndex = fiexdIndex <= 0 ? 0 : fiexdIndex >= listArr.length - 1 ? listArr.length - 1 : fiexdIndex;
                for (let j = 0; j < fiexdIndex; j++) {
                    nowHeight += (Number(listArr[j].arr.length) * conH) + titleH
                }
                let keyArr = this.data.keyArr;
                let fiexd_iconTxt = keyArr[fiexdIndex];
                if (fiexd_iconTxt) {
                    this.setData({ fiexd_iconTxt, fiexd_icon: false })
                    setTimeout(() => {
                        this.setData({ fiexd_icon: true })
                    }, 50)
                }
                this.setData({
                    clickIndex: fiexdIndex,
                    oldChangeIndex: fiexdIndex,
                    nowChangeIndex: fiexdIndex,
                    nowHeight,
                })
            }
        },
        // 滚动的
        scrollBtn(e) {
            let deltaY = e.detail.deltaY;
            let titleH = Number(this.data.baseconfig.titleH); //标题的高度
            let conH = Number(this.data.baseconfig.conH); //内容的高度
            let listArr = this.data.listArr; //遍历的数组对象
            let intoView = this.data.intoView; //当前的定位ID
            let scrollTop = e.detail.scrollTop; //滑动的上边距
            let nowChangeIndex = 0; //新的比对点
            let oldChangeIndex = this.data.oldChangeIndex; //旧的比对点
            let nowHeight = (Number(listArr[0].arr.length) * conH) + titleH; //改变位置的点
            let clickIndex = this.data.clickIndex; //当前滑动点击定位到的数值
            let oldHeight = this.data.oldHeight;
            let contrastHeightTop = 0; //上滑对比的数值;
            let contrastHeightBottom = 0; //下滑对比的数值
            // 避免多循环造成卡顿判断
            for (let j = 0; j <= oldChangeIndex; j++) {
                contrastHeightTop += (Number(listArr[j].arr.length) * conH) + titleH
            }

            for (let a = 0; a < oldChangeIndex; a++) {
                contrastHeightBottom += (Number(listArr[a].arr.length) * conH) + titleH
            }

            if (contrastHeightTop > scrollTop && deltaY < 0) {
                return
            }

            if (contrastHeightBottom < scrollTop && deltaY > 0) {
                return
            }

            //判断结束
            // 获取当前的索引点位置
            for (let i = 1; i < listArr.length; i++) {
                if (nowHeight <= scrollTop) {
                    nowHeight += (Number(listArr[i].arr.length) * conH) + titleH;
                    nowChangeIndex++;
                }
            }
            // 前后对比更新避免多次试图渲染
            if (oldChangeIndex != nowChangeIndex) {
                this.setData({ nowChangeIndex, oldChangeIndex: nowChangeIndex, clickIndex: 0, oldHeight: nowHeight })
                if (clickIndex >= nowChangeIndex) {
                    this.setData({ nowChangeIndex: clickIndex, nowChangeIndex: clickIndex, clickIndex: 0 })
                }
            }
        },
        // 搜索的函数
        inputTyping: function(e) {
            let inputVal = this.data.inputVal;
            let newList = [];
            let keyWord = e.detail.value;
            for (let i in this.data.listArr) {
                for (let j of this.data.listArr[i].arr) {
                    if (~j.indexOf(keyWord)) {
                        newList.push(j);
                    }
                }
            }
            this.setData({
                inputVal: keyWord,
                newList: newList
            });
        },
    }
})