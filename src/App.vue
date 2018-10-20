<template>
  <el-container class="app_container_view">
    <!--<h1>菊花数据管理平台</h1>-->
    <el-header height="10%">
      <transition name="slideDown">
        <el-card class="header-box-card">
          <span style="color: #696969; font-size:30px">菊花数据管理平台</span>
          <!--<el-dropdown style="float: right"  class="user_info">-->
            <!--<el-button type="text"  style="font-size: 16px;color: #518DD6">-->
              <!--<i class="fa fa-user-o" aria-hidden="true"></i>-->
              <!--欢迎您！{{ msg[0][0].name }}<i class="el-icon-arrow-down el-icon&#45;&#45;right"></i>-->
            <!--</el-button>-->
            <!--<el-dropdown-menu slot="dropdown">-->
              <!--<el-dropdown-item><el-button type="text" @click="info">个人信息</el-button></el-dropdown-item>-->
              <!--<el-dropdown-item><el-button type="text" @click="logout">退出</el-button></el-dropdown-item>-->
            <!--</el-dropdown-menu>-->
          <!--</el-dropdown>-->
        </el-card>
      </transition>
    </el-header>
    <el-main class="main-content">
      <transition name="fadeUp">
        <el-card class="main-box-card" v-show="showMain"><router-view></router-view></el-card>
      </transition>
    </el-main>
    <el-card class="footer-card">
      <p> 菊花数据管理平台 </p>
      <p class="copyright">2018 Copyright 北京林业大学</p>
    </el-card>
  </el-container>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    created: function () {

    },
    data () {
      return {
        showMain: false,
        isCollapse: false
      }
    },
    computed: {
      ...mapGetters({
        msg: 'GET_MSG'
      })
    },
    mounted: function () {
      this.showMain = true
    },
    methods: {
    }
  }
</script>

<style>
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

</style>
