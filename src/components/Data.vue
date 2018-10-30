<template>
  <div id="data">
    <div id="middle">
      <el-input v-model="form.cultivar_name" placeholder="请输入内容" style="width:500px; height:50px"></el-input>
      <el-button type="primary" icon="el-icon-search" @click="search()">搜索</el-button>
    </div>
    <div>
      <h3>按指标模糊检索:</h3>
      <!--<router-link to='/homepage/data/newindextable'>新数据</router-link>-->
      <!--<router-link to='/homepage/data/oldindextable'>旧数据</router-link>-->
      <!--<router-link to='/data/newindextable'><el-button type="text">新数据</el-button></router-link>-->
      <!--<router-link to='/data/oldindextable'><el-button type="text">旧数据</el-button></router-link>-->
      <!--<router-view></router-view>-->
      <el-collapse v-model="activeName" accordion>
        <el-collapse-item title="新数据" name="1">
          <v-new></v-new>
        </el-collapse-item>
        <el-collapse-item title="旧数据" name="2">
          <v-old></v-old>
        </el-collapse-item>
      </el-collapse>
      <h3>检索数据:</h3>
    </div>
    <div>
    <el-card><v-datalist :result="result"></v-datalist></el-card>
    </div>
  </div>
</template>

<script>
  import OldindexTable from './IndexTable/OldIndexTable'
  import NewindexTable from './IndexTable/NewIndexTable'
  import DataList from '../components/DataList.vue'
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
          'v-datalist':DataList,
          'v-old':OldindexTable,
          'v-new':NewindexTable
      },
      methods:{
        search(){
          this.$axios.get('/api/currentuser').then(res => {
            console.log('currentemail', res.data.data[0])
              this.email= res.data.data[0]
          })
          console.log(this.form.cultivar_name)
          this.$axios.post(
            '/api/getcharacterbyname',
            this.form
            //向后端传递参数
          ).then(res => {
            console.log('result', res.data.data)
            this.result=res.data.data
          })
        }
      }
    }
</script>

<style scoped>
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
</style>
