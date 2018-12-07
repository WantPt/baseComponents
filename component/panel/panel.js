// component/panel.js
Component({
    externalClasses: ['panel_box_t','panel_box_t_l_img','panel_box_t_r_img'],
    /**
     * 组件的属性列表
     */
    properties: {
        // 基础的配置
        baseClass:{
            type:Object,
            value:{
                mainTitleColor:'',
                subtitleColor:'',
                mainTitleImg:{
                    icon: '',
                    size: '',
                    color: '',
                },
                subtitleImg:{
                    icon: '',
                    size: '',
                    color: '',
                },
                slotShow:0,
                slotHeight:200
            }
        },
        panleData:{
            type:Object,
            value:{
                allData:'',
                mainData:'',
                subData:''
            },
        },
        panleTxt:{
            type:Array,
            value:[]
        },
    },

    /**
     * 组件的初始数据
     */
    data: {
        echoData:{}
    },

    /**
     * 组件的方法列表
     */
    methods: {
        panelBtn(e){
            let type = e.currentTarget.dataset.type;
            let echoData = {};
            echoData[type] = e.currentTarget.dataset.data;
            this.triggerEvent('panelBtn', echoData)
        },
    }
})