<template>
  <div style="padding-left: 50px">
    <el-form ref="form" :model="form" label-width="200px">
      <el-form-item label=" 需要用来检索的指标:">
        <el-checkbox-group v-model="check_list">
          <el-checkbox label="品种编号" @change="check_cid=!check_cid">品种编号</el-checkbox>
          <el-checkbox label="株号" @change="check_pid=!check_pid"></el-checkbox>
          <el-checkbox label="旋转次数" @change="check_r_num=!check_r_num"></el-checkbox>
          <el-checkbox label="拍摄日期" @change="check_d=!check_d"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item>
        <span class="demonstration">品种编号</span>
        <el-input-number v-model="form.cultivar_id" :min="1" :max="1000" :disabled="!check_cid"></el-input-number>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span class="demonstration">株号</span>
        <el-input-number v-model="form.plant_id" :min="1" :max="10" :disabled="!check_pid"></el-input-number>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span class="demonstration">旋转次数</span>
        <el-input-number v-model="form.revolution_num"  :min="1" :max="10" :disabled="!check_r_num"></el-input-number>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span class="demonstration">拍摄日期</span>
        <el-date-picker
          :disabled="!check_d"
          v-model="form.date"
          type="daterange"
          align="right"
          unlink-panels
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :picker-options="pickerOptions2">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="拍摄角度:">
        <el-checkbox-group v-model="form.angle">
          <el-checkbox label="仰视" name="仰视"></el-checkbox>
          <el-checkbox label="侧视" name="侧视"></el-checkbox>
          <el-checkbox label="俯视" name="俯视"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">检索</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
    export default {
      name: "IndexTable",
      data (){
          return{
            check_list:[],
            check_cid: false,
            check_pid: false,
            check_d: false,
            check_r_num: false,
            form:{
              cultivar_id:null,
              plant_id:null,
              angle:[null],
              revolution_num:null,
              date:[null]
            },
            result:''
          }
      },
      methods:{
        onSubmit(){
          console.log('newresult', this.form)
          this.$axios.post(
            '/api/Instrument/getOriginInfoByIndex',
            this.form
            //向后端传递参数
          ).then(res => {
            console.log('newresult', res.data)
            this.result=res.data.data
            VueEvent.$emit('index-to-newlist',res.data.data)
          })
        }
      }
    }
</script>

<style scoped>

</style>
