//app.js
import { vwx } from '/vwx/index.js'
import config from '/config/config.js'
import exta from '/common/exta';
import { DF, STATE } from '/config/define.js'
import store from '/udb/store/index.js'
import DB from '/udb/DB/index.js'
import webservice from '/service/webservice.js'
// 注册App，vwx初始化数据
App(vwx({
   config, exta, webservice, store, DB, DF, STATE,
   onLaunch: function () {
      //授权初始化
   },
   onShow: function () {
   }
}));