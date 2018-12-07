# modal


**属性**
参数|类型|说明|必填|默认值
------------|:-----------|:----------------------------|:---:|:--:
showTitle   |Boolean     |是否显示标题                   |否   |true
title       |String      |标题，`showTitle=true时，才需设置该属性`|否   |温馨提示
titleColor  |String      |标题颜色，`showTitle=true时，才需设置该属性`|否   |#999
contType    |Number      |内容类型：`0-基本，1-列表，2-富文本`|否   |0
contAlign   |String      |内容居中：`left、center、right`   |否   |left
content     |String/Array|内容<br>1、`contType=0`，`'提示内容'`<br>2、`contType=1`，`[{ label: '标签/序号/……', text: '列表项内容', color: '列表项文字颜色' }]`     |是   |''/[]
btnType     |Number      |按钮类型：`0-正常，1-列表`         |否   |0
confirmText |String      |确认按钮文字，`btnType=0时，才需设置该属性`|否    |确定
showCancel  |Boolean     |是否显示取消按钮，`btnType=0时，才需设置该属性`|否    |true
cancelText  |String      |取消按钮文字,`btnType=0，且showCancel为true时，才需设置该属性`|否    |取消
btnList     |Array       |按钮列表，`btnType=1时，才需设置该属性`<br>`[{ bgColor: '#fff', bdColor: '#e60012', color: '#e60012', text: '按钮' }]`<br>`bgColor`：背景颜色，默认为'#fff'<br>`bdColor`：边框颜色，默认为'#333'<br>`color`：字体颜色，默认为'#333'<br>`text`：按钮文本，无默认值|否    |[]
success     |Function    |确定回调函数                   |否     |hideModal
fail        |Function    |取消回调函数                   |否     |hideModal
complete    |Function    |必执行回掉函数                 |否     |function(){}



**事件** 
事件名|说明|detail值
---|---|---



**使用**
```
{
   "usingComponents": {
      "vwx-modal": "/component/modal/modal"
   }
}
```

```
<vwx-modal id="modal"></vwx-modal>
```

```
// 显示通用模态框
A.showModal({
	content: 'demo',
	showCancel: false
})
// 显示基本类模态框
A.showBaseModal('demo', function(){ console.log('success!') }, function(){ console.log('fail!'), function(){ console.log('complete!') } })
// 显示提示类模态框
A.showTipModal('demo', function(){ console.log('success!'), function(){ console.log('complete!') })
// 显示特殊类模态框
A.showDiyModal('demo', [{ bgColor: '#fff', bdColor: '#e60012', color: '#e60012', text: '按钮' }], function(){ console.log('success!'), function(){ console.log('complete!') })
// 隐藏模态框
A.hideModal()
```