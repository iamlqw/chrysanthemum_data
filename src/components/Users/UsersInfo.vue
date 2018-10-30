<template>
  <div slot="main" id="info" align="center">
    <div id="picture">
      <img src="../../assets/img/school.jpg" style="width:100px;">
    </div>
    <div align="center" style="padding-top: 50px">
      <el-button @click="changeInfo" type="primary">修改信息</el-button>
      <el-button type="primary" @click="resetPassword">修改密码</el-button>
    </div>
    <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign" v-bind:rules="formRules" style="width: 500px;padding-top: 10px">
      <el-form-item label="姓名"  prop="name">
        <el-input v-model="name" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="email" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item label="联系方式"  prop="phone">
        <el-input v-model="phone" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item label="年龄">
        <el-input v-model="age" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-select v-model="sex" placeholder="请选择用户性别" :disabled="true">
          <el-option label="男" value="男"></el-option>
          <el-option label="女" value="女"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="身份">
        <el-select v-model="rolesname" placeholder="请选择身份" :disabled="true">
          <el-option label="管理员" value="男"></el-option>
          <el-option label="用户" value="女"></el-option>
        </el-select>
      </el-form-item>
      <el-button @click="cancel" type="primary" v-show="changeinfo === false">取 消</el-button>
      <el-button type="primary" @click="confirm"  v-show="changeinfo === false">确 认</el-button>
    </el-form>
  </div>
  <!--<div id="data">-->
    <!--<el-row :gutter="10">-->
      <!--<el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple">姓名:</div></el-col>-->
      <!--<el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light">{{name}}</div></el-col>-->
    <!--</el-row>-->
    <!--<el-row :gutter="10">-->
      <!--<el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple">性别：</div></el-col>-->
      <!--<el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light">{{sex}}</div></el-col>-->
    <!--</el-row>-->
    <!--<el-row :gutter="10">-->
      <!--<el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple">年龄：</div></el-col>-->
      <!--<el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light">{{age}}</div></el-col>-->
    <!--</el-row>-->
    <!--<el-row :gutter="10">-->
      <!--<el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple">联系方式：</div></el-col>-->
      <!--<el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light">{{phone}}</div></el-col>-->
    <!--</el-row>-->
    <!--<el-row :gutter="10">-->
      <!--<el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple">邮箱：</div></el-col>-->
      <!--<el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light">{{email}}</div></el-col>-->
    <!--</el-row>-->
    <!--<el-row :gutter="10">-->
      <!--<el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple">身份：</div></el-col>-->
      <!--<el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light">{{rolesname}}</div></el-col>-->
    <!--</el-row>-->
    <!--<el-button type="text" @click="layout" >注销</el-button>-->
  <!--</div>-->
  <!--</div>-->
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
#info{
  background: white;
  height: 100%;
}
</style>
