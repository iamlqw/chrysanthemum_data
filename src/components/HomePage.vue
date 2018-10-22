<template>
  <el-container>
    <el-header id="headleft">
        <!--<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">-->
        <!--<el-menu-item index="1"><router-link to='/homepage'>首页</router-link></el-menu-item>-->
        <!--<el-menu-item index="2"><router-link to='/data'>数据</router-link></el-menu-item>-->
        <!--</el-menu>-->
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1"><router-link to='/homepage/usersinfo'>用户信息</router-link></el-menu-item>
          <el-menu-item index="2"><router-link to='/homepage/data'>数据</router-link></el-menu-item>
        </el-menu>
    </el-header>
    <el-main id="main">
      <el-card><router-view></router-view></el-card>
    </el-main>
  </el-container>
</template>

<script>
    export default {
      name: "HomePage",

    }
</script>

<style scoped>
  #main	{

    padding:0;
  }
  h1 {
    font-family: Georgia;
    font-size:30px;
  }

  #headleft{
    float: left;
  }
  .main-box-card{
    width: 100%;

  }
  #headright{
    float: right;
  }

</style>
