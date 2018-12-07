Component({
    externalClasses: [
        'card_box_all',
        'card_box_img',
        'card_box_l_title',
        'card_box_r_title',
        'card_box_r_ico',
        'card_box_content',
        'card_box_foot',
        'card_box_foot_r',
    ],
    properties: {
        // 图片的路径
        allCardObj: {
            type: Object,
            value: {
                cardImg: '', //左侧图片的路径
                titleTxt: '', // 头部的文字
                titleTxtLine: 1, // 单行还是双行省略号
                titleTxtR: '', // 第一行右侧的文字
                titleTxtRImg: '', // 第一行右侧的ICON
                contentTxt: '',// 中间的文字传入
                footTxt: '',// 最后尾部的文字
                footTxtR: '',// 最后尾部的右侧文字
                footTxtObj: [{// 最后的对象传入
                    name: '',
                    num: '',
                }],
                footPriceTxt:[],// 传入的底部
                footPriceImg:''//底部的右侧图片
            }
        },
    },

    data: {
        
    },

    methods: {

    }
})