# card
**属性**
参数|类型|说明|必填|默认值|备注（默认样式）
---------|:-----|:----------------------------:|:---:|:--
cardImg|String|左侧图片的路径|否|''||
titleTxt|String|标题的文字|否|''||
titleTxtLine|Number|当前文字的行数|否|1|
titleTxtR|Array|第一行右侧的文字|否|''|
titleTxtRImg|String|第一行右侧的ICON|否|''|
contentTxt|Array|中间的文字传入|否|''|
footTxt|String|最后尾部的文字|否|''|
footTxtR|String|最后尾部的右侧文字|否|''|
footTxtObj|Array|最后的对象传入|否|[{name:'',num:''}]|
footPriceTxt|Array|传入的底部层叠式|否|[]|
footPriceImg|String|最后尾部右侧的图片|否|''|
card_box_all|Css|整个盒子的总样式|否|card_box|padding: 20rpx 30rpx;<br/>background: #fff;<br/>align-items: flex-start;<br/>font-size: 32rpx;<br/>border-bottom: 2rpx #f0f0f0 solid;
card_box_img|Css|左侧图片的样式|否|card_box_l|width: 255rpx;<br/>height: 160rpx;<br/>min-width: 255rpx;<br/>margin-right: 10rpx;
card_box_l_title|Css|标题的文字的总样式|否|card_box_r_t|max-width: 350rpx;<br/>line-height: 35rpx;<br/>font-size: 32rpx;<br/>color:#333;
card_box_r_title|Css|第一行右侧的文字的总样式|否|card_box_r_t_r|position: absolute;<br/>right: 0rpx;<br/>top: 0rpx;<br/>text-align: right;<br/>line-height: 26rpx;<br/>font-size: 24rpx;<br/>align-items: flex-end;
card_box_r_ico|Css|第一行右侧的ICON的总样式|否|card_box_r_t_r_icon|width: 30rpx;<br/>height: 30rpx;<br/>min-width: 30rpx;<br/>margin-right: 10rpx;
card_box_content|Css|中间的文字的总样式|否|card_box_r_m|margin: 10rpx 0rpx;<br/>font-size: .75em;<br/>min-height: 100rpx;<br/>color: #999;
card_box_foot|Css|最后一行文字的总盒子样式|否|card_box_r_b|width: 100%;<br/>font-size: .75em;<br/>color: #999;<br/>line-height: 35rpx;<br/>align-items: flex-end;
card_box_foot_r|Css|最后一行文字的总盒子右侧的样式|否|card_box_r_b_r|color: #e80012;



**使用**
```
//数据
data:{
    cardObj: {
       cardImg: '/menu1.png',
       titleTxt: '主标题主标题主标题主标题主标题主标题主标题主标题',
       footTxtR: '待付款'
   },
   cardObj1: {
       cardImg: '/menu1.png',
       titleTxt: '主标题主标题主标题主标题主标题主标题主标题主标题',
       footTxt: '下单时间:2018-06-14 14:59:40',
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
       },]
   },
   cardObj3: {
       cardImg: '/menu1.png',
       titleTxtRImg:'/menu1.png',
       titleTxt: '主标题主标题主标题主标题主标题主标题主标题主标题',
       titleTxtR: ['店铺认证'],
       contentTxt: ['浙江省杭州市萧山区利二花苑14幢8楼'],
       footTxt: '',
       footTxtR: '',
   },
   cardObj4: {
       cardImg: '/menu1.png',
       titleTxtRImg:'',
       titleTxt: '主标题主标题主标题主标题主标题主标题主标题主标题',
       titleTxtR: [],
       contentTxt: [],
       footTxt: '',
       footTxtR: '',
       footPriceImg:'/menu1.png'
   },
},
```

```
{
   "usingComponents": {
      "vwx-card": "/component/card/card"
   }
}
```

```
<vwx-card cardImg="{{cardObj.cardImg}}" titleTxt="{{cardObj.titleTxt}}" titleTxtR="{{cardObj.titleTxtR}}" contentTxt="{{['下单时间:2018-06-14 14:59:40','数量:1']}}" footTxt="{{'总价:'+'¥0.04'}}" footTxtR="{{cardObj.footTxtR}}"></vwx-card>

<vwx-card cardImg="{{cardObj1.cardImg}}" titleTxt="{{cardObj1.titleTxt}}" titleTxtLine="2" titleTxtR="{{['¥0.20','x1']}}" footTxt="{{cardObj1.footTxt}}" footTxtR="{{cardObj1.footTxtR}}" card_box_content="card_box_content1"></vwx-card>

<vwx-card cardImg="{{cardObj2.cardImg}}" titleTxt="{{cardObj2.titleTxt}}" titleTxtR="{{cardObj2.titleTxtR}}" contentTxt="{{cardObj2.contentTxt}}" footTxt="{{cardObj2.footTxt}}" footTxtR="{{cardObj2.footTxtR}}" titleTxtRImg="{{cardObj2.titleTxtRImg}}" footTxtObj="{{cardObj2.footTxtObj}}" card_box_img="card_box_img2" card_box_l_title="card_box_l_title2" card_box_r_title="card_box_r_title2"></vwx-card>

<vwx-card cardImg="{{cardObj3.cardImg}}" titleTxt="{{cardObj3.titleTxt}}" titleTxtR="{{cardObj3.titleTxtR}}" contentTxt="{{cardObj3.contentTxt}}" footTxt="{{cardObj3.footTxt}}" footTxtR="{{cardObj3.footTxtR}}" titleTxtRImg="{{cardObj3.titleTxtRImg}}" footTxtObj="{{cardObj3.footTxtObj}}" card_box_img="card_box_img2" card_box_l_title="card_box_l_title2" card_box_r_title="card_box_r_title3"></vwx-card>

<vwx-card cardImg="{{cardObj4.cardImg}}" titleTxt="{{cardObj4.titleTxt}}" titleTxtLine="2" titleTxtR="{{cardObj4.titleTxtR}}" contentTxt="{{cardObj4.contentTxt}}" footTxt="{{cardObj4.footTxt}}" footTxtR="{{cardObj4.footTxtR}}" titleTxtRImg="{{cardObj4.titleTxtRImg}}" footTxtObj="{{cardObj4.footTxtObj}}" footPriceImg="{{cardObj4.footPriceImg}}" footPriceTxt="{{['团长价：¥0.05','最低价：¥0.03']}}" card_box_l_title="card_box_l_title4" card_box_content="card_box_content4" card_box_foot_r="card_box_foot_r4"></vwx-card>

```

```
/*总的样式*/
.card_box_all{

}
/*图片的样式*/
.card_box_img{

}
/*上方左侧文字的样式*/
.card_box_l_title{

}
/*上方右侧文字的样式*/
.card_box_r_title{
    line-height: 36rpx !important;
}
/*上方右侧icon图片的样式*/
.card_box_r_ico{

}
/*内容的样式*/
.card_box_content{

}
/*最底层文字的样式*/
.card_box_foot{

}
/*最低层右侧文字样式*/
.card_box_foot_r{

}

/*实例用法*/
.card_box_all{
    margin-bottom: 50rpx;
    border-bottom: 2rpx #f0f0f0 solid;
}
.card_box_content1{
    line-height: 48rpx;
}
.card_box_l_title2{
    width: 320rpx;
}
.card_box_r_title2{
    color: #f87001;
}
.card_box_img2{
    width: 180rpx !important;
    height: 180rpx !important;
    min-width: 180rpx !important;
}
.card_box_r_title3{
    position: absolute;
    bottom: -30rpx;
    left: -370rpx;
    color: #f87001;
    line-height: 40rpx;
}
.card_box_content4{
    min-height: 20rpx !important;
}
.card_box_l_title4{
    max-width: 400rpx !important;
}
.card_box_foot_r4{
    width: 200rpx;
    min-width: 200rpx;
    height: 50rpx;
}
```