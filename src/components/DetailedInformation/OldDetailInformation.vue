<template>
  <div>
    <div id="picture">
      <img :onerror="errpic" class="customerHead" :src="src" width="420" height="420">
    </div>
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item  id="list" title="基本信息：" name="1">
        <div>基地编号:{{olddata.field_id}}</div>
        <div>品种名:{{olddata.cultivar_name}}</div>
        <div>植株高度:{{olddata.plant_height}}</div>
        <div>节间长度:{{olddata.internode_length}}</div>
      </el-collapse-item>
      <el-collapse-item title="反馈 Feedback" name="2">
        <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
        <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
      </el-collapse-item>
      <el-collapse-item title="效率 Efficiency" name="3">
        <div>简化流程：设计简洁直观的操作流程；</div>
        <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
        <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
      </el-collapse-item>
      <el-collapse-item title="可控 Controllability" name="4">
        <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
        <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
      </el-collapse-item>
    </el-collapse>
    <!--<el-row :gutter="20">-->
    <!--<el-col :span="5"><div class="grid-content bg-purple">基地编号</div></el-col>-->
    <!--<el-col :span="7"><div class="grid-content bg-purple">{{olddata.field_id}}</div></el-col>-->
    <!--<el-col :span="5"><div class="grid-content bg-purple">品种名</div></el-col>-->
    <!--<el-col :span="7"><div class="grid-content bg-purple">{{olddata.cultivar_name}}</div></el-col>-->
  <!--</el-row>-->
    <!--<el-row :gutter="20">-->
      <!--<el-col :span="5"><div class="grid-content bg-purple">植株高度</div></el-col>-->
      <!--<el-col :span="7"><div class="grid-content bg-purple">{{olddata.plant_height}}</div></el-col>-->
      <!--<el-col :span="5"><div class="grid-content bg-purple">节间长度</div></el-col>-->
      <!--<el-col :span="7"><div class="grid-content bg-purple">{{olddata.internode_length}}</div></el-col>-->
    <!--</el-row>-->
    <!--<el-row :gutter="20">-->
      <!--<el-col :span="5"><div class="grid-content bg-purple">茎粗度</div></el-col>-->
      <!--<el-col :span="7"><div class="grid-content bg-purple">{{olddata.stem_width}}</div></el-col>-->
      <!--<el-col :span="5"><div class="grid-content bg-purple">花茎大小</div></el-col>-->
      <!--<el-col :span="7"><div class="grid-content bg-purple">{{olddata.flower_diameter}}</div></el-col>-->
    <!--</el-row>-->
    <!--<el-row :gutter="20">-->
      <!--<el-col :span="5"><div class="grid-content bg-purple">筒状花全长</div></el-col>-->
      <!--<el-col :span="7"><div class="grid-content bg-purple">{{olddata.disc_florets_length}}</div></el-col>-->
      <!--<el-col :span="5"><div class="grid-content bg-purple">总苞片基部到花顶部的位置</div></el-col>-->
      <!--<el-col :span="7"><div class="grid-content bg-purple">{{olddata.position_base_to_top}}</div></el-col>-->
    <!--</el-row>-->
    <!--<el-row :gutter="20">-->
      <!--<el-col :span="5"><div class="grid-content bg-purple">筒状花部直径</div></el-col>-->
      <!--<el-col :span="7"><div class="grid-content bg-purple">{{olddata.disc_florets_diameter}}</div></el-col>-->
      <!--<el-col :span="5"><div class="grid-content bg-purple">筒状小花数</div></el-col>-->
      <!--<el-col :span="7"><div class="grid-content bg-purple">{{olddata.disc_florets_num}}</div></el-col>-->
    <!--</el-row>-->
    <!--<el-row :gutter="20">-->
      <!--<el-col :span="5"><div class="grid-content bg-purple">舌状小花数</div></el-col>-->
      <!--<el-col :span="7"><div class="grid-content bg-purple">{{'eer'}}</div></el-col>-->
      <!--<el-col :span="5"><div class="grid-content bg-purple">花瓣长度</div></el-col>-->
      <!--<el-col :span="7"><div class="grid-content bg-purple">{{olddata.petal_length}}</div></el-col>-->
    <!--</el-row>-->
    <!--<el-row :gutter="20">-->
      <!--<el-col :span="5"><div class="grid-content bg-purple">花瓣宽度</div></el-col>-->
      <!--<el-col :span="7"><div class="grid-content bg-purple">{{olddata.petal_width}}</div></el-col>-->
      <!--<el-col :span="5"><div class="grid-content bg-purple">花根长度</div></el-col>-->
      <!--<el-col :span="7"><div class="grid-content bg-purple">{{olddata.pedicel_length}}</div></el-col>-->
    <!--</el-row>-->
    <!--<el-row :gutter="20">-->
      <!--<el-col :span="5"><div class="grid-content bg-purple">花根粗度</div></el-col>-->
      <!--<el-col :span="7"><div class="grid-content bg-purple">{{olddata.pedicel_width}}</div></el-col>-->
      <!--<el-col :span="5"><div class="grid-content bg-purple">花托大小</div></el-col>-->
      <!--<el-col :span="7"><div class="grid-content bg-purple">{{olddata.torus_size}}</div></el-col>-->
    <!--</el-row>-->
    <!--<el-row :gutter="20">-->
      <!--<el-col :span="5"><div class="grid-content bg-purple">叶片长</div></el-col>-->
      <!--<el-col :span="7"><div class="grid-content bg-purple">{{olddata.leaf_length}}</div></el-col>-->
      <!--<el-col :span="5"><div class="grid-content bg-purple">叶片宽</div></el-col>-->
      <!--<el-col :span="7"><div class="grid-content bg-purple">{{olddata.leaf_width }}</div></el-col>-->
    <!--</el-row>-->
    <!--<el-row :gutter="20">-->
      <!--<el-col :span="5"><div class="grid-content bg-purple">叶片厚度</div></el-col>-->
      <!--<el-col :span="7"><div class="grid-content bg-purple">{{olddata.leaf_thickness}}</div></el-col>-->
      <!--<el-col :span="5"><div class="grid-content bg-purple">叶柄长</div></el-col>-->
      <!--<el-col :span="7"><div class="grid-content bg-purple">{{olddata.setiole_length}}</div></el-col>-->
    <!--</el-row>-->
    <!--<el-row :gutter="20">-->
      <!--<el-col :span="5"><div class="grid-content bg-purple">茎色</div></el-col>-->
      <!--<el-col :span="7"><div class="grid-content bg-purple">{{olddata.stem_color}}</div></el-col>-->
      <!--<el-col :span="5"><div class="grid-content bg-purple">茎的曲直性</div></el-col>-->
      <!--<el-col :span="7"><div class="grid-content bg-purple">{{olddata.stem_curvature }}</div></el-col>-->
    <!--</el-row>-->
    <!--<el-row :gutter="20">-->
      <!--<el-col :span="5"><div class="grid-content bg-purple">茎强度</div></el-col>-->
      <!--<el-col :span="7"><div class="grid-content bg-purple">{{olddata.stem_intension}}</div></el-col>-->
      <!--<el-col :span="5"><div class="grid-content bg-purple">花瓣先端形状</div></el-col>-->
      <!--<el-col :span="7"><div class="grid-content bg-purple">{{olddata.petal_tip_shape}}</div></el-col>-->
    <!--</el-row>-->
    <!--<el-row :gutter="20">-->
      <!--<el-col :span="5"><div class="grid-content bg-purple">花蕾的形状</div></el-col>-->
      <!--<el-col :span="7"><div class="grid-content bg-purple">{{olddata.bud_shape}}</div></el-col>-->
      <!--<el-col :span="5"><div class="grid-content bg-purple">花中心部颜色</div></el-col>-->
      <!--<el-col :span="7"><div class="grid-content bg-purple">{{olddata.flower_center_color}}</div></el-col>-->
    <!--</el-row>-->
    <!--<el-row :gutter="20">-->
      <!--<el-col :span="5"><div class="grid-content bg-purple">花盘颜色</div></el-col>-->
      <!--<el-col :span="7"><div class="grid-content bg-purple">{{olddata.flower_disc_color}}</div></el-col>-->
      <!--<el-col :span="5"><div class="grid-content bg-purple">外花瓣表面颜色</div></el-col>-->
      <!--<el-col :span="7"><div class="grid-content bg-purple">{{olddata.outer_petals_surface_color}}</div></el-col>-->
    <!--</el-row>-->
    <!--<el-row :gutter="20">-->
      <!--<el-col :span="5"><div class="grid-content bg-purple">外花瓣背面颜色</div></el-col>-->
      <!--<el-col :span="7"><div class="grid-content bg-purple">{{olddata.outer_petals_back_color}}</div></el-col>-->
      <!--<el-col :span="5"><div class="grid-content bg-purple">外花瓣的角度</div></el-col>-->
      <!--<el-col :span="7"><div class="grid-content bg-purple">{{olddata.outer_petals_angle}}</div></el-col>-->
    <!--</el-row>-->
    <!--<el-row :gutter="20">-->
      <!--<el-col :span="5"><div class="grid-content bg-purple">外花瓣曲反状况</div></el-col>-->
      <!--<el-col :span="7"><div class="grid-content bg-purple">{{olddata.outer_petals_curvature}}</div></el-col>-->
      <!--<el-col :span="5"><div class="grid-content bg-purple">内花瓣曲反状况</div></el-col>-->
      <!--<el-col :span="7"><div class="grid-content bg-purple">{{olddata.inner_petals_curvature}}</div></el-col>-->
    <!--</el-row>-->
    <!--<el-row :gutter="20">-->
      <!--<el-col :span="5"><div class="grid-content bg-purple">舌状花表面色彩分布</div></el-col>-->
      <!--<el-col :span="7"><div class="grid-content bg-purple">{{olddata.ray_florets_surface_color_distribution}}</div></el-col>-->
      <!--<el-col :span="5"><div class="grid-content bg-purple">舌状花的重瓣性</div></el-col>-->
      <!--<el-col :span="7"><div class="grid-content bg-purple">{{olddata.ray_florets_flaps}}</div></el-col>-->
    <!--</el-row>-->
    <!--<el-row :gutter="20">-->
      <!--<el-col :span="5"><div class="grid-content bg-purple">筒状小花的分布</div></el-col>-->
      <!--<el-col :span="7"><div class="grid-content bg-purple">{{olddata.distribution_of_disc_florets}}</div></el-col>-->
      <!--<el-col :span="5"><div class="grid-content bg-purple">总苞片的位置</div></el-col>-->
      <!--<el-col :span="7"><div class="grid-content bg-purple">{{olddata.total_bracts_position}}</div></el-col>-->
    <!--</el-row>-->
    <!--<el-row :gutter="20">-->
      <!--<el-col :span="5"><div class="grid-content bg-purple">花的香气类型</div></el-col>-->
      <!--<el-col :span="7"><div class="grid-content bg-purple">{{olddata.aroma_type_of_flowers}}</div></el-col>-->
      <!--<el-col :span="5"><div class="grid-content bg-purple">花托形状</div></el-col>-->
      <!--<el-col :span="7"><div class="grid-content bg-purple">{{olddata.torus_shape}}</div></el-col>-->
    <!--</el-row>-->
    <!--<el-row :gutter="20">-->
      <!--<el-col :span="5"><div class="grid-content bg-purple">叶表面色</div></el-col>-->
      <!--<el-col :span="7"><div class="grid-content bg-purple">{{olddata.leaves_surface_color}}</div></el-col>-->
      <!--<el-col :span="5"><div class="grid-content bg-purple">叶面光泽</div></el-col>-->
      <!--<el-col :span="7"><div class="grid-content bg-purple">{{olddata.leaves_gloss}}</div></el-col>-->
    <!--</el-row>-->
    <!--<el-row :gutter="20">-->
      <!--<el-col :span="5"><div class="grid-content bg-purple">叶面的平整程度</div></el-col>-->
      <!--<el-col :span="7"><div class="grid-content bg-purple">{{olddata.leaves_leveling_degree}}</div></el-col>-->
      <!--<el-col :span="5"><div class="grid-content bg-purple">叶身卷曲程度</div></el-col>-->
      <!--<el-col :span="7"><div class="grid-content bg-purple">{{olddata.leaves_curl_degree}}</div></el-col>-->
    <!--</el-row>-->
    <!--<el-row :gutter="20">-->
      <!--<el-col :span="5"><div class="grid-content bg-purple">叶片硬度</div></el-col>-->
      <!--<el-col :span="7"><div class="grid-content bg-purple">{{olddata.blade_hardness}}</div></el-col>-->
      <!--<el-col :span="5"><div class="grid-content bg-purple">叶背面色</div></el-col>-->
      <!--<el-col :span="7"><div class="grid-content bg-purple">{{olddata.leaves_back_color}}</div></el-col>-->
    <!--</el-row>-->
    <!--<el-row :gutter="20">-->
      <!--<el-col :span="5"><div class="grid-content bg-purple">叶背面毛的多少</div></el-col>-->
      <!--<el-col :span="7"><div class="grid-content bg-purple">{{olddata.cultivar_name}}</div></el-col>-->
      <!--<el-col :span="5"><div class="grid-content bg-purple">叶先端形状</div></el-col>-->
      <!--<el-col :span="7"><div class="grid-content bg-purple">{{olddata.leaves_tip_shape}}</div></el-col>-->
    <!--</el-row>-->
    <!--<el-row :gutter="20">-->
      <!--<el-col :span="5"><div class="grid-content bg-purple">叶基部形状</div></el-col>-->
      <!--<el-col :span="7"><div class="grid-content bg-purple">{{olddata.leave_base_shapes}}</div></el-col>-->
      <!--<el-col :span="5"><div class="grid-content bg-purple">叶裂刻基部形状</div></el-col>-->
      <!--<el-col :span="7"><div class="grid-content bg-purple">{{olddata.leaves_cracked_base_shap}}</div></el-col>-->
    <!--</el-row>-->
    <!--<el-row :gutter="20">-->
      <!--<el-col :span="5"><div class="grid-content bg-purple">叶的一次裂刻</div></el-col>-->
      <!--<el-col :span="7"><div class="grid-content bg-purple">{{olddata.first_cracking_of_leaves}}</div></el-col>-->
      <!--<el-col :span="5"><div class="grid-content bg-purple">叶的二次裂刻</div></el-col>-->
      <!--<el-col :span="7"><div class="grid-content bg-purple">{{olddata.secondary_cracking_of_leaves}}</div></el-col>-->
    <!--</el-row>-->
    <!--<el-row :gutter="20">-->
      <!--<el-col :span="5"><div class="grid-content bg-purple">叶裂刻边缘重叠</div></el-col>-->
      <!--<el-col :span="7"><div class="grid-content bg-purple">{{olddata.leaves_crack_edge_overlapping}}</div></el-col>-->
      <!--<el-col :span="5"><div class="grid-content bg-purple">叶柄的着生角度</div></el-col>-->
      <!--<el-col :span="7"><div class="grid-content bg-purple">{{olddata.petiole_implantation_angle}}</div></el-col>-->
    <!--</el-row>-->
    <!--<el-row :gutter="20">-->
      <!--<el-col :span="5"><div class="grid-content bg-purple">托叶的有无</div></el-col>-->
      <!--<el-col :span="7"><div class="grid-content bg-purple">{{olddata.presence_of_stilt}}</div></el-col>-->
      <!--<el-col :span="5"><div class="grid-content bg-purple">托叶的分布</div></el-col>-->
      <!--<el-col :span="7"><div class="grid-content bg-purple">{{olddata.stipule_distribution}}</div></el-col>-->
    <!--</el-row>-->
    <!--<el-row :gutter="20">-->
      <!--<el-col :span="5"><div class="grid-content bg-purple">托叶形状</div></el-col>-->
      <!--<el-col :span="7"><div class="grid-content bg-purple">{{olddata.stipule_shape}}</div></el-col>-->
      <!--<el-col :span="5"><div class="grid-content bg-purple">托叶大小</div></el-col>-->
      <!--<el-col :span="7"><div class="grid-content bg-purple">{{olddata.stipule_size}}</div></el-col>-->
    <!--</el-row>-->
    <!--<el-row :gutter="20">-->
      <!--<el-col :span="5"><div class="grid-content bg-purple">纵向棱的明显程度</div></el-col>-->
      <!--<el-col :span="7"><div class="grid-content bg-purple">{{olddata.extent_of_the_longitudinal_edge}}</div></el-col>-->
      <!--<el-col :span="5"><div class="grid-content bg-purple">叶裂刻基部突起</div></el-col>-->
      <!--<el-col :span="7"><div class="grid-content bg-purple">{{olddata.leaf_cracking_base_protrusion}}</div></el-col>-->
    <!--</el-row>-->
    <!--<el-row :gutter="20">-->
      <!--<el-col :span="5"><div class="grid-content bg-purple">品种分类</div></el-col>-->
      <!--<el-col :span="7"><div class="grid-content bg-purple">{{olddata.classification_of_cultivar}}</div></el-col>-->
      <!--<el-col :span="5"><div class="grid-content bg-purple">花型</div></el-col>-->
      <!--<el-col :span="7"><div class="grid-content bg-purple">{{olddata.flower_type}}</div></el-col>-->
    <!--</el-row>-->
    <!--<el-row :gutter="20">-->
      <!--<el-col :span="5"><div class="grid-content bg-purple">花色系统</div></el-col>-->
      <!--<el-col :span="7"><div class="grid-content bg-purple">{{olddata.color_system}}</div></el-col>-->
      <!--<el-col :span="5"><div class="grid-content bg-purple">品种年代</div></el-col>-->
      <!--<el-col :span="7"><div class="grid-content bg-purple">{{olddata.age_of_cultivar}}</div></el-col>-->
    <!--</el-row>-->
  </div>
</template>
<script>
  let Base64 = require('js-base64').Base64;
    export default {
        name: "OldDetailInformation",
      data(){
          return {
            src:'',
            param:{
              id:"",
              customerHead: "",
            }
        }
      },
      props:['olddata','baseCode'],
      mounted(){
        // let _this = this
        // let files = Base64[0].base64
        // if (files.size/(1024*1024) > 2) {
        //   this.open('上传的图片不可大于2M！')
        //   return false;
        // }
        // var reader = new FileReader();
        // reader.onload = function (e) {
        //   var base64 = e.target.result;
        //   _this.param.customerHead = files
//console.log(base64)
//         }
//         if(files) {
//           reader.readAsDataURL(files);
//         }
      },
      watch:{
        baseCode: function () {
          console.log('cbasecode',this.baseCode)
          this.src = 'data:image/jpeg;base64,'+this.baseCode
        },
      }
    }
</script>

<style scoped>

  #picture{
    margin: 0 auto;
  }
  #list div{
    float: left;
    height: 50px;
    padding-left: 5%;
    padding-right: 5%;
  }
</style>
