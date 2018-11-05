<template>
  <div id="main">
    <div id="button">
      <!--<el-button type="primary" @click="add">添加</el-button>-->

      <el-dialog title="添加信息" :visible.sync="dialogAddFormVisible">
        <el-form :model="addform">
          <el-form-item label="基地编号" :label-width="formLabelWidth">
            <el-input v-model="addform.field_id" autocomplete="off"></el-input>
          </el-form-item>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogLoginFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogLoginFormVisible = false">确 定</el-button>
          </div>
        </el-form>
      </el-dialog>
    </div>
    <div id="table">
      <el-table id="table"
        :data="list.slice((currentPage-1)*pagesize,currentPage*pagesize)"
        border
        style="width: 100%">
        <el-table-column
          prop="cultivar_name"
          label="品种名">
        </el-table-column>
        <el-table-column
          prop="classification_of_cultivar"
          label="品种分类">
        </el-table-column>
        <el-table-column
          prop="color_system"
          label="花色系统">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">详细信息</el-button>
            <el-button type="text" size="small">编辑</el-button>
            <el-button @click="downloadClick(scope.row)" type="text" size="small">邮件接收数据</el-button>
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
    <el-dialog title="查找信息" width="70%" :visible.sync="dialogLookupFormVisible">
      <v-old :olddata="olddata":baseCode="baseCode"></v-old>
    </el-dialog>
  </div>

</template>

<script>
  let Base64 = require('js-base64').Base64;
  import VueEvent from '../model/VueEvent.js'
  import OldDetailInformation from '../components/DetailedInformation/OldDetailInformation'
    export default {
      name: "DataList",
      data() {
        return {
          email:'',
          list:[],
          dialogAddFormVisible: false,
          olddata: [],
          baseCodeData: [],
          baseCode: [],
          addform:{
            field_id: ''
          },
          dialogLookupFormVisible: false,
          //分页数据
          pagesize: 5,
          currentPage:1,
          total:0,
        }
      },
      components: {
        'v-old': OldDetailInformation
      },
      methods:{
        handleClick(row) {//详细信息
          console.log('currentemail', this.email)
          console.log('row',row)
          this.olddata=row
            this.$axios({
              method: 'post',
              url: '/api/picprocess',
              data: {
                email: this.email,
                cultivar_id: [row.id]
              }
            }).then(res => {
              console.log('baseCode', res.data.pic['cultivar'+row.id][0].length)
              for(var i=0;i<res.data.pic['cultivar'+row.id][0].length;i++){
                this.baseCodeData[i]=res.data.pic['cultivar'+row.id][0][i].base64
              }
              this.baseCode=this.baseCodeData//由于监听器监听baseCode，只能让baseCode改变一次
            })
          this.dialogLookupFormVisible = true
        },
        downloadClick(row){//图片打包下载
          console.log('currentemail', this.email)
          this.$axios({
            method: 'post',
            url: '/api/sendemail',
            data: {
              email: this.email,
              classification: 'artificial',
              id:[row.id],
              quality:'high',
              type:'download'
            }
          }).then(res => {
            console.log('sendemail', res.data)

          })
          // this.$axios({
          //   method:'get',
          //   url: '/api/download'
          // }).then(res => {
          //   console.log('哈哈哈哈')
          // })
        },
        // add(){
        //   alert(this.email)
        // },
        handleCurrentChange(val){
          this.currentPage = val;
        },
        handleSizeChange(val){
          this.pagesize = val;
        }
      },
      props:['result'],
      mounted(){
        var _this = this;//this指代当前对象，在VueEvent内部为VueEvent
        VueEvent.$on('to-list',function (data) {
          console.log('tolist',data)
          _this.list = data
          _this.total = this.list.length
          console.log('list',this.list)
        })
        this.$axios.get('/api/currentuser').then(res => {
          this.email = res.data.data[0]
        })
      },
      watch: {
        result: function () {
          console.log('result',this.result.length)
          this.list = this.result
          this.total = this.list.length
          console.log('total',this.total)
        },
      }

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
