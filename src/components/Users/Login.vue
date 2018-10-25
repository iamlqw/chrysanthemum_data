<template>
    <div>
      <el-button type="text" id="index" @click="dialogLoginFormVisible = true">登陆</el-button>
      <el-dialog title="登陆" :visible.sync="dialogLoginFormVisible">
        <el-form :model="loginform">
          <el-form-item label="邮箱" :label-width="formLabelWidth">
            <el-input v-model="loginform.email" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" :label-width="formLabelWidth">
            <el-input type="password" v-model="loginform.password" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="验证码" :label-width="formLabelWidth">
          <el-col :span="12"><el-input v-model="loginform.captcha" autocomplete="off"></el-input></el-col>
          <el-col :span="12"><img :src="codeUrl" @click="onRefreshCode()"></el-col>
          </el-form-item>
          {{msg}}
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="cancel()">取 消</el-button>
          <el-button type="primary" @click="login()">确 定</el-button>
        </div>
      </el-dialog>
      <el-button type="text" id="index" @click="dialogRegisterFormVisible = true">注册</el-button>
      <el-dialog title="注册" :visible.sync="dialogRegisterFormVisible">
        <el-form :model="registerform">
          <el-form-item label="用户名" :label-width="formLabelWidth">
            <el-input v-model="registerform.username" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" :label-width="formLabelWidth">
            <el-input type="password" v-model="registerform.password" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" :label-width="formLabelWidth">
            <el-input type="password" v-model="registerform.repassword" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="年龄" :label-width="formLabelWidth">
            <el-input v-model="registerform.age" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="真实姓名" :label-width="formLabelWidth">
            <el-input v-model="registerform.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="性别" :label-width="formLabelWidth">
            <el-radio-group v-model="registerform.sex">
              <el-radio :label="1">男</el-radio>
              <el-radio :label="0">女</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="邮箱" :label-width="formLabelWidth">
            <el-input v-model="registerform.email" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="手机号" :label-width="formLabelWidth">
            <el-input v-model="registerform.phone" autocomplete="off"></el-input>
          </el-form-item>
          {{registermsg}}
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="cancel()">取 消</el-button>
          <el-button type="primary" @click="register()">确 定</el-button>
        </div>
      </el-dialog>
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
</template>

<script>
    export default {
        name: "Login",
      data() {
        return {
          msg: '',
          registermsg:'',
          codeUrl: '/api/captcha/mews?r' + Math.random(),
          dialogLoginFormVisible: false,
          dialogRegisterFormVisible: false,
          loginform: {
            email: '',
            password: '',
            captcha:''
          },
          registerform: {
            username:'',
            password: '',
            repassword: '',
            age:'',
            name:'',
            sex:'',
            email: '',
            phone:''
          },
          formLabelWidth: '120px'
        }
      },
      components: {},
      methods: {
        onRefreshCode(){
          this.codeUrl =  '/api/captcha/mews?r' + Math.random()
        },
        cancel(){
          this.dialogRegisterFormVisible = false
          this.dialogLoginFormVisible = false
          for ( var i = 0; i < this.registerform.length; i++){
            this.registerform[i]='';
          }
        },
        login() {
          this.$axios.post(
            '/api/login',
            this.loginform
            //向后端传递参数
          ).then(res => {
            console.log(res.data)
            if (res.data.status === 'failed' && res.data.reason === 'captcha error') {
              this.msg = '验证码错误'
              this.codeUrl = '/api/captcha/mews?r' + Math.random()
            } else if (res.data.status === 'fail' && res.data.reason === 'email or password error!') {
              this.msg = '邮箱或密码错误'
              this.codeUrl = '/api/captcha/mews?r' + Math.random()
            } else if (res.data.status === 'success') {
              this.$router.push({path: '/homepage'})
              this.dialogLoginFormVisible = false
            }else{
              this.msg = '未知错误'
            }
          })
        },
        register(){
          this.$axios.post(
            '/api/adduser',
            this.registerform
          ).then(res => {
            if(res.data.status==='success'){
              this.$alert('注册成功!')
              this.dialogRegisterFormVisible = false
            }else{
              this.$alert('该邮箱已被注册!')
            }
            console.log(res.data)
          })
        }
      }
    }
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
</style>
