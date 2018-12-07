// component/select/select.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        pickObj: {
            type: Object,
            value: {
                mode: 'selector',
                range: [],
                value: 0,
                disabled: false,
                start: '',
                end: '',
            }
        }
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    methods: {
        pickchange(e) {
            let list = this.data.pickObj;
            let index = e.detail.value;
            let obj = e.detail;
            if (list.mode == 'selector' || !list.mode) {
                obj = {
                    index: index,
                    val: list.range[index]
                }
            }
            if(list.mode == 'multiSelector'){
                let val = [];
                for(let i in index){
                    val[i] = list.range[i][index[i]]
                }
                obj = {
                    index: index,
                    val: val
                }
            }
            this.triggerEvent('change', obj)
        },
        columnchange(e) {
            let list = this.data.pickObj;
            let index = e.detail.value;
            let column = e.detail.column;
            let obj = e.detail;
            if (list.mode == 'multiSelector') {
                obj = {
                    index: index,
                    val: list.range[column][index]
                }
            }
            this.triggerEvent('columnchange', obj)
        },
    }
})