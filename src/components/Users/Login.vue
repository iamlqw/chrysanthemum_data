<template>
    <div id="login">
      <div class="page-container">
        <h1>菊花数据管理平台</h1>
        <el-form :model="loginform">
          <input type="text" v-model="loginform.email" class="username" placeholder="邮箱">
          <input type="password" v-model="loginform.password" class="password" placeholder="密码">
          <input type="text" style="width:145px" v-model="loginform.captcha" class="captcha" placeholder="验证码">
          <img :src="codeUrl" @click="onRefreshCode()">

          <button type="submit" @click="login()">登录</button>
          <button type="submit" @click="dialogRegisterFormVisible = true">注册</button>
          <div class="error"><span>+</span></div>
        </el-form>
        <div class="connect">
          <p>{{msg}}</p>
          <p>
            <a class="facebook" href=""></a>
            <a class="twitter" href=""></a>
          </p>
        </div>
      </div>
      <el-dialog title="注册" :visible.sync="dialogRegisterFormVisible">
        <el-form :model="registerform">
          <el-form-item label="邮箱">
            <el-input v-model="registerform.email" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="用户名">
            <el-input v-model="registerform.username" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input type="password" v-model="registerform.password" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="确认密码">
            <el-input type="password" v-model="registerform.repassword" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="年龄">
            <el-input v-model="registerform.age" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="真实姓名">
            <el-input v-model="registerform.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="性别">
            <el-radio-group v-model="registerform.sex">
              <el-radio :label="1">男</el-radio>
              <el-radio :label="0">女</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="手机号">
            <el-input v-model="registerform.phone" autocomplete="off"></el-input>
          </el-form-item>
          {{registermsg}}
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="cancel()">取 消</el-button>
          <el-button type="primary" @click="register()">确 定</el-button>
        </div>
      </el-dialog>
      <!--<el-carousel indicator-position="outside">-->
        <!--<el-carousel-item v-for="item in 4" :key="item">-->
          <!--<h3>{{ item }}</h3>-->
        <!--</el-carousel-item>-->
      <!--</el-carousel>-->
    </div>
</template>
<script>
  import '../../assets/css/reset.css'
  import '../../assets/css/style.css'
  import '../../assets/css/supersized.css'
  import '../../assets/js/jquery-1.8.2.min.js'
  import '../../assets/js/scripts.js'
  import '../../assets/js/supersized.3.2.7.min.js'
  import '../../assets/js/supersized-init.js'
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
          this.registerform='';
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
              this.$router.push({path: '/homepage/data'})
              this.dialogLoginFormVisible = false
            }else{
              this.msg = '未知错误'
            }
          })
        },
        register(){
          var reEmail = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
          var rePhone=/^(13[0-9]|14[0-9]|15[0-9]|166|17[0-9]|18[0-9]|19[8|9])\d{8}$/;
          var reAge=/^[1-9]\d*$/;
          if(!reEmail.test(this.registerform.email)){
            this.$alert('邮箱格式不正确！')
          }else if(this.registerform.username===''){
            this.$alert('用户名不能为空！')
          }else if(this.registerform.password.length<6){
            this.$alert('密码长度不得小于六位！')
          } else if(this.registerform.repassword!=this.registerform.password){
            this.$alert('两次密码输入不一致！')
          }else if(this.registerform.sex===''){
            this.$alert('请选择性别！')
          }else if(!rePhone.test(this.registerform.phone)){
            this.$alert('手机号格式不正确！')
          }else if(!reAge.test(this.registerform.age)){
            this.$alert('年龄格式不正确！')
          }else{
            this.$axios.post(
              '/api/adduser',
              this.registerform
            ).then(res => {
              if(res.data.status==='success'){
                this.$alert('注册成功!')
                this.dialogRegisterFormVisible = false
                this.registerform=[]
              }else{
                this.$alert('该邮箱已被注册!')
              }
              console.log(res.data)
            })
          }
        },
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
