import Vue from 'vue'
import Router from 'vue-router'
// 中秋节活动

const Error = () => import('../views/Error/index') // 404
//H5接单页面
const Home = () => import('../views/Home/index')
//开始
const titlePage = () => import('../views/titlePage/index')
const titlePageNext = () => import('../views/titlePageNext/index')
const opusList = () => import('../views/opusList/index')
Vue.use(Router)
const VueRouter = new Router({
  mode: 'hash',//本地dist文件打开用hash模式才能显示页面  调用后端接口了发布服务器用history
  routes: [
    {
      path: '/', //默认首页 打开
      component: Home,
      children: [
        {
          path: '/Home',
          name: 'Home',
          component: Home
        }
      ]
    },
    {
      path: '/error',
      name: 'error',
      component: Error
    },
//这里开始
    {
      path: '/titlePage',
      name: 'titlePage',
      component: titlePage
    },
    {
      path: '/titlePageNext',
      name: 'titlePageNext',
      component: titlePageNext
    },
    {
      path: '/opusList',
      name: 'opusList',
      component: opusList
    },

  ]
})

export default VueRouter
const DOC_TITLE = {
  '/':"首页",
  'titlePage': '封面',
  'titlePageNext':"插画前言",
  'opusList':"“鹏城四十载 丹青映初心”作品展"

}
VueRouter.afterEach((to, from) => {
  let { name } = to
  document.title = DOC_TITLE[name] || '首页'
  console.log(to, from);
  console.log("标题主页")
})
