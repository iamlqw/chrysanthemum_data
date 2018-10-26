<template>
  <div id="app">
    <router-view></router-view>
  </div>
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
