<template>
  <div>
    <div id="picture">
  </div>
  <el-row :gutter="20">
    <el-col :span="5"><div class="grid-content bg-purple">基地编号</div></el-col>
    <el-col :span="7"><div class="grid-content bg-purple"></div></el-col>
    <el-col :span="5"><div class="grid-content bg-purple">品种名</div></el-col>
    <el-col :span="7"><div class="grid-content bg-purple"></div></el-col>
  </el-row>
    <el-row :gutter="20">
      <el-col :span="5"><div class="grid-content bg-purple">植株高度</div></el-col>
      <el-col :span="7"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="5"><div class="grid-content bg-purple">节间长度</div></el-col>
      <el-col :span="7"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="5"><div class="grid-content bg-purple">茎粗度</div></el-col>
      <el-col :span="7"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="5"><div class="grid-content bg-purple">花茎大小</div></el-col>
      <el-col :span="7"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="5"><div class="grid-content bg-purple">筒状花全长</div></el-col>
      <el-col :span="7"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="5"><div class="grid-content bg-purple">总苞片基部到花顶部的位置</div></el-col>
      <el-col :span="7"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="5"><div class="grid-content bg-purple">筒状花部直径</div></el-col>
      <el-col :span="7"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="5"><div class="grid-content bg-purple">筒状小花数</div></el-col>
      <el-col :span="7"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="5"><div class="grid-content bg-purple">舌状小花数</div></el-col>
      <el-col :span="7"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="5"><div class="grid-content bg-purple">花瓣长度</div></el-col>
      <el-col :span="7"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="5"><div class="grid-content bg-purple">花瓣宽度</div></el-col>
      <el-col :span="7"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="5"><div class="grid-content bg-purple">花根长度</div></el-col>
      <el-col :span="7"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="5"><div class="grid-content bg-purple">花根粗度</div></el-col>
      <el-col :span="7"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="5"><div class="grid-content bg-purple">花瓣长度</div></el-col>
      <el-col :span="7"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="5"><div class="grid-content bg-purple">舌状小花数</div></el-col>
      <el-col :span="7"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="5"><div class="grid-content bg-purple">花瓣长度</div></el-col>
      <el-col :span="7"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="5"><div class="grid-content bg-purple">舌状小花数</div></el-col>
      <el-col :span="7"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="5"><div class="grid-content bg-purple">花瓣长度</div></el-col>
      <el-col :span="7"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="5"><div class="grid-content bg-purple">舌状小花数</div></el-col>
      <el-col :span="7"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="5"><div class="grid-content bg-purple">花瓣长度</div></el-col>
      <el-col :span="7"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="5"><div class="grid-content bg-purple">舌状小花数</div></el-col>
      <el-col :span="7"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="5"><div class="grid-content bg-purple">花瓣长度</div></el-col>
      <el-col :span="7"><div class="grid-content bg-purple"></div></el-col>
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
      }

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
