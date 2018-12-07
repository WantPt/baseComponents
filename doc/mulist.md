# mulist
**属性**
参数|类型|说明|必填|默认值
---|:--|:--|:--:|:--:
menus|Array|对象数组 title,des |Array|是|--


**事件** 
事件名|说明|detail值
---|---|---
myselect| 绑定用户点击触发事件 | **value** 触发的列表项值 <br> **index** 第几列 0下标开始

**使用**
```
//数据
data:{
   menus:[{title:"ABC",des:"右提示"}]
}
//点击列表事件
tapMenu: function(evt) {
    console.log(evt.detail.value)
}
```

```
{
   "usingComponents": {
      "vwx-mulist": "/component/menu/mulist"
   }
}
```

```
<vwx-mulist menus="{{menus}}" bindmyselect="tapMenu"></vwx-mulist>
```
