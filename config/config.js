
const config = {
  get v() {
    return "3.4.0";
  },
  get host() {
    return "https://www.pintuanqu.cn";
  },
  get imgUrl() {
    return this.host + "/Public/WeChatApps/image/";
  },
  // 请求数据配置 application/x-www-form-urlencoded
  req: {
     header: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
     data: {
        unionid: 'owI24wgpPROy05XD2TPGCE7puuG0'
     }
  },
  // 全局默认页面地址
  dPage: {
    index: "/pages/index"
  },
  // 全局常用接口
  uApi: {
    upImage: "/upfile/image"
  },
  dApi: {
     "/WeChatAppsCs/Member/index": true
  }
}
module.exports = config