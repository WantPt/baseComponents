# dropdown
**属性**
参数|类型|说明|必填|默认值
:-----:|:----:|:----------|:-:|:--:
dropdownList|Array|循环的选择列表 |是|[]|--
baseConfig|Object|基础的配置 |否|{}|--

**dropdownList**
参数|类型|说明|必填|默认值
:-----:|:----:|:----------|:-:|:--:
iconImg|String|标题图标|否|''|--
title|String|标题名称|否|''|--
default|Boolean|当前项是否默认选中|否|false|--


**baseConfig**
参数|类型|说明|必填|默认值
:-----:|:----:|:----------|:-:|:--:
iconImg|String|一键配置所有的标题图标|否|''|--
multiple|Boolean|true:多选;false:单选|否|false|--
iconColor|String|icon的颜色|否|e80012|--

**事件**
事件名|说明|detail值
---|---|---
dropdownBtn| 点击返回当前选中项 | **{}** 单选值参数<br/>**[]** 多选值参数

**使用**
```
//数据
data:{
   list: [{
      name: '基本单选',
      params: {
          dropdownList: [{
              iconImg: '/menu1.png',
              title: '列表一',
              default: true,
          }, {
              iconImg: '',
              title: '列表二',
          }, {
              iconImg: '',
              title: '列表三',
          }, ],
          baseConfig: {
              iconColor: '09c3eb'
          }
      },
  },{
      name: '基本多选',
      params: {
          dropdownList: [{
              title: '列表一',
              default: true,
          }, {
              iconImg: '',
              title: '列表二',
          }, {
              iconImg: '',
              title: '列表三',
          }, ],
          baseConfig: {
              multiple: true,
              iconImg:'/menu1.png'
          }
      },
  },],
}
//点击列表事件
dropdownBtn(e) {
   console.log(e.detail)
},
```

```
{
   "usingComponents": {
      "vwx-dropdown": "/component/dropdown/dropdown"
   }
}
```

```
<vwx-dropdown dropdownList="{{item.params.dropdownList}}" binddropdownBtn="dropdownBtn" baseConfig="{{item.params.baseConfig}}"></vwx-dropdown>
```
