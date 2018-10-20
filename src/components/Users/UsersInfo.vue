<template>
  <div id="data">
    <el-row :gutter="10">
      <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple">姓名:</div></el-col>
      <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light">{{name}}</div></el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple">性别：</div></el-col>
      <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light">{{sex}}</div></el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple">年龄：</div></el-col>
      <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light">{{age}}</div></el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple">联系方式：</div></el-col>
      <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light">{{phone}}</div></el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple">邮箱：</div></el-col>
      <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light">{{email}}</div></el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple">身份：</div></el-col>
      <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light">{{rolesname}}</div></el-col>
    </el-row>
    <el-button type="text" @click="layout" >注销</el-button>
  </div>
</template>

<script>
    export default {
        name: "UserInfo",
      data () {
        return {
          name:'',
          sex:'',
          age:'',
          phone:'',
          email:'',
          rolesname:''
        }
      },
        mounted(){
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
                this.sex = res.data.data[0].sex==1?'男':'女'
                this.age = res.data.data[0].age
                this.phone = res.data.data[0].phone
                this.email = res.data.data[0].email
                this.rolesname = res.data.data[0].rolesname
              })
          })
        },
        methods:{
          layout(){
            this.$axios.post('/api/logout').then(res => {
              console.log('logout', res)
            })
            location.reload()
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
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>
