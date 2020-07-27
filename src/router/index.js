import Vue from 'vue'
import Router from 'vue-router'

// 中秋节活动
const Exchange = () => import('../views/MidAutumn/Exchange/index')
const MidHome = () => import('../views/MidAutumn/Home/index')
const Introduce = () => import('../views/MidAutumn/Introduce/index')
const PrizeDetails = () => import('../views/MidAutumn/PrizeDetails/index')
const MemberActivited = () => import('../views/MemberActivited/index')
const Error = () => import('../views/Error/index') // 404
Vue.use(Router)
const VueRouter = new Router({
  mode: 'history',//本地dist文件打开用hash模式才能显示页面  调用后端接口了发布服务器用history
  routes: [
    {
      path: '/', //默认首页 打开
      component: MidHome,
      children: [
        {
          path: '/memberActivited',
          name: 'MemberActivited',
          component: MemberActivited
        },
        {
          path: 'exchange',
          name: 'Exchange',
          component: Exchange
        },
        {
          path: '',
          name: 'Introduce',
          component: Introduce
        },
        {
          path: 'details',
          name: 'PrizeDetails',
          component: PrizeDetails
        }
      ]
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
