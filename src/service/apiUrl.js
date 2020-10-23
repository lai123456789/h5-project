import { Domain } from '../config/index'

// 判断用户是否登陆和关注
const userIsloginApi = () => `${Domain}/api/wx/user/web/is/login`

// 中秋节活动登陆
const midLoginApi = () => `${Domain}/api/wx/user/web/login`

// 中秋节抽奖
const midPrizeDrawApi = () => `${Domain}/api/prize/draw`

// 获取jsapi配置
const jsConfigApi = () => `${Domain}/wx/js/config`

// 获取作品列表
const photoListApi = () => `${Domain}/api/Index.php?action=photoList`

// 关键词搜索
const searchApi = () => `${Domain}/api/Index.php?action=search`
const jumpApi = () => `${Domain}/api/Index.php?action=getPhoto`
const getDateApi = () => `${Domain}/api/Index.php?action=getDate`

export {
  jsConfigApi,
  midLoginApi,
  midPrizeDrawApi,
  userIsloginApi,
  photoListApi,
  searchApi,
  jumpApi,
  getDateApi
};
