# select
**属性**
参数|类型|说明|必填|默认值
:-----:|:----:|:----------|:-:|:--:
pickObj|Object|传入的配置项 |是|{}|--

**事件** 
事件名|说明|detail值
------|------------|---
change| value改变时 | **val** 当前选中的文字 <br> **index** 第几列 0下标开始
columnchange| 多选时的单列事件 | **val** 当前选中的文字 <br> **index** 第几列 0下标开始

**pickObj** 
参数|类型|说明|必填|默认值|备注
:---:|:--:|:--|:--:|:--:|:--|
mode|String|当前的选择类型 |否|selector|**selector** 基本单选 <br> **time** 时间选择器 <br> **date** 日期选择器 <br> **region** 城市选择器 <br> **multiSelector** 多列选择器|--
range|Array|需要展示的循环的数据数组 |否|[]|if **mode==multiSelector**<br/>需传二维数组|--
value|Number|当前默认选中的值的下标 |否|0||--
disabled|Boolean|是否禁用 |否|false||--
start|String|默认开始的时间 |否||**mode==time** <br>格式 hh:mm<br> **mode==date** <br>格式 YYYY-MM-DD|--
end|String|默认结束的时间 |否||**mode==time** <br>格式 hh:mm<br> **mode==date** <br>格式 YYYY-MM-DD|--
**使用**
```
//数据
data:{
   list: [{
          name: '基本单选',
          blocks: [
              { text: '基本单选', params: { change: 'onlyChange', range: ['单选1', '单选2', '单选3'] } },
          ]
      },
      {
          name: 'mode类型的选择器',
          blocks: [
              { text: '时间选择器', params: { mode:'time',change:'onlyChange' } },
              { text: '日期选择器', params: { mode:'date',change:'onlyChange' } },
              { text: '省市区选择器', params: {  mode:'region',change:'onlyChange' } }
          ]
      },
      {
          name: '基本多选',
          blocks: [
              { text: '自定义选择器', params: { mode: 'multiSelector',range:[['第一列1','第一列2','第一列3'],['第二列1','第二列2','第二列3']],change:'onlyChange',colchange:'moreChange' } },
          ]
      }
  ],
}
//点击列表事件
onlyChange(e){
    console.log(e.detail)
},
moreChange(e){
    console.log(e.detail)
},
```

```
{
   "usingComponents": {
      "vwx-select": "/component/select/select"
   }
}
```

```
<vwx-select pickObj="{{subItem.params}}" bind:change="{{subItem.params.change}}" bindcolumnchange="{{subItem.params.colchange}}">
</vwx-select>
```
