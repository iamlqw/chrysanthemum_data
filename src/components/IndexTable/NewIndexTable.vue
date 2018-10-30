<template>
  <div>
    <el-form ref="form" :model="form" label-width="150px">
      <el-form-item label="花属性指标检索:">
        <el-checkbox-group v-model="form.attribute_index">
          <el-checkbox label="R均值" name="type"></el-checkbox>
          <el-checkbox label="R方差" name="type"></el-checkbox>
          <el-checkbox label="G均值" name="type"></el-checkbox>
          <el-checkbox label="G方差" name="type"></el-checkbox>
          <el-checkbox label="B均值" name="type"></el-checkbox>
          <el-checkbox label="B方差" name="type"></el-checkbox>
          <el-checkbox label="H均值" name="type"></el-checkbox>
          <el-checkbox label="H方差" name="type"></el-checkbox>
          <el-checkbox label="S均值" name="type"></el-checkbox>
          <el-checkbox label="S方差" name="type"></el-checkbox>
          <el-checkbox label="V均值" name="type"></el-checkbox>
          <el-checkbox label="V方差" name="type"></el-checkbox>
          <el-checkbox label="L均值" name="type"></el-checkbox>
          <el-checkbox label="L方差" name="type"></el-checkbox>
          <el-checkbox label="a均值" name="type"></el-checkbox>
          <el-checkbox label="a方差" name="type"></el-checkbox>
          <el-checkbox label="b均值" name="type"></el-checkbox>
          <el-checkbox label="均值" name="type"></el-checkbox>
          <el-checkbox label="标准差" name="type"></el-checkbox>
          <el-checkbox label="平滑度" name="type"></el-checkbox>
          <el-checkbox label="三阶矩" name="type"></el-checkbox>
          <el-checkbox label="一致性" name="type"></el-checkbox>
          <el-checkbox label="菊花面积" name="type"></el-checkbox>
          <el-checkbox label="分型维数" name="type"></el-checkbox>
          <el-checkbox label="凸包面积" name="type"></el-checkbox>
          <el-checkbox label="重心x" name="type"></el-checkbox>
          <el-checkbox label="重心y" name="type"></el-checkbox>
          <el-checkbox label="外接矩形宽度" name="type"></el-checkbox>
          <el-checkbox label="外接矩形高度" name="type"></el-checkbox>
          <el-checkbox label="斜外接矩形长" name="type"></el-checkbox>
          <el-checkbox label="斜外接矩形宽" name="type"></el-checkbox>
          <el-checkbox label="外接圆圆心x" name="type"></el-checkbox>
          <el-checkbox label="外接圆圆心y" name="type"></el-checkbox>
          <el-checkbox label="菊花半径" name="type"></el-checkbox>
          <el-checkbox label="外接矩形高度" name="type"></el-checkbox>
          <el-checkbox label="外接矩形高度" name="type"></el-checkbox>
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
            form:{
              attribute_index:[]
            }
          }
      }
    }
</script>

<style scoped>

</style>
