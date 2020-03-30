import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Router from 'vue-router'
import Vant from 'vant';
import 'vant/lib/index.css';


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//这块代码是多次当点击跳转路由时会报错的情况下添加
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const originalReplace = Router.prototype.replace
Router.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err)
}

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.$bus = new Vue()

Vue.use(Vant);
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
