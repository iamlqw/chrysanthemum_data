<template>
  <div id="main">
    <!--<div id="button">-->
    <!--<el-button type="primary" @click="add">添加</el-button>-->
    <!--<el-dialog title="添加信息" :visible.sync="dialogAddFormVisible">-->
    <!--<el-form :model="addform">-->
    <!--<el-form-item label="基地编号" :label-width="formLabelWidth">-->
    <!--<el-input v-model="addform.field_id" autocomplete="off"></el-input>-->
    <!--</el-form-item>-->
    <!--<div slot="footer" class="dialog-footer">-->
    <!--<el-button @click="dialogLoginFormVisible = false">取 消</el-button>-->
    <!--<el-button type="primary" @click="dialogLoginFormVisible = false">确 定</el-button>-->
    <!--</div>-->
    <!--</el-form>-->
    <!--</el-dialog>-->
    <!--</div>-->
    <el-button type="primary" @click="Jump()" plain>旧数据</el-button>
    <div id="table">
      <p style="text-align: center;font-size: 40px">新数据列表</p>
      <el-table
        id="table"
        :data="list.slice((currentPage-1)*pagesize,currentPage*pagesize)"
        border
        style="width: 100%">
        <el-table-column
          prop="cultivar_id"
          label="品种id">
        </el-table-column>
        <el-table-column
          prop="cultivar_name"
          label="品种名">
        </el-table-column>
        <el-table-column
          prop="pic_date"
          label="拍摄日期">
        </el-table-column>
        <el-table-column
          prop="angle"
          label="拍摄角度">
        </el-table-column>
        <el-table-column
          prop="plant_id"
          label="植株号">
        </el-table-column>
        <el-table-column
          prop="revolution_num"
          label="旋转次数">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作">
          <template slot-scope="scope">
            <el-button type="text" size="small">查看原图</el-button>
            <el-button type="text" size="small">LBP图像</el-button>
            <el-button type="text" size="small">查看数据</el-button>
            <el-button type="text" size="small">获取数据</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination id="pagination"
                     @current-change="handleCurrentChange"
                     @size-change="handleSizeChange"
                     :page-sizes="[5, 10, 20, 40]"
                     :page-size="pagesize"
                     layout="total, sizes, prev, pager, next, jumper"
                     :total="list.length">
      </el-pagination>
    </div>
    <!--<el-dialog title="查找信息" width="70%" :visible.sync="dialogLookupFormVisible">-->
      <!--&lt;!&ndash;<v-old :olddata="olddata":baseCode="baseCode"></v-old>&ndash;&gt;-->
      <!--<v-old :olddata="olddata":baseCode="baseCode"></v-old>-->
    <!--</el-dialog>-->
  </div>
</template>

<script>
  import VueEvent from '../../model/VueEvent.js'
    export default {
        name: "NewDataList",
        data(){
          return{
            list:[],
            pagesize: 5,
            currentPage:1,
            total:0,
          }
        },
        methods: {
          //跳转
          Jump(){
            this.$router.push({path:'olddatalist'})
          },
          //换页
          handleCurrentChange(val){
            this.currentPage = val;
          },
          //改变页尺寸
          handleSizeChange(val){
            this.pagesize = val;
          }
        },
      mounted(){
        var _this = this;//this指代当前对象，在VueEvent内部为VueEvent
        //接收新数据（输入框）
        VueEvent.$on('data-to-newlist',function (data) {
          console.log('newtolist',data)
          _this.list = data
          _this.total = this.list.length
          console.log('list',this.list)
        })
        //接收新数据（索引表）
        // VueEvent.$on('index-to-newlist',function (data) {
        //   console.log('tolist',data)
        //   _this.list = data
        //   _this.total = this.list.length
        //   console.log('list',this.list)
        // })
        this.$axios.get('/api/currentuser').then(res => {
          this.email = res.data.data[0]
        })
      },
    }
</script>

<style scoped>
  #button{
    float: right;
    width: 30%;
  }
  #table{
    margin: 0 auto;
    width: 90%;
  }
  #pagination{
    text-align:center;
    margin-top:30px;
  }
</style>
