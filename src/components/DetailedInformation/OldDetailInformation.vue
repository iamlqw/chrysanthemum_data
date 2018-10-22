<template>
  <div>
    <div id="picture">
  </div>
  <el-row :gutter="20">
    <el-col :span="5"><div class="grid-content bg-purple">基地编号</div></el-col>
    <el-col :span="7"><div class="grid-content bg-purple">{{newdata.field_id}}</div></el-col>
    <el-col :span="5"><div class="grid-content bg-purple">品种名</div></el-col>
    <el-col :span="7"><div class="grid-content bg-purple">{{newdata.cultivar_name}}</div></el-col>
  </el-row>
    <el-row :gutter="20">
      <el-col :span="5"><div class="grid-content bg-purple">植株高度</div></el-col>
      <el-col :span="7"><div class="grid-content bg-purple">{{newdata.plant_height}}</div></el-col>
      <el-col :span="5"><div class="grid-content bg-purple">节间长度</div></el-col>
      <el-col :span="7"><div class="grid-content bg-purple">{{newdata.internode_length}}</div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="5"><div class="grid-content bg-purple">茎粗度</div></el-col>
      <el-col :span="7"><div class="grid-content bg-purple">{{newdata.stem_width}}</div></el-col>
      <el-col :span="5"><div class="grid-content bg-purple">花茎大小</div></el-col>
      <el-col :span="7"><div class="grid-content bg-purple">{{newdata.flower_diameter}}</div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="5"><div class="grid-content bg-purple">筒状花全长</div></el-col>
      <el-col :span="7"><div class="grid-content bg-purple">{{newdata.disc_florets_length}}</div></el-col>
      <el-col :span="5"><div class="grid-content bg-purple">总苞片基部到花顶部的位置</div></el-col>
      <el-col :span="7"><div class="grid-content bg-purple">{{newdata.position_base_to_top}}</div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="5"><div class="grid-content bg-purple">筒状花部直径</div></el-col>
      <el-col :span="7"><div class="grid-content bg-purple">{{newdata.disc_florets_diameter}}</div></el-col>
      <el-col :span="5"><div class="grid-content bg-purple">筒状小花数</div></el-col>
      <el-col :span="7"><div class="grid-content bg-purple">{{newdata.disc_florets_num}}</div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="5"><div class="grid-content bg-purple">舌状小花数</div></el-col>
      <el-col :span="7"><div class="grid-content bg-purple">{{'eer'}}</div></el-col>
      <el-col :span="5"><div class="grid-content bg-purple">花瓣长度</div></el-col>
      <el-col :span="7"><div class="grid-content bg-purple">{{newdata.petal_length}}</div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="5"><div class="grid-content bg-purple">花瓣宽度</div></el-col>
      <el-col :span="7"><div class="grid-content bg-purple">{{newdata.petal_width}}</div></el-col>
      <el-col :span="5"><div class="grid-content bg-purple">花根长度</div></el-col>
      <el-col :span="7"><div class="grid-content bg-purple">{{newdata.pedicel_length}}</div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="5"><div class="grid-content bg-purple">花根粗度</div></el-col>
      <el-col :span="7"><div class="grid-content bg-purple">{{newdata.pedicel_width}}</div></el-col>
      <el-col :span="5"><div class="grid-content bg-purple">花托大小</div></el-col>
      <el-col :span="7"><div class="grid-content bg-purple">{{newdata.torus_size}}</div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="5"><div class="grid-content bg-purple">叶片长</div></el-col>
      <el-col :span="7"><div class="grid-content bg-purple">{{newdata.leaf_length}}</div></el-col>
      <el-col :span="5"><div class="grid-content bg-purple">叶片宽</div></el-col>
      <el-col :span="7"><div class="grid-content bg-purple">{{newdata.leaf_width }}</div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="5"><div class="grid-content bg-purple">叶片厚度</div></el-col>
      <el-col :span="7"><div class="grid-content bg-purple">{{newdata.leaf_thickness}}</div></el-col>
      <el-col :span="5"><div class="grid-content bg-purple">叶柄长</div></el-col>
      <el-col :span="7"><div class="grid-content bg-purple">{{newdata.setiole_length}}</div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="5"><div class="grid-content bg-purple">茎色</div></el-col>
      <el-col :span="7"><div class="grid-content bg-purple">{{newdata.stem_color}}</div></el-col>
      <el-col :span="5"><div class="grid-content bg-purple">茎的曲直性</div></el-col>
      <el-col :span="7"><div class="grid-content bg-purple">{{newdata.stem_curvature }}</div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="5"><div class="grid-content bg-purple">茎强度</div></el-col>
      <el-col :span="7"><div class="grid-content bg-purple">{{newdata.stem_intension}}</div></el-col>
      <el-col :span="5"><div class="grid-content bg-purple">花瓣先端形状</div></el-col>
      <el-col :span="7"><div class="grid-content bg-purple">{{newdata.petal_tip_shape}}</div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="5"><div class="grid-content bg-purple">花蕾的形状</div></el-col>
      <el-col :span="7"><div class="grid-content bg-purple">{{newdata.bud_shape}}</div></el-col>
      <el-col :span="5"><div class="grid-content bg-purple">花中心部颜色</div></el-col>
      <el-col :span="7"><div class="grid-content bg-purple">{{newdata.flower_center_color}}</div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="5"><div class="grid-content bg-purple">花盘颜色</div></el-col>
      <el-col :span="7"><div class="grid-content bg-purple">{{newdata.flower_disc_color}}</div></el-col>
      <el-col :span="5"><div class="grid-content bg-purple">外花瓣表面颜色</div></el-col>
      <el-col :span="7"><div class="grid-content bg-purple">{{newdata.outer_petals_surface_color}}</div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="5"><div class="grid-content bg-purple">外花瓣背面颜色</div></el-col>
      <el-col :span="7"><div class="grid-content bg-purple">{{newdata.outer_petals_back_color}}</div></el-col>
      <el-col :span="5"><div class="grid-content bg-purple">外花瓣的角度</div></el-col>
      <el-col :span="7"><div class="grid-content bg-purple">{{newdata.outer_petals_angle}}</div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="5"><div class="grid-content bg-purple">外花瓣曲反状况</div></el-col>
      <el-col :span="7"><div class="grid-content bg-purple">{{newdata.outer_petals_curvature}}</div></el-col>
      <el-col :span="5"><div class="grid-content bg-purple">内花瓣曲反状况</div></el-col>
      <el-col :span="7"><div class="grid-content bg-purple">{{newdata.inner_petals_curvature}}</div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="5"><div class="grid-content bg-purple">舌状花表面色彩分布</div></el-col>
      <el-col :span="7"><div class="grid-content bg-purple">{{newdata.ray_florets_surface_color_distribution}}</div></el-col>
      <el-col :span="5"><div class="grid-content bg-purple">舌状花的重瓣性</div></el-col>
      <el-col :span="7"><div class="grid-content bg-purple">{{newdata.ray_florets_flaps}}</div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="5"><div class="grid-content bg-purple">筒状小花的分布</div></el-col>
      <el-col :span="7"><div class="grid-content bg-purple">{{newdata.distribution_of_disc_florets}}</div></el-col>
      <el-col :span="5"><div class="grid-content bg-purple">总苞片的位置</div></el-col>
      <el-col :span="7"><div class="grid-content bg-purple">{{newdata.total_bracts_position}}</div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="5"><div class="grid-content bg-purple">花的香气类型</div></el-col>
      <el-col :span="7"><div class="grid-content bg-purple">{{newdata.aroma_type_of_flowers}}</div></el-col>
      <el-col :span="5"><div class="grid-content bg-purple">花托形状</div></el-col>
      <el-col :span="7"><div class="grid-content bg-purple">{{newdata.torus_shape}}</div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="5"><div class="grid-content bg-purple">叶表面色</div></el-col>
      <el-col :span="7"><div class="grid-content bg-purple">{{newdata.leaves_surface_color}}</div></el-col>
      <el-col :span="5"><div class="grid-content bg-purple">叶面光泽</div></el-col>
      <el-col :span="7"><div class="grid-content bg-purple">{{newdata.leaves_gloss}}</div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="5"><div class="grid-content bg-purple">叶面的平整程度</div></el-col>
      <el-col :span="7"><div class="grid-content bg-purple">{{newdata.leaves_leveling_degree}}</div></el-col>
      <el-col :span="5"><div class="grid-content bg-purple">叶身卷曲程度</div></el-col>
      <el-col :span="7"><div class="grid-content bg-purple">{{newdata.leaves_curl_degree}}</div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="5"><div class="grid-content bg-purple">叶片硬度</div></el-col>
      <el-col :span="7"><div class="grid-content bg-purple">{{newdata.blade_hardness}}</div></el-col>
      <el-col :span="5"><div class="grid-content bg-purple">叶背面色</div></el-col>
      <el-col :span="7"><div class="grid-content bg-purple">{{newdata.leaves_back_color}}</div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="5"><div class="grid-content bg-purple">叶背面毛的多少</div></el-col>
      <el-col :span="7"><div class="grid-content bg-purple">{{newdata.cultivar_name}}</div></el-col>
      <el-col :span="5"><div class="grid-content bg-purple">叶先端形状</div></el-col>
      <el-col :span="7"><div class="grid-content bg-purple">{{newdata.leaves_tip_shape}}</div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="5"><div class="grid-content bg-purple">叶基部形状</div></el-col>
      <el-col :span="7"><div class="grid-content bg-purple">{{newdata.leave_base_shapes}}</div></el-col>
      <el-col :span="5"><div class="grid-content bg-purple">叶裂刻基部形状</div></el-col>
      <el-col :span="7"><div class="grid-content bg-purple">{{newdata.leaves_cracked_base_shap}}</div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="5"><div class="grid-content bg-purple">叶的一次裂刻</div></el-col>
      <el-col :span="7"><div class="grid-content bg-purple">{{newdata.first_cracking_of_leaves}}</div></el-col>
      <el-col :span="5"><div class="grid-content bg-purple">叶的二次裂刻</div></el-col>
      <el-col :span="7"><div class="grid-content bg-purple">{{newdata.secondary_cracking_of_leaves}}</div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="5"><div class="grid-content bg-purple">叶裂刻边缘重叠</div></el-col>
      <el-col :span="7"><div class="grid-content bg-purple">{{newdata.leaves_crack_edge_overlapping}}</div></el-col>
      <el-col :span="5"><div class="grid-content bg-purple">叶柄的着生角度</div></el-col>
      <el-col :span="7"><div class="grid-content bg-purple">{{newdata.petiole_implantation_angle}}</div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="5"><div class="grid-content bg-purple">托叶的有无</div></el-col>
      <el-col :span="7"><div class="grid-content bg-purple">{{newdata.presence_of_stilt}}</div></el-col>
      <el-col :span="5"><div class="grid-content bg-purple">托叶的分布</div></el-col>
      <el-col :span="7"><div class="grid-content bg-purple">{{newdata.stipule_distribution}}</div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="5"><div class="grid-content bg-purple">托叶形状</div></el-col>
      <el-col :span="7"><div class="grid-content bg-purple">{{newdata.stipule_shape}}</div></el-col>
      <el-col :span="5"><div class="grid-content bg-purple">托叶大小</div></el-col>
      <el-col :span="7"><div class="grid-content bg-purple">{{newdata.stipule_size}}</div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="5"><div class="grid-content bg-purple">纵向棱的明显程度</div></el-col>
      <el-col :span="7"><div class="grid-content bg-purple">{{newdata.extent_of_the_longitudinal_edge}}</div></el-col>
      <el-col :span="5"><div class="grid-content bg-purple">叶裂刻基部突起</div></el-col>
      <el-col :span="7"><div class="grid-content bg-purple">{{newdata.leaf_cracking_base_protrusion}}</div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="5"><div class="grid-content bg-purple">品种分类</div></el-col>
      <el-col :span="7"><div class="grid-content bg-purple">{{newdata.classification_of_cultivar}}</div></el-col>
      <el-col :span="5"><div class="grid-content bg-purple">花型</div></el-col>
      <el-col :span="7"><div class="grid-content bg-purple">{{newdata.flower_type}}</div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="5"><div class="grid-content bg-purple">花色系统</div></el-col>
      <el-col :span="7"><div class="grid-content bg-purple">{{newdata.color_system}}</div></el-col>
      <el-col :span="5"><div class="grid-content bg-purple">品种年代</div></el-col>
      <el-col :span="7"><div class="grid-content bg-purple">{{newdata.age_of_cultivar}}</div></el-col>
    </el-row>
  </div>
</template>
<script>
    export default {
        name: "OldDetailInformation",
      data(){
          return {
          lookupform:{
            field_id: ''
          }
        }
      },
      props:['newdata']

    }
</script>

<style scoped>
  .el-row {
    margin-bottom: 20px;
  &:last-child {
     margin-bottom: 0;
   }
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
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
