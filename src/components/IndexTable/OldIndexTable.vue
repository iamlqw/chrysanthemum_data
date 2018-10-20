<template>
  <div>
    <el-form ref="form" :model="form" label-width="150px">
    <el-form-item label="舌状花的重瓣性:">
      <el-checkbox-group v-model="form.Ray_florets_flaps">
        <el-checkbox label="1-2轮" name="type"></el-checkbox>
        <el-checkbox label="3-4轮" name="type"></el-checkbox>
        <el-checkbox label="5轮盛开不露心" name="type"></el-checkbox>
        <el-checkbox label=">5轮盛开露心" name="type"></el-checkbox>
        <el-checkbox label=">5轮盛开不露心" name="type"></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="花型:">
      <el-checkbox-group v-model="form.flower_type">
        <el-checkbox label="叠球型" name="type"></el-checkbox>
        <el-checkbox label="翻卷型" name="type"></el-checkbox>
        <el-checkbox label="飞舞型" name="type"></el-checkbox>
        <el-checkbox label="蜂窝型" name="type"></el-checkbox>
        <el-checkbox label="钩环型" name="type"></el-checkbox>
        <el-checkbox label="管盘型" name="type"></el-checkbox>
        <el-checkbox label="贯珠型" name="type"></el-checkbox>
        <el-checkbox label="荷花型" name="type"></el-checkbox>
        <el-checkbox label="卷散型" name="type"></el-checkbox>
        <el-checkbox label="宽带型" name="type"></el-checkbox>
        <el-checkbox label="莲座型" name="type"></el-checkbox>
        <el-checkbox label="龙爪型" name="type"></el-checkbox>
        <el-checkbox label="毛刺型" name="type"></el-checkbox>
        <el-checkbox label="雀舌型" name="type"></el-checkbox>
        <el-checkbox label="芍药型" name="type"></el-checkbox>
        <el-checkbox label="匙桂型" name="type"></el-checkbox>
        <el-checkbox label="匙荷型" name="type"></el-checkbox>
        <el-checkbox label="匙球型" name="type"></el-checkbox>
        <el-checkbox label="疏管型" name="type"></el-checkbox>
        <el-checkbox label="丝发型" name="type"></el-checkbox>
        <el-checkbox label="松针型" name="type"></el-checkbox>
        <el-checkbox label="针管型" name="type"></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="品种分类:">
      <el-checkbox-group v-model="form.classification">
        <el-checkbox label="管瓣" name="type"></el-checkbox>
        <el-checkbox label="匙瓣" name="type"></el-checkbox>
        <el-checkbox label="平瓣" name="type"></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="花色系统:">
      <el-checkbox-group v-model="form.classification">
        <el-checkbox label="白色" name="type"></el-checkbox>
        <el-checkbox label="橙色" name="type"></el-checkbox>
        <el-checkbox label="粉色" name="type"></el-checkbox>
        <el-checkbox label="红色" name="type"></el-checkbox>
        <el-checkbox label="黄绿色" name="type"></el-checkbox>
        <el-checkbox label="黄色" name="type"></el-checkbox>
        <el-checkbox label="墨色" name="type"></el-checkbox>
        <el-checkbox label="紫色" name="type"></el-checkbox>
        <el-checkbox label="棕色" name="type"></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="品种年代:">
      <el-radio-group v-model="form.age_of_cultivar">
        <el-radio label="传统"></el-radio>
        <el-radio label="现代"></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="花属性指标检索:">
      <el-select v-model="selectedIndexes"
                 multiple
                 filterable
                 placeholder="请选择"
                 @change="onIndexesSelectChange"
                 collapse-tags
                 size="large">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <!--<el-checkbox-group v-model="form.attribute_index">-->
        <!--<el-checkbox label="植株高度（cm）" name="type"></el-checkbox>-->
        <!--<el-checkbox label="花径大小（cm）" name="type"></el-checkbox>-->
        <!--<el-checkbox label="筒状花部直径（mm）" name="type"></el-checkbox>-->
        <!--<el-checkbox label="花瓣长度（cm）" name="type"></el-checkbox>-->
        <!--<el-checkbox label="花瓣宽度（cm）" name="type"></el-checkbox>-->
        <!--<el-checkbox label="叶片长（cm）" name="type"></el-checkbox>-->
        <!--<el-checkbox label="叶片宽（cm）" name="type"></el-checkbox>-->
      <!--</el-checkbox-group>-->
      <el-col id="indexRange">
          <template >
            <el-col v-for="item in showIndexes" :xs="24" :sm="24" :md="12" :lg="12" style="padding-left: 2%"  :key="index+'in19'">
                <div class="range">
                  {{item}}:
                  <el-input-number v-model="form.attribute_index.min" :min="0" :max="10"></el-input-number> ~
                  <el-input-number v-model="form.attribute_index.max" :min="0" :max="10"></el-input-number>
                </div>
            </el-col>
          </template>
      </el-col>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">检索</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
  </div>
</template>

<script>
    export default {
      name: "IndexTable",
      data(){
        return{
          selectedIndexes: [],
          showIndexes:[],
          options: [{
            value: '植株高度',
            label: '植株高度（cm）'
          }, {
            value: '花径大小',
            label: '花径大小（cm）'
          }, {
            value: '筒状花部直径',
            label: '筒状花部直径（mm）'
          }, {
            value: '花瓣长度',
            label: '花瓣长度（cm）'
          }, {
            value: '花瓣宽度',
            label: '花瓣宽度（cm）'
          },{
            value: '叶片长',
            label: '叶片长（cm）'
          },{
            value: '叶片宽',
            label: '叶片宽（cm）'
          }],
          value: '',
          form: {
            Ray_florets_flaps: [],
            flower_type:[],
            classification:[],
            age_of_cultivar:[],
            attribute_index:[{
              name:[],
              min:[],
              max:[]
            }
            ]
          }
        }
      },
      methods:{
        onIndexesSelectChange () {
          this.showIndexes = this.selectedIndexes
        },
      },
    }
</script>

<style scoped>

</style>
