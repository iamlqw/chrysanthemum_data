<template>

  <el-container class="app_container_view">
    <!--<h1>菊花数据管理平台</h1>-->
    <el-header height="12%">
      <transition name="slideDown">
        <el-card class="header-box-card">
          <span style="color: #696969; font-size:40px">菊花数据管理平台</span>
          <el-dropdown id="headright">
          <span class="el-dropdown-link">
            欢迎 {{name}}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item><router-link to='/homepage/usersinfo'>用户信息</router-link></el-dropdown-item>
            <el-dropdown-item><el-buttom @click="layout()">注销</el-buttom></el-dropdown-item>
          </el-dropdown-menu>
          </el-dropdown>
        </el-card>
      </transition>
    </el-header>
    <el-main class="main-content">
      <transition name="fadeUp">
        <el-card class="main-box-card" v-show="showMain">
          <el-container>
            <el-header id="headleft">
              <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                <el-menu-item><router-link to='/homepage/data'>数据</router-link></el-menu-item>
              </el-menu>
            </el-header>
            <el-main id="main">
              <el-card><router-view></router-view></el-card>
            </el-main>
          </el-container>
        </el-card>
      </transition>
    </el-main>
    <el-card class="footer-card">
      <p> 菊花数据管理平台 </p>
      <p class="copyright">2018 Copyright 北京林业大学</p>
    </el-card>
  </el-container>

</template>

<script>
    export default {
      name: "HomePage",
      data () {
        return {
          name: '',
          showMain: false,
          isCollapse: false
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
          location.reload()
        }
      }
    }
</script>

<style scoped>
  #main	{
    padding:0;
  }
  #headleft{
    float: left;
  }
  .main-box-card{
    width: 100%;

  }
  #headright{
    float: right;
    margin-top: 10px;
  }
  .app_container_view{
    padding: 0px;
    height: 900px;
  }
  .el-header{
    background-color: #fff;
    text-align: center;
    color: #696969;
    font-size: 24px;
  }
  .el-footer{
    flex: 0 0 auto;
    padding: 0!important;
    /*background-color: #fff;*/
    /*color: #333;*/
    /*!*position: absolute;*!*/
    /*width: 100%;*/
    /*!*bottom: 1%;*!*/
    /*height: 300px;*/
    /*display: block;*/
    /*-webkit-box-flex: 1;*/
    /*-webkit-flex:1;*/
    /*flex:1;*/
  }
  .el-header{
    padding-top: 2px;
    padding-bottom: 50px;
    padding-left: 0px;
    padding-right: 0px;
  }
  .header-box-card{
    width: 100%;
  }

  .main-box-card{
    width: 100%;
  }
  .user_info {
    margin-bottom: 2px;
  }
  .navi_button{
    float: left;
  }
  .el-main{
    background-color: #eee;
    position: relative!important;
  }
  .main-box-card{
    position:absolute;
    min-height: 80%;
    max-width: 95%;
    left: 2.5%;
  }
  .footer-card{
    text-align: center;
    font-size: 0.7em;
    color: #8d8d8d;
  }
  a:link {color: black; text-decoration:none;}
  a:visited {color:black; text-decoration:none;}

</style>
