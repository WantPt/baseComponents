# button


**属性**
参数|类型|说明|必填|默认值
------------|:-----------|:----------------------------|:---:|:--:
type        |String      |按钮类型<br>1、`l`- 大按钮，通栏按钮<br>2、`m`- 中按钮，`默认`<br>3、`ms`- 中小按钮<br>4、`s`- 小按钮<br>5、`mi`- 特小按钮<br>6、`sku`- SKU按钮<br>7、`kw`- 关键字按钮<br>|否   |m
text        |String      |文本						   |是   |
theme       |String      |主题，预设主题样式，例如：bg-r1：等价于color: #fff; background-color: #e60012; border: 1rpx solid #e60012<br>注：`若同时设置theme与color、bgColor、bdColor，后者有效`|否   |bg-r1
color       |String      |字体颜色   				   |否   |
bgColor     |String      |背景颜色					   |否   |
bdColor     |String      |边框颜色					   |否   |
ldColor		|String		 |加载中图标颜色				   |否	 |字体颜色color
disabled    |Boolean     |禁用，`默认：false`			   |否   |false
loading		|Boolean	 |是否需要加载中效果，`默认：false`|否	 |false



**事件** 
事件名 | 说明 | detail值
---------|:-----------|:--:
tap-event|按钮点击事件  |


**使用**
```
{
   "usingComponents": {
      "vwx-button": "/component/button/button"
   }
}
```

```
<vwx-button id="vwx-button" bind:tap-event="tapEvent"></vwx-button>
```

```
// 加载结束方法
this.selectComponent('#vwx-button').hideLoading();
```