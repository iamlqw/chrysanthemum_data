<template>
  <div id="data">
    <div id="middle">
      <el-input v-model="form.cultivar_name" placeholder="请输入内容" style="width:500px; height:60px"></el-input>
      <el-button type="primary"  icon="el-icon-search" @click="search()"></el-button>
    </div>
    <div>
      <el-collapse v-model="activeName" accordion>
        <el-collapse-item>
          <template slot="title" >
            <p style="font-size: 35px">搜索指标</p>
          </template>
          <el-collapse v-model="activeName" accordion>
            <el-collapse-item>
              <template slot="title" >
                <p style="font-size: 30px;padding-left: 40px">  新数据</p>
              </template>
              <v-new></v-new>
            </el-collapse-item>
            <el-collapse-item>
              <template slot="title" >
                <p style="font-size: 30px;padding-left: 40px">旧数据</p>
              </template>
              <v-old></v-old>
            </el-collapse-item>
          </el-collapse>
        </el-collapse-item>
      </el-collapse>
    </div>
    <div>
      <h3>检索数据:</h3>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
      <!--<el-card><v-olddatalist :result="result"></v-olddatalist></el-card>-->
    </div>
  </div>
</template>

<script>
  import VueEvent from '../model/VueEvent.js'
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
          // form1:{
          //   email:'',
          //   cultivar_name: '',
          // },
          result:[]
        }
      },
      components:{
          'v-olddatalist':OldDataList,
          'v-old':OldindexTable,
          'v-new':NewindexTable
      },
      methods:{
        search(){
          // 获取当前用户名
          this.$axios.get('/api/currentuser').then(res => {
            console.log('currentemail', res.data.data[0])
              this.email= res.data.data[0]
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
      mounted:function () {
        //缺省跳转到旧数据
        if(this.$route.path=='/homepage/data'){
          this.$router.push({path:'data/olddatalist'})
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
