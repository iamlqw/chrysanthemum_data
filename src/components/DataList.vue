<template>
  <div id="main">
    <div id="button">
      <el-button type="primary" @click="add">添加</el-button>

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
      <el-table
        :data="list"
        border
        style="width: 80%">
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
          label="详情">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>

            <el-button type="text" size="small">编辑</el-button>
            <el-button @click="downloadClick(scope.row)" type="text" size="small">下载</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        :page-size="2"
        :pager-count="11"
        layout="prev, pager, next"
        :total="1000">
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
          baseCode: '',
          addform:{
            field_id: ''
          },
          dialogLookupFormVisible: false,
          pagesize: 10,
        }
      },
      components: {
        'v-old': OldDetailInformation
      },
      methods:{
        handleClick(row) {
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
              //console.log('baseCode', res.data.pic['cultivar'+row.id][0][0].base64)
              this.baseCode=res.data.pic['cultivar'+row.id][0][0].base64
            })
          this.dialogLookupFormVisible = true
        },
        downloadClick(row){
          console.log('currentemail', this.email)
          this.$axios({
            method: 'post',
            url: '/api/sendemail',
            data: {
              email: this.email,
              classification: 'artificial',
              id:[row.id],
              quality:'high'
            }
          }).then(res => {
            console.log('sendemail', res.data)

          })
        },
        add(){
          alert(this.email)
        }
      },
      props:['result'],
      mounted(){
        var _this = this;//this指代当前对象，在VueEvent内部为VueEvent
        VueEvent.$on('to-list',function (data) {
          console.log('tolist',data)
          _this.list = data
          console.log('list',this.list)
        })
        this.$axios.get('/api/currentuser').then(res => {
          this.email = res.data.data[0]
        })
      },
      watch: {
        result: function () {
          console.log('result',this.result)
          this.list = this.result
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
    float: right;
    width: 90%;
  }
</style>
