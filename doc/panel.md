# panel
**属性**
参数|类型|说明|必填|默认值|备注
---------|:-----|:----------------------------:|:---:|:--|
panel_box_t|String|当前整个panel的Class样式名|否|panel_box_t_defult|height:80rpx;<br/>padding:20rpx 30rpx;<br/>position: relative;<br/>border-bottom: 2rpx #aaa solid;<br/>background: #fff;<br/>line-height: 40rpx;<br/>width: 100%;||
panel_box_t_l_img|String|主标题图片的Class样式名|否|iconImg|height:40rpx;<br/>width:40rpx<br/>margin-right:10rpx;||
panel_box_t_r_img|String|副标题图片的Class样式名|否|iconImg|height:40rpx;<br/>width:40rpx<br/>||
|baseClass|Object|基础的样式配置|否|mainTitleColor: '',<br/>subtitleColor: ''<br/>slotShow:0,<br/>slotHeight:200<br/>mainTitleImg:''<br/>subtitleImg:{<br/>icon: '',<br/>size: 40,<br/>color: ''<br/>},|//主标题的颜色<br/>//副标题的颜色,<br/>//固定高度0不启用,<br/>//固定高度的高<br/>//主标题图片的路径<br/>//副标题的icon<br/>//icon的名称<br/>//icon的大小<br/>//icon的颜色<br/><br/>|
panleData|Object|所有的数据携带|否|allData:'',<br/>mainData:'',<br/>subData:''<br/>|//总的数据携带<br/>//主标题的内容携带<br/>//副标题的内容携带<br/>||
panleTxt|Array|主标题及副标题|否|[]|//下标0为主标题<br/>//下标1为副标题|
panelBtn|function|点击事件|否|even|allData为总的数据绑定的返回值<br/>mainData为主标题的数据绑定的返回值<br/>subData为副标题的数据绑定的返回值<br/>(可根据返回值判断点击位置)

**使用**
```
//数据
data:{
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
//点击列表事件
panelBtn(e){
    console.log(e.detail)
},
```

```
{
   "usingComponents": {
      "vwx-panel": "/component/panel/panel"
   }
}
```

```
<vwx-panel panleTxt="{{paneObj.panleTxt}}" baseClass="{{paneObj.baseClass}}" bind:panelBtn="panelBtn" panleData="{{paneObj.panleData}}"></vwx-panel>
```