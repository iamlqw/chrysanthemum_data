<template>
  <div>
    <el-form ref="form" :model="form" label-width="160px">
    <el-form-item label="舌状花重瓣性:">
      <el-checkbox-group v-model="form.ray_florets_flaps">
        <el-checkbox label="1-2轮" name="1-2轮"></el-checkbox>
        <el-checkbox label="3-4轮" name="3-4轮"></el-checkbox>
        <el-checkbox label="5轮盛开不露心" name="5轮盛开不露心"></el-checkbox>
        <el-checkbox label=">5轮盛开露心" name=">5轮盛开露心"></el-checkbox>
        <el-checkbox label=">5轮盛开不露心" name=">5轮盛开不露心"></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="花型:">
      <el-checkbox-group v-model="form.flower_type">
        <el-checkbox label="叠球型" name="叠球型"></el-checkbox>
        <el-checkbox label="翻卷型" name="翻卷型"></el-checkbox>
        <el-checkbox label="飞舞型" name="飞舞型"></el-checkbox>
        <el-checkbox label="蜂窝型" name="蜂窝型"></el-checkbox>
        <el-checkbox label="钩环型" name="钩环型"></el-checkbox>
        <el-checkbox label="管盘型" name="管盘型"></el-checkbox>
        <el-checkbox label="贯珠型" name="贯珠型"></el-checkbox>
        <el-checkbox label="荷花型" name="荷花型"></el-checkbox>
        <el-checkbox label="卷散型" name="卷散型"></el-checkbox>
        <el-checkbox label="宽带型" name="宽带型"></el-checkbox>
        <el-checkbox label="莲座型" name="莲座型"></el-checkbox>
        <el-checkbox label="龙爪型" name="龙爪型"></el-checkbox>
        <el-checkbox label="毛刺型" name="毛刺型"></el-checkbox>
        <el-checkbox label="雀舌型" name="雀舌型"></el-checkbox>
        <el-checkbox label="芍药型" name="芍药型"></el-checkbox>
        <el-checkbox label="匙桂型" name="匙桂型"></el-checkbox>
        <el-checkbox label="匙荷型" name="匙荷型"></el-checkbox>
        <el-checkbox label="匙球型" name="匙球型"></el-checkbox>
        <el-checkbox label="疏管型" name="疏管型"></el-checkbox>
        <el-checkbox label="丝发型" name="丝发型"></el-checkbox>
        <el-checkbox label="松针型" name="松针型"></el-checkbox>
        <el-checkbox label="针管型" name="针管型"></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="品种分类:">
      <el-checkbox-group v-model="form.classification_of_cultivar">
        <el-checkbox label="管瓣" name="管瓣"></el-checkbox>
        <el-checkbox label="匙瓣" name="匙瓣"></el-checkbox>
        <el-checkbox label="平瓣" name="平瓣"></el-checkbox>
        <el-checkbox label="管瓣+匙瓣" name="管瓣+匙瓣"></el-checkbox>
        <el-checkbox label="管瓣+平瓣" name="管瓣+平瓣"></el-checkbox>
        <el-checkbox label="匙瓣+平瓣" name="匙瓣+平瓣"></el-checkbox>
        <el-checkbox label="管瓣+匙瓣+平瓣" name="管瓣+匙瓣+平瓣"></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="花色系统:">
      <el-checkbox-group v-model="form.color_system">
        <el-checkbox label="白色" name="白色"></el-checkbox>
        <el-checkbox label="橙色" name="橙色"></el-checkbox>
        <el-checkbox label="粉色" name="粉色"></el-checkbox>
        <el-checkbox label="红色" name="红色"></el-checkbox>
        <el-checkbox label="黄绿色" name="黄绿色"></el-checkbox>
        <el-checkbox label="黄色" name="黄色"></el-checkbox>
        <el-checkbox label="墨色" name="墨色"></el-checkbox>
        <el-checkbox label="紫色" name="紫色"></el-checkbox>
        <el-checkbox label="棕色" name="棕色"></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="品种年代:">
      <el-checkbox-group v-model="form.age_of_cultivar">
        <el-checkbox label="传统" name="传统"></el-checkbox>
        <el-checkbox label="现代" name="现代"></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="花属性指标:">
      <el-radio-group ref="select" v-model="showIndexes" >
        <el-checkbox v-model="showIndexes" label="plant_height">植株高度（cm）</el-checkbox>
        <el-checkbox v-model="showIndexes" label="flower_diameter">花径大小（cm）</el-checkbox>
        <el-checkbox v-model="showIndexes" label="disc_florets_diameter">筒状花部直径（mm）</el-checkbox>
        <el-checkbox v-model="showIndexes" label="petal_length">花瓣长度（cm）</el-checkbox>
        <el-checkbox v-model="showIndexes" label="petal_width">花瓣宽度（cm）</el-checkbox>
        <el-checkbox v-model="showIndexes" label="leaf_length">叶片长（cm）</el-checkbox>
        <el-checkbox v-model="showIndexes" label="leaf_width">叶片宽（cm）</el-checkbox>
      </el-radio-group>
      <ul>
            <li v-for="item in showIndexes">
                  {{item}}:
                  <el-input-number v-model="form[item][0]" :min="0" :step="0.1"></el-input-number> ~
                  <el-input-number v-model="form[item][1]" :min="form[item][0]" :step="0.1"></el-input-number>
            </li>
      </ul>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit()">检索</el-button>
    </el-form-item>
  </el-form>
  </div>
</template>

<script>
   import VueEvent from '../../model/VueEvent.js'
    export default {
      name: "IndexTable",
      data(){
        return{
          showIndexes:[],
          value: '',
          form: {
            email:'',
            ray_florets_flaps: [],
            flower_type:[],
            classification_of_cultivar:[],
            color_system:[],
            age_of_cultivar:[],
            plant_height:[],
            flower_diameter:[],
            disc_florets_diameter:[],
            petal_length:[],
            petal_width:[],
            leaf_length:[],
            leaf_width:[]
          },
          result:[]
        }
      },
      methods:{
        onSubmit(){
          this.$axios.get('/api/currentuser').then(res => {
            console.log('currentemail', res.data.data[0])
            this.form.email= res.data.data[0]
          })
          console.log('oldindex',this.form)
          this.$axios.post(
            '/api/getcharacterbyindex',
            this.form
            //向后端传递参数
          ).then(res => {
            console.log('result', res.data.data)
            this.result=res.data.data
            VueEvent.$emit('index-to-oldlist',res.data.data)
          })
          this.$router.push({path:'olddatalist'})
        }
      },
      /*测试*/
      watch:{
        showIndexes: function () {
          console.log(this.showIndexes)
        }
      }
    }
</script>

<style scoped>

</style>
