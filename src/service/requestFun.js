import Vue from "vue";
import fetch from './index';
import packagePromise from './packagePromise'
import {
  midLoginApi, midPrizeDrawApi, userIsloginApi,
  photoListApi,searchApi,jumpApi,getDateApi
} from './apiUrl';
import { APP_ID } from '../config'
import {getUrlExCode} from '../utils/urlUtil'
import Validate from './Validate';
import { aesEncrypt } from "../utils/dtAes";
import isEmpty from "../utils/isEmpty";
import { send } from './formdata';

/* ==== 用户http请求提示 =====  */
// const SuccessTips = (con, callbck, type = 'success') => {
//   Vue.prototype.$message({
//     showClose: true,
//     message: con,
//     duration: 1500,
//     type: type
//   });
//   setTimeout(() => {
//     callbck && callbck()
//   }, 1400);
// };

// 判断用户是否登陆和关注
const userIsloginApiF = (data = {}, fun) => packagePromise((resolve, reject) => {
  // debugger
  fetch({
    url: userIsloginApi(),
    method: 'GET',
    data: {}
  }, fun)
    .then(msg => {
      console.log(msg)
      // debugger
      resolve(msg)
    })
    .catch(err => reject(err))
})
// 中秋节登录
const midLoginApiF = (data, fun) => packagePromise((resolve, reject) => {
  fetch({
    url: midLoginApi(),
    method: 'POST',
    data
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 中秋节抽奖
const midPrizeDrawApiF = (data, fun) => packagePromise((resolve, reject) => {
  fetch({
    url: midPrizeDrawApi(),
    method: 'POST',
    data
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})
// 获取微信code
const getWeCodeA = () => {
  let rediretUrl = getUrlExCode(location.href);
  let appid = APP_ID
  let REDIRECT_URI = encodeURIComponent(rediretUrl)
  // let REDIRECT_URI = 'http://testweixin.51vip.biz/mid'
  let realUrl = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect`
  location.replace(realUrl)
}

// 获取作品列表
const photoListApiF = (data,fun) => packagePromise((resolve, reject) => {
  fetch({
    url: photoListApi(),
    method: 'POST',
    header: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    data
  })
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))

})

// 关键词搜索
const searchApiF = (data,fun) => packagePromise((resolve, reject) => {
  fetch({
    url: searchApi(),
    method: 'POST',
    header: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    data
  })
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 上一页下一页
const jumpApiF = (data,fun) => packagePromise((resolve, reject) => {
  fetch({
    url: jumpApi(),
    method: 'POST',
    header: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    data
  })
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 获取活动日期
const getDateApiF = (data,fun) => packagePromise((resolve, reject) => {
  fetch({
    url: getDateApi(),
    method: 'POST',
    header: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    data
  })
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

export {
  // SuccessTips,
  getWeCodeA,
  midLoginApiF,
  midPrizeDrawApiF,
  userIsloginApiF,
  photoListApiF,
  searchApiF,
  jumpApiF,
  getDateApiF
}
