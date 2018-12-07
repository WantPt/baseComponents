# select
**属性**
参数|类型|说明|必填|默认值
:-----:|:----:|:----------|:-:|:--:
listArr|Array|传入的配置项 |是|[]|--
search |Boolean|是否开启搜索 |否|true|--
keyArr |Array|传入的索引值 |是|[]|--
baseconfig |Object|基础的配置对象 |否|{}|--

**listArr**
参数|类型|说明|必填|默认值
:-----:|:----:|:----------|:-:|:--:
maintitle|String|主标题(默认展示副标题) |否|''|--
subtitle|String|副标题(悬浮的索引值,字母或数字组成) |是|''|--
arr|Array|当前索引下的值 |否|[]|--

**baseconfig**
参数|类型|说明|必填|默认值
:-----:|:----:|:----------|:-:|:--:
titleH|String|标题的高度 |否|45|--
conH  |String|内容的高度 |否|45|--
fiexdH|String|悬浮框的高度 |否|25|--

**事件**
事件名|说明|detail值
---|---|---
getData| 绑定用户点击触发事件 | **name** 当前点击的文字选项
**使用**
```
//数据
data:{
   listArr: [
       {maintitle:'主标题1',subtitle:'1',arr:['一的内容1','一的内容1','一的内容1','一的内容1','一的内容1']},
       {maintitle:'主标题2',subtitle:'2',arr:['二的内容2','二的内容2','二的内容2','二的内容2','二的内容2']},
       {maintitle:'主标题3',subtitle:'3',arr:['三的内容3','三的内容3','三的内容3','三的内容3','三的内容3']},
       {maintitle:'主标题4',subtitle:'4',arr:['四的内容4','四的内容4','四的内容4','四的内容4','四的内容4']},
       {maintitle:'主标题5',subtitle:'5',arr:['五的内容5','五的内容5','五的内容5','五的内容5','五的内容5']},
       {maintitle:'主标题6',subtitle:'6',arr:['六的内容6','六的内容6','六的内容6','六的内容6','六的内容6']},
       {maintitle:'主标题7',subtitle:'7',arr:['七的内容7','七的内容7','七的内容7','七的内容7','七的内容7']},
   ],
   inputShowed: false,
   inputVal: ""
}
//点击列表事件
getData(e){
    console.log(e.detail.name)
},
```

```
{
    "disableScroll":true,
    "usingComponents":
      {
          "compage": "/vwx/component/template/",
          "vwx-ilist": "/component/indexlist/indexlist"
      }
}

```

```
<vwx-ilist listArr="{{listArr}}" bindgetData="getData" keyArr="{{keyArr}}"></vwx-ilist>
```
