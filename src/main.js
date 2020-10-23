import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import 'animate.css'
import 'mint-ui/lib/style.css'
import LinkageBase from './components/linkageBase';
import ShowScan from './components/ShowScan/index'
import {Button,Toast,Popup,List} from 'vant'  //需要什么组件直接在这里添加组件名称 全局引入，如需按需引入可在页面引入
Vue.component(Button.name, Button)  //注册使用  如需按需引入可在页面components:{[Button.name, Button]}
Vue.component(Toast.name, Toast);
Vue.component(Popup.name, Popup);
Vue.component(List.name, List);
Vue.use(ShowScan);
Vue.use(LinkageBase);
Object.assign(Vue.prototype, {
  $toast: Toast
});
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
