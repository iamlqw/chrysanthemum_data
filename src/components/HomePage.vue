<template>
<div id="homepage">

  <el-container class="app_container_view" direction="vertical">
    <!--<h1>菊花数据管理平台</h1>-->
    <el-header height="12%">
      <el-card class="header-box-card">
          <!--<img src="../assets/img/页眉.jpg" style="width:100px;float: left">-->
          <img src="../assets/img/school.jpg" style="width:100px;float: left;">
          <span id="title">菊花数据管理平台</span>
          <div id="search">
            <el-input v-model="form.cultivar_name" placeholder="请输入品种名" style="width:500px; height:60px"></el-input>
            <el-button type="primary"  icon="el-icon-search" @click="search()"></el-button>
          </div>
          <!--<p style="color: #243b06; font:40px '华文行楷'">Beijing Forestry University chrysanthemum data management platform</p>-->
          <el-dropdown id="headright">
          <span style="color: #243b06; font-size:30px;">
            欢迎 {{name}}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item><router-link to='/homepage/usersinfo'>用户信息</router-link></el-dropdown-item>
            <el-dropdown-item>
              <el-popover
                placement="top"
                width="160"
                v-model="visible2">
                <p>确认注销？</p>
                <div style="text-align: right; margin: 0">
                  <el-button size="mini" type="text" @click="visible2 = false">取消</el-button>
                  <el-button type="primary" size="mini" @click="layout()">确定</el-button>
                </div>
                  <el-buttom slot="reference">注销</el-buttom>
              </el-popover>
            </el-dropdown-item>
          </el-dropdown-menu>
          </el-dropdown>
        </el-card>
    </el-header>

    <el-main height="85%" class="main-content">
      <transition name="fadeUp">
        <el-card class="main-box-card" v-show="showMain">
          <el-container>
            <el-main id="main">
              <router-view></router-view>
            </el-main>
          </el-container>
        </el-card>
      </transition>
    </el-main>
    <el-footer height="10%">
    <el-card class="footer-card">
      <p> 菊花数据管理平台 </p>
      <p class="copyright">2018 Copyright 北京林业大学</p>
    </el-card>
    </el-footer>
  </el-container>
</div>
</template>

<script>
  import VueEvent from '../model/VueEvent.js'
    export default {
      name: "HomePage",
      data () {
        return {
          name: '',
          visible2: false,//注销弹窗
          showMain: false,
          isCollapse: false,
          form: {
            email:'',
            cultivar_name: ''
          },
        }
      },
      mounted: function () {
        var email = []
        this.$axios.get('/api/currentuser').then(res => {
          console.log('currentemail', res.data.data[0])
          email.push({
            'email': res.data.data[0]
          })
          return this.$axios.post('/api/currentuserinfo',email[0]).then(res => {
            console.log('currentinfo', res)
            console.log('e')
            this.name = res.data.data[0].name
          })
        })
        this.showMain = true
      },
      methods:{
        layout(){
          this.$axios.post('/api/logout').then(res => {
            console.log('lagout', res)
          })
          this.visible2 = false
          location.reload()
        },
        search(){
          // 获取当前用户名
          this.$axios.get('/api/currentuser').then(res => {
            console.log('currentemail', res.data.data[0])
            this.form.email= res.data.data[0]
          })
          console.log(this.form.cultivar_name)
          /*旧数据输入框检索*/
          this.$axios.post(
            '/api/getcharacterbyname',
            this.form
          ).then(res => {
            console.log('result', res.data.data)
            // this.result=res.data.data
            VueEvent.$emit('data-to-oldlist',res.data.data)//把检索到的数据发给表格路由显示
          })
          /*新数据输入框检索*/
          this.$axios({
              method: 'post',
              url: '/api/Instrument/getOriginInfoByName',
              data:{
                cultivar_name:this.form.cultivar_name
              }
            }
          ).then(res => {
            console.log('newresult', res.data.data)
            VueEvent.$emit('data-to-newlist',res.data.data)
          })
        }
      },
      // mounted() {
      //   if(this.$route.path=='/homepage'){
      //     this.$router.push({path:'homepage/data'})
      //   }
      // }
    }
</script>

<style scoped>
  #homepage{
  /*div容器*/
    position:absolute;
    left:0;
    top:0;
    width:100%;
    height:100%;
    background: white;
  }
  .app_container_view{
    /*总体样式*/
    padding: 0px;
    height: 100%;
  }
  /*头部*/
  .el-header{
    color: #696969;
    font-size: 24px;
    width: 100%;
    margin: 0 auto;
  }
  .header-box-card{
    margin: 0 auto;
    padding: 0;
    background: url(../../static/backgrounds/页眉.jpg) no-repeat center center;
    border-bottom-color: #ffffff;
    height: 95%;
    width: 100%;
  }
  #title{
    color: #243b06;
    float: left;
    font:45px '微软雅黑';
    margin-top: 0.5%;
  }
  #search{
    float: left;
    margin-left: 15%;
    margin-top: 1.2%;
  }
  #headright{
     float: right;
     margin-top: 1%;
   }
  /*主体*/
  .el-main{
     background-color: white;
     padding: 0;
     position: relative!important;
     width: 99%;
     margin: 0 auto;
  }
  .main-box-card{
      position:absolute;
      width: 100%;
      margin: 0;
      border: 0;
  }
  #main	{
     padding:0;
     background: white;
  }
  .main-content{
      padding: 0;
  }
  /*底部*/
  .el-footer{
    flex: 0 0 auto;
    padding: 0!important;
    width: 98%;
    margin: 0 auto;
  }
  .navi_button{
    float: left;
  }
  .footer-card{

    background: #243b06;
    text-align: center;
    font-size: 0.7em;
    color: white;
  }
  a:link {color: black; text-decoration:none;}
  a:visited {color:black; text-decoration:none;}
</style>
