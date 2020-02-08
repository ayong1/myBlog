// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
// import VueResource from 'vue-resource'
import App from './App'
import Router from './routes'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/global.css'


Vue.config.productionTip = false
Vue.use(VueRouter)
// Vue.use(VueResource)
Vue.prototype.$http=axios
Vue.use(ElementUI)

//路由配置
const router = new VueRouter({
  mode:'history',
  base:__dirname,
  routes:Router
})

//挂载路由导航守卫
// router.beforeEach((to, from, next) => {
//   if(to.path == '/admin'){
//     return next();
//   }else{
//     const tokenStr = sessionStorage.getItem('token');
//     if(!tokenStr){
//       return next('/admin');
//     }else{
//       next();
//     }
//   }
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router
})
