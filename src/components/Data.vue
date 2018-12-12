<template>
  <div id="data">
    <!--<div id="middle">-->
      <!--<el-input v-model="form.cultivar_name" placeholder="请输入品种名" style="width:500px; height:60px"></el-input>-->
      <!--<el-button type="primary"  icon="el-icon-search" @click="search()"></el-button>-->
    <!--</div>-->
    <div>
      <template>
        <el-tabs tab-position="top" type="border-card">
          <el-tab-pane label="仪器拍摄数据" name="first"><v-new></v-new></el-tab-pane>
          <el-tab-pane label="人工拍摄数据" name="second"><v-old></v-old></el-tab-pane>
        </el-tabs>
      </template>
    </div>
    <br>
    <div>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
      <!--<el-card><v-olddatalist :result="result"></v-olddatalist></el-card>-->
    </div>
  </div>
</template>

<script>
  // import VueEvent from '../model/VueEvent.js'
  import OldindexTable from './IndexTable/OldIndexTable'
  import NewindexTable from './IndexTable/NewIndexTable'
  import OldDataList from './DataList/OldDataList.vue'
    export default {
      name: "Data",
      data () {
        return {
          form: {
            email:'',
            cultivar_name: ''
          },
          result:[]
        }
      },
      components:{
          'v-olddatalist':OldDataList,
          'v-old':OldindexTable,
          'v-new':NewindexTable
      },
      methods:{
        // search(){
        //   // 获取当前用户名
        //   this.$axios.get('/api/currentuser').then(res => {
        //     console.log('currentemail', res.data.data[0])
        //       this.email= res.data.data[0]
        //   })
        //   console.log(this.form)
        //   /*旧数据输入框检索*/
        //   this.$axios.post(
        //     '/api/getcharacterbyname',
        //     this.form
        //   ).then(res => {
        //     console.log('result', res.data.data)
        //     // this.result=res.data.data
        //     VueEvent.$emit('data-to-oldlist',res.data.data)//把检索到的数据发给表格路由显示
        //   })
        //   /*新数据输入框检索*/
        //   this.$axios({
        //     method: 'post',
        //     url: '/api/Instrument/getOriginInfoByName',
        //     data:{
        //       cultivar_name:this.form.cultivar_name
        //     }
        //   }
        //   ).then(res => {
        //     console.log('newresult', res.data.data)
        //    VueEvent.$emit('data-to-newlist',res.data.data)
        //   })
        // }
      },
      mounted:function () {
        //缺省跳转到旧数据
        if(this.$route.path=='/homepage/data'){
          this.$router.push({path:'data/olddatalist'})
        }
      }
    }
</script>

<style scoped>
  *{
    font-size: 30px;
  }
  #data{
    width: 100%;
    height: 100%;
    text-align: left;
    background: white;
  }
  h3{
    margin:10px 5px ;
  }
  #middle{
    background: white;
    padding: 20px;
    margin-left:30%;
  }
  .el-tab-pane__label{
    font-size: 30px !important;
  }
</style>
