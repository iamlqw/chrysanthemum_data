<template>
  <div id="data">
    <div>
      <h3>按品种名直接检索:</h3><br>
      <el-input v-model="form.cultivar_name" placeholder="请输入内容" style="width:300px;"></el-input>
      <el-button type="primary" icon="el-icon-search" @click="search()">搜索</el-button>
    </div>
    <div>
      <h3>按指标模糊检索:</h3>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1"><router-link to='/homepage/data/newindextable'>新数据</router-link></el-menu-item>
      <el-menu-item index="2"><router-link to='/homepage/data/oldindextable'>旧数据</router-link></el-menu-item>
      </el-menu>
      <!--<router-link to='/data/newindextable'><el-button type="text">新数据</el-button></router-link>-->
      <!--<router-link to='/data/oldindextable'><el-button type="text">旧数据</el-button></router-link>-->
      <router-view></router-view>
      <h3>检索数据:</h3>
    </div>
    <div>
    <v-datalist :result="result"></v-datalist>
    </div>
  </div>

</template>

<script>
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
    height: 3000px;
    text-align: left;
    background: white;
  }
  h3{
    margin:10px 5px ;
  }

</style>
