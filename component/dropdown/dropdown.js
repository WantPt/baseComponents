// component/dropdown/dropdown.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        dropdownList: {
            type: Array,
            value: []
        },
        baseConfig: {
            type: Object,
            value: {
                iconImg: '',
                multiple: true,
                iconColor:'e80012'
            }
        }
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {
        // 点击选中
        dropdownBtn(e) {
            let baseConfig = this.data.baseConfig || false;
            let index = e.currentTarget.dataset.index;
            let dropdownList = this.data.dropdownList;
            let SelectArr = [];
            if (baseConfig.multiple) {
                dropdownList[index].default = !dropdownList[index].default;
                dropdownList.find(item => {
                    item.default&&SelectArr.push(item)
                })
            } else {
                dropdownList.find(item => {
                    item.default = false
                })
                dropdownList[index].default = true;
                SelectArr = dropdownList[index]
            }
            this.triggerEvent('dropdownBtn', SelectArr)
            this.setData({ dropdownList })
        },
    }
})