import Vue from 'vue'
import Router from 'vue-router'
// 中秋节活动
const MemberActivited = () => import('../views/MemberActivited/index')
const Error = () => import('../views/Error/index') // 404
//H5接单页面
const Home = () => import('../views/Home/index')
const jifenpaihang = () => import('../views/jifenpaihang/index')
Vue.use(Router)
const VueRouter = new Router({
  mode: 'history',//本地dist文件打开用hash模式才能显示页面  调用后端接口了发布服务器用history
  routes: [
    {
      path: '/', //默认首页 打开
      component: Home,
      children: [
        {
          path: '/memberActivited',
          name: 'MemberActivited',
          component: MemberActivited
        },
        {
          path: '/Home',
          name: 'Home',
          component: Home
        }
      ]
    },
    {
      path: '/jifenpaihang',
      name: 'jifenpaihang',
      component: jifenpaihang
    },
    {
      path: '/error',
      name: 'error',
      component: Error
    }



  ]
})

export default VueRouter

// VueRouter.beforeEach((to, from, next) => {
//   console.log(to, from, next)
//   // next()
// })
