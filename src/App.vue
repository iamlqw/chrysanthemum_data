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
  /*全局样式*/
  .el-form-item__label,.el-checkbox__label{
    font-size: 22px;
  }
  .el-tabs__item{
    font-size: 30px;
  }
</style>
