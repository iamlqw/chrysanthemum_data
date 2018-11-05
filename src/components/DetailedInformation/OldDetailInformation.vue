<template>
  <div>
    <div id="picture">
      <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="item in src.length" :key="item">
          <!--<h2>{{item}}</h2>-->
          <img :onerror="errpic" class="customerHead" :src="src[item]" width="420" height="420">
        </el-carousel-item>
      </el-carousel>
    </div>
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item  id="list" title="基本信息：" name="1">
        <table width="100%">
          <tr>
            <td><div>基地编号:{{olddata.field_id}}</div></td>
            <td><div>品种名:{{olddata.cultivar_name}}</div></td>
            <td><div>植株高度:{{olddata.plant_height}}cm</div></td>
          </tr>
          <tr>
            <td><div>筒状花全长：{{olddata.disc_florets_length}}</div></td>
            <td><div>节间长度:{{olddata.internode_length}}cm</div></td>
            <td><div>总苞片基部到花顶部的位置：{{olddata.position_base_to_top}}</div></td>
          </tr>
          <tr>
          <td><div>品种分类:{{olddata.classification_of_cultivar}}</div></td>
          <td><div>品种年代:{{olddata.age_of_cultivar}}</div></td>
          </tr>
        </table>
      </el-collapse-item>
      <el-collapse-item id="list" title="花：" name="2">
        <table width="100%">
          <tr>
            <td><div>筒状花部直径：{{olddata.disc_florets_diameter}}</div></td>
            <td><div>筒状小花数：{{olddata.disc_florets_num}}</div></td>
            <td><div>舌状小花数：{{olddata.ray_florets_num}}</div></td>
          </tr>
          <tr>
            <td><div>花瓣长度：{{olddata.petal_length}}</div></td>
            <td><div>花瓣宽度：{{olddata.petal_width}}</div></td>
            <td><div>花根长度：{{olddata.pedicel_length}}</div></td>
          </tr>
          <tr>
            <td><div>花根粗度：{{olddata.pedicel_width}}</div></td>
            <td><div>花托大小：{{olddata.torus_size}}</div></td>
            <td><div>花瓣先端形状：{{olddata.petal_tip_shape}}</div></td>
          </tr>
          <tr>
            <td><div>花蕾的形状：{{olddata.bud_shape}}</div></td>
            <td><div>花中心部颜色：{{olddata.flower_center_color}}</div></td>
            <td><div>花盘颜色：{{olddata.flower_disc_color}}</div></td>
          </tr>
          <tr>
            <td><div>外花瓣表面颜色：{{olddata.outer_petals_surface_color}}</div></td>
            <td><div>外花瓣背面颜色：{{olddata.outer_petals_back_color}}</div></td>
            <td><div>外花瓣的角度：{{olddata.outer_petals_angle}}</div></td>
          </tr>
          <tr>
            <td><div>外花瓣曲反状况：{{olddata.outer_petals_curvature}}</div></td>
            <td><div>内花瓣曲反状况：{{olddata.inner_petals_curvature}}</div></td>
            <td><div>舌状花表面色彩分布：{{olddata.ray_florets_surface_color_distribution}}</div></td>
          </tr>
          <tr>
            <td><div>舌状花的重瓣性：{{olddata.ray_florets_flaps}}</div></td>
            <td><div>筒状小花的分布：{{olddata.distribution_of_disc_florets}}</div></td>
            <td><div>总苞片的位置：{{olddata.total_bracts_position}}</div></td>
          </tr>
          <tr>
            <td><div>花的香气类型：{{olddata.aroma_type_of_flowers}}</div></td>
            <td><div>花托形状：{{olddata.torus_shape}}</div></td>
          </tr>
          <tr>
          <td><div>花型:{{olddata.flower_type}}</div></td>
          <td><div>花色系统:{{olddata.color_system}}</div></td>
          </tr>
        </table>
      </el-collapse-item>
      <el-collapse-item id="list" title="叶" name="3">
        <table width="100%">
          <tr>
            <td><div>叶片长：{{olddata.leaf_length}}</div></td>
            <td><div>叶片宽：{{olddata.leaf_width }}</div></td>
            <td><div>叶片厚度：{{olddata.leaf_thickness}}</div></td>
          </tr>
          <tr>
            <td><div>叶柄长：{{olddata.setiole_length}}</div></td>
            <td><div>叶柄长/叶片长 ：{{(olddata.setiole_length/olddata.leaf_length).toFixed(3)}}</div></td>
            <td><div>叶的长宽比 ：{{(olddata.leaf_length/olddata.leaf_width).toFixed(3)}}</div></td>
          </tr>
          <tr>
            <td><div>叶表面色：{{olddata.leaves_surface_color}}</div></td>
            <td><div>叶面光泽：{{olddata.leaves_gloss}}</div></td>
            <td><div>叶面的平整程度：{{olddata.leaves_leveling_degree}}</div></td>
          </tr>
          <tr>
            <td><div>叶身卷曲程度：{{olddata.leaves_curl_degree}}</div></td>
            <td><div>叶片硬度：{{olddata.blade_hardness}}</div></td>
            <td><div>叶背面色：{{olddata.leaves_back_color}}</div></td>
          </tr>
          <tr>
            <td><div>叶先端形状：{{olddata.leaves_tip_shape}}</div></td>
            <td><div>叶基部形状：{{olddata.leave_base_shapes}}</div></td>
            <td><div>叶裂刻基部形状：{{olddata.leaves_cracked_base_shap}}</div></td>
          </tr>
          <tr>
            <td><div>叶的一次裂刻：{{olddata.first_cracking_of_leaves}}</div></td>
            <td><div>叶背面毛的多少：{{olddata.number_of_hair_on_the_back_of_the_leaves}}</div></td>
            <td><div>叶的二次裂刻：{{olddata.secondary_cracking_of_leaves}}</div></td>
          </tr>
          <tr>
            <td><div>叶裂刻边缘重叠：{{olddata.leaves_crack_edge_overlapping}}</div></td>
            <td><div>叶柄的着生角度：{{olddata.petiole_implantation_angle}}</div></td>
            <td><div>托叶的有无：{{olddata.presence_of_stilt}}</div></td>
          </tr>
          <tr>
            <td><div>托叶的分布：{{olddata.stipule_distribution}}</div></td>
            <td><div>托叶形状：{{olddata.stipule_shape}}</div></td>
            <td><div>托叶大小：{{olddata.stipule_size}}</div></td>
          </tr>
          <tr>
            <td><div>纵向棱的明显程度:{{olddata.extent_of_the_longitudinal_edge}}</div></td>
            <td><div>叶裂刻基部突起:{{olddata.leaf_cracking_base_protrusion}}</div></td>
            <td><div></div></td>
          </tr>
        </table>
      </el-collapse-item>
      <el-collapse-item id="list" title="茎" name="4">
        <table width="100%">
        <tr>
          <td><div>茎粗度:{{olddata.stem_width}}cm</div></td>
          <td><div>花茎大小：{{olddata.flower_diameter}}</div></td>
          <td><div>茎色：{{olddata.stem_color}}</div></td>
        </tr>
        <tr>
          <td><div>茎的曲直性：{{olddata.stem_curvature}}</div></td>
          <td><div>茎强度：{{olddata.stem_intension}}</div></td>
          <td></td>
        </tr>
        </table>
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
      <!--<el-col :span="7"><div class="grid-content bg-purple">{{olddata.ray_florets_num}}</div></el-col>-->
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
      <!--<el-col :span="7"><div class="grid-content bg-purple">{{olddata.number_of_hair_on_the_back_of_the_leaves}}</div></el-col>-->
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
  import IndexTable from "../IndexTable/NewIndexTable";
  let Base64 = require('js-base64').Base64;
    export default {
        name: "OldDetailInformation",
      components: {IndexTable},
      data(){
          return {
            src:[],
            param:{
              id:"",
              customerHead: "",
            }
        }
      },
      props:['olddata','baseCode'],
      mounted(){
      },
      watch:{
        baseCode: function () {
          for (var i=0;i<this.baseCode.length;i++){
            this.src[i] = 'data:image/jpeg;base64,'+this.baseCode[i]
          }
          console.log('src',this.src)
        },
      }
    }
</script>

<style scoped>

  #picture{
    margin: 0 auto;
  }
  #list div{
    padding-left: 5%;
  }
</style>
