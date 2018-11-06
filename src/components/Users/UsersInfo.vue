<template>
  <div slot="main" id="info" align="center">
    <div id="picture">
      <img src="../../assets/img/school.jpg" style="width:100px;">
    </div>
    <div align="center" style="padding-top: 50px">
      <el-button type="primary" @click="changeinfo=false">修改信息</el-button>
      <el-button type="primary" @click="rePswdialogVisible=true">修改密码</el-button>
      <el-dialog
        title="提示"
        :visible.sync="rePswdialogVisible"
        width="30%">
        <span>修改密码</span>
        <el-form :model="rePasswordform">
          <el-form-item label="旧密码" :label-width="formLabelWidth">
            <el-input type="password" v-model="rePasswordform.old_pwd" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="新密码" :label-width="formLabelWidth">
            <el-input type="password" v-model="rePasswordform.new_pwd" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="确认新密码" :label-width="formLabelWidth">
            <el-input type="password" v-model="re_pwd" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="cancel()">取 消</el-button>
          <el-button type="primary" @click="resetPassword()">确 定</el-button>
        </span>
      </el-dialog>
      <el-button type="primary" @click="reData()">返回数据页</el-button>
    </div>
    <el-form :label-position="labelPosition" label-width="100px" :model="reMassageform" v-bind:rules="formRules" style="width: 500px;padding-top: 10px">
      <el-form-item label="姓名"  prop="name">
        <el-input v-model="reMassageform.name" :disabled="changeinfo"></el-input>
      </el-form-item>
      <el-form-item label="真实姓名"  prop="name">
        <el-input v-model="reMassageform.username" :disabled="changeinfo"></el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="reMassageform.email" :disabled="changeinfo"></el-input>
      </el-form-item>
      <el-form-item label="联系方式"  prop="phone">
        <el-input v-model="reMassageform.phone" :disabled="changeinfo"></el-input>
      </el-form-item>
      <el-form-item label="年龄">
        <el-input v-model="reMassageform.age" :disabled="changeinfo"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-select v-model="reMassageform.sex" placeholder="请选择用户性别" :disabled="changeinfo">
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
      <el-button @click="changeinfo=true" type="primary" v-show="changeinfo === false">取 消</el-button>
      <el-button type="primary" @click="changeInfo()"  v-show="changeinfo === false">确 认</el-button>
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
          //修改密码
          rePasswordform:{
            email:'',
            old_pwd:'',
            new_pwd:''
          },
          re_pwd:'',
          rePswdialogVisible:false,
          //修改信息
          reMassageform:{
            id:'',
            name:'',
            username:'',
            sex:'',
            age:'',
            phone:'',
            email:'',
          },
          rolesname:'',
          changeinfo:true
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
                this.reMassageform.id = res.data.data[0].id
                this.reMassageform.name = res.data.data[0].name
                this.reMassageform.username = res.data.data[0].username
                this.reMassageform.sex = res.data.data[0].sex==1?'男':'女'
                this.reMassageform.age = res.data.data[0].age
                this.reMassageform.phone = res.data.data[0].phone
                this.reMassageform.email = res.data.data[0].email
                this.rolesname = res.data.data[0].rolesname
              })
          })
        },
        methods:{
          //跳转
          reData(){
            this.$router.push({path:'data'})
          },
          //取消
          cancel(){
            this.rePswdialogVisible = false
            this.rePasswordform=''
            this.re_pwd=''
          },
          resetPassword(){
            if(this.re_pwd!=this.rePasswordform.new_pwd){
              this.$alert('确认密码有误！')
            }else if(this.rePasswordform.new_pwd.length<6){
              this.$alert('密码长度不得小于六位！')
            }else {
              this.rePasswordform.email=this.reMassageform.email
              console.log(this.rePasswordform)
              this.$axios.post(
                '/api/resetpassword',
                this.rePasswordform
                //向后端传递参数
              ).then(res => {
                console.log(res)
              })
            }
          },
          changeInfo(){
            this.reMassageform.id=
            this.$axios.post(
              '/api/updateUserlnfo',
              this.reMassageform
              //向后端传递参数
            ).then(res => {
              console.log(res)
            })
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
