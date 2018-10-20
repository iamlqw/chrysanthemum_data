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
Vue.use(ElementUI)

//引入axios
import axios from 'axios';
  Vue.prototype.$axios = axios
//创建组件
import HomePage from './components/HomePage.vue'
  import UsersInfo from './components/Users/UsersInfo.vue'
import Login from './components/Users/Login.vue'
import Data from './components/Data.vue'
  import NewIndexTable from './components/IndexTable/NewIndexTable.vue'
  import OldIndexTable from './components/IndexTable/OldIndexTable.vue'
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
        { path:'newindextable',component:NewIndexTable},
        { path:'oldindextable',component:OldIndexTable}
      ]
    }
  ]
  },
  { path:'/login',component:Login}
]

//实例化
var router = new VueRouter({
  routes
})

Vue.config.productionTip = false

/* eslint-disable no-new */
router.beforeEach((to, from, next) => {
  let info = ''
  var email = []
  if (to.path === '/login' || to.path === '/index') {
    next()
    return
  }
  axios.get('/api/currentuser').then(res => {
    console.log('currentemail', res.data.data[0])
    if(res.data.data[0]===null){
      alert('请重新登录', {confirmButtonText: 'ok'})
      next({path: '/login'})
    }
  //   else {
  //     info = res.data.data[0]
  //     email.push({
  //       'email': info
  //     })
  //   return axios.post('/api/currentuserinfo',email[0]).then(res => {
  //     console.log('currentinfo', res)
  //     console.log('e')
  //     next()
  //   })
  //   }
    next()
  })
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
