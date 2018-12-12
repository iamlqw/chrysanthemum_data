// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

//引入资源
import  VueResource  from 'vue-resource'
Vue.use(VueResource)

//引入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//import './assets/css/theme/index.css'
Vue.use(ElementUI)

//引入axios
import axios from 'axios';
  Vue.prototype.$axios = axios

//Base64解码
let Base64 = require('js-base64').Base64;
//创建组件
import HomePage from './components/HomePage.vue'
  import UsersInfo from './components/Users/UsersInfo.vue'
  import Login from './components/Users/Login.vue'
  import Data from './components/Data.vue'
    import OldDataList from './components/DataList/OldDataList.vue'
    import NewDataList from './components/DataList/NewDataList.vue'
//配置路由
const routes = [
  { path:'/homepage',
    component:HomePage,
    children:[
    {path:'usersinfo',component:UsersInfo},
    {
      path:'data',
      component:Data,
        children:[
          { path:'newdatalist',component:NewDataList,meta: {
              keepAlive: true // 需要被缓存
            }},
          { path:'olddatalist',component:OldDataList,meta: {
              keepAlive: true // 需要被缓存
            }}
        ]
    }
  ]
  },
  { path:'/login',component:Login}
]

//实例化
var router = new VueRouter({
  // mode:'history',
  routes
})

Vue.config.productionTip = false

/* eslint-disable no-new */
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next()
  }else{
    axios.get('/api/currentuser').then(res => {
      console.log('currentemail', res.data.data[0])
      if(res.data.data[0]===null){
        alert('请重新登录', {confirmButtonText: 'ok'})
        next({path: '/login'})
      }else{
        next()
      }
    })
  }
  //console.log('email', email)

})
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  methods:{
  }
})
