<template>
  <div>
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item  id="list" title="基本信息：" name="1">
        <table width="100%">
          <tr>
            <!--<td><div>基地编号:{{}}</div></td>-->
            <td><div>品种名:{{data.cultivar_name}}</div></td>
            <td><div>每个品种的植株编号:{{data.plant_id}}</div></td>
          </tr>
        </table>
      </el-collapse-item>
      <el-collapse-item  id="list" title="均值与方差：" name="2">
        <table width="100%">
          <tr>
            <td><div>R均值:{{data.R_avg}}</div></td>
            <td><div>R方差:{{data.R_var}}</div></td>
          </tr>
          <tr>
            <td><div>G均值:{{data.G_avg}}</div></td>
            <td><div>G方差:{{data.G_var}}</div></td>
          </tr>
          <tr>
            <td><div>B均值:{{data.B_avg}}</div></td>
            <td><div>B方差:{{data.B_var}}</div></td>
          </tr>
          <tr>
            <td><div>H均值:{{data.H_avg}}</div></td>
            <td><div>H方差:{{data.H_var}}</div></td>
          </tr>
          <tr>
            <td><div>S均值:{{data.S_avg}}</div></td>
            <td><div>S方差:{{data.S_var}}</div></td>
          </tr>
          <tr>
            <td><div>V均值:{{data.V_avg}}</div></td>
            <td><div>V方差:{{data.V_var}}</div></td>
          </tr>
          <tr>
            <td><div>L均值:{{data.L_avg}}</div></td>
            <td><div>L方差:{{data.L_var}}</div></td>
          </tr>
          <tr>
            <td><div>a均值:{{data.a_avg}}</div></td>
            <td><div>a方差:{{data.a_var}}</div></td>
          </tr>
          <tr>
            <td><div>b均值:{{data.b_avg}}</div></td>
            <td><div>b方差:{{data.b_var}}</div></td>
          </tr>
          <tr>
            <td><div>均值:{{data.avg}}</div></td>
            <td><div> 标准差:{{data.standard_dev}}</div></td>
          </tr>
        </table>
      </el-collapse-item>
      <el-collapse-item  id="list" title="基本信息：" name="3">
        <table width="100%">
          <tr>
            <td><div>平滑度:{{data.smoothness}}</div></td>
            <td><div>三阶矩:{{data.third_moment}}</div></td>
          </tr>
          <tr>
            <td><div>一致性:{{data.consistency}}</div></td>
            <td><div>熵:{{data.entropy}}</div></td>
          </tr>
          <tr>
            <td><div>!菊花面积:{{data.chrysanthemum_area}}</div></td>
            <td><div>周长/面积:{{data.perimeter_ratio_area}}</div></td>
          </tr>
          <tr>
            <td><div>分型维数:{{data.partition_dimension}}</div></td>
            <td><div>凸包面积:{{data.chrysanthemum_area_ration_convex_hull_area}}</div></td>
          </tr>
          <tr>
            <td><div>菊花面积/凸包面积:{{data.chrysanthemum_area/data.chrysanthemum_area_ration_convex_hull_area}}</div></td>
            <td><div>重心x:{{data.g_x}}</div></td>
          </tr>
          <tr>
            <td><div>重心y:{{data.g_y}}</div></td>
            <td><div>外接矩形宽度:{{data.external_rectangle_width}}</div></td>
          </tr>
          <tr>
            <td><div>外接矩形高度:{{data.external_rectangle_height}}</div></td>
            <td><div>外接矩形宽度/高度:{{data.external_rectangle_width_ratio_height}}</div></td>
          </tr>
          <tr>
            <td><div>菊花面积/外接矩形面积:{{data.chrysanthemum_area_ratio_external_rectangular_area }}</div></td>
            <td><div>斜外接矩形长:{{data.oblique_circumscribed_rectangle_length}}</div></td>
          </tr>
          <tr>
            <td><div>斜外接矩形宽:{{data.oblique_circumscribed_rectangle_width}}</div></td>
            <td><div>斜外接矩形面积:{{data.oblique_circumscribed_rectangule_area}}</div></td>
          </tr>
          <tr>
            <td><div>外接圆圆心x:{{data.external_circle_center_x}}</div></td>
            <td><div>外接圆圆心y:{{data.external_circle_center_y}}</div></td>
          </tr>
          <tr>
            <td><div>菊花半径:{{data.daisy_radius}}</div></td>
            <td><div>外接圆面积:{{data.external_circle_area}}</div></td>
          </tr>
          <tr>
            <td><div>菊花面积/外接圆面积:{{data.chrysanthemum_area/data.external_circle_area}}</div></td>
          </tr>
        </table>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
    export default {
        name: "NewDetailInformation",
        props:['data']
    }
</script>

<style scoped>
  #list div{
    margin-left: 5%;
  }
</style>
