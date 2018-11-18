<template>
  <div>
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item  id="list" title="基本信息：" name="1">
        <table width="100%">
          <tr>
            <td><div>基地编号:{{}}</div></td>
            <td><div>品种名:{{}}</div></td>
            <td><div>每个品种的植株编号:{{}}</div></td>
          </tr>
        </table>
      </el-collapse-item>
      <el-collapse-item  id="list" title="均值与方差：" name="2">
        <table width="100%">
          <tr>
            <td><div>R均值:{{}}</div></td>
            <td><div>R方差:{{}}</div></td>
          </tr>
          <tr>
            <td><div>G均值:{{}}</div></td>
            <td><div>G方差:{{}}</div></td>
          </tr>
          <tr>
            <td><div>B均值:{{}}</div></td>
            <td><div>B方差:{{}}</div></td>
          </tr>
          <tr>
            <td><div>H均值:{{}}</div></td>
            <td><div>H方差:{{}}</div></td>
          </tr>
          <tr>
            <td><div>S均值:{{}}</div></td>
            <td><div>S方差:{{}}</div></td>
          </tr>
          <tr>
            <td><div>V均值:{{}}</div></td>
            <td><div>V方差:{{}}</div></td>
          </tr>
          <tr>
            <td><div>L均值:{{}}</div></td>
            <td><div>L方差:{{}}</div></td>
          </tr>
          <tr>
            <td><div>a均值:{{}}</div></td>
            <td><div>a方差:{{}}</div></td>
          </tr>
          <tr>
            <td><div>b均值:{{}}</div></td>
            <td><div>b方差:{{}}</div></td>
          </tr>
          <tr>
            <td><div>均值:{{}}</div></td>
            <td><div> 标准差:{{}}</div></td>
          </tr>
        </table>
      </el-collapse-item>
      <el-collapse-item  id="list" title="基本信息：" name="3">
        <table width="100%">
          <tr>
            <td><div>平滑度:{{}}</div></td>
            <td><div>三阶矩:{{}}</div></td>
            <td><div>一致性:{{}}</div></td>
          </tr>
          <tr>
            <td><div>熵:{{}}</div></td>
            <td><div>菊花面积:{{}}</div></td>
            <td><div>周长/面积:{{}}</div></td>
          </tr>
          <tr>
            <td><div>分型维数:{{}}</div></td>
            <td><div>凸包面积:{{}}</div></td>
            <td><div>菊花面积/凸包面积:{{}}</div></td>
          </tr>
          <tr>
            <td><div>重心x:{{}}</div></td>
            <td><div>重心y:{{}}</div></td>
            <td><div>外接矩形宽度:{{}}</div></td>
          </tr>
          <tr>
            <td><div>外接矩形高度:{{}}</div></td>
            <td><div>外接矩形宽度/高度:{{}}</div></td>
            <td><div>菊花面积/外接矩形面积:{{}}</div></td>
          </tr>
          <tr>
            <td><div>斜外接矩形长:{{}}</div></td>
            <td><div>斜外接矩形宽:{{}}</div></td>
            <td><div>斜外接矩形面积:{{}}</div></td>
          </tr>
          <tr>
            <td><div>外接圆圆心x:{{}}</div></td>
            <td><div>外接圆圆心y:{{}}</div></td>
            <td><div>菊花半径:{{}}</div></td>
          </tr>
          <tr>
            <td><div>外接圆面积:{{}}</div></td>
            <td><div>菊花面积/外接圆面积:{{}}</div></td>
          </tr>
        </table>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
    export default {
        name: "NewDetailInformation"
    }
</script>

<style scoped>
  #list div{
    margin-left: 5%;
  }
</style>
