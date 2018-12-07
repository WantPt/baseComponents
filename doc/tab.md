# tab
**属性**
参数|类型|说明|必填|默认值
---|:--|:--|:--:|:--:
tabs|Array|标签数组 <br> `['a','b','c']`  <br> `[{value:'a'},{value:'b'},{value:'c'}]`<br>value为tab名称 |Array|是|--
actIndex|Number|默认位置|否|0


**事件** 
事件名|说明|detail值
---|---|---
myselect| 绑定用户点击触发事件 | **value** tabs触发的列表项值 <br> **index** 第几列 0下标开始

**使用**
```
{
   "usingComponents": {
      "vwx-tab": "/component/tabs/tab"
   }
}
```

```
//直接tab名数组
tapTabs: function(evt) {
    console.log(evt.detail.value)
}
//使用tab对象值
tapTabs2: function(evt) {
    console.log(evt.detail.value)
}
```

```
<vwx-tab tabs="{{['a','b','c']}}"  bindmyselect="tapTabs"></vwx-tab>
<vwx-tab tabs="{{[{value:'a',},{value:'b'}]}}"  bindmyselect="tapTabs2"></vwx-tab>
```