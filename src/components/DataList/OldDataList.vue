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
    <div id="table">
      <p style="text-align: center;font-size: 40px">人工拍摄数据列表</p>
      <el-button type="primary" @click="Jump()" plain>转到仪器拍摄数据列表</el-button>
      <el-table
        id="table"
        :data="list.slice((currentPage-1)*pagesize,currentPage*pagesize)"
        border
        style="width: 100%;font-size: 22px">
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
            <el-button @click="downloadClick(scope.row)" type="text" size="small">下载数据</el-button>
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
      <!--<v-old :olddata="olddata":baseCode="baseCode"></v-old>-->
      <v-old :olddata="olddata":baseCode="baseCode"></v-old>
    </el-dialog>
  </div>

</template>

<script>
  import VueEvent from '../../model/VueEvent.js'
  import OldDetailInformation from '../DetailedInformation/OldDetailInformation'
    export default {
      name: "OldDataList",
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
        'v-old': OldDetailInformation,
      },
      methods:{
        Jump(){
          this.$router.push({path:'newdatalist'})
        },
        handleClick(row) {//详细信息
          console.log('currentemail', this.email)
          console.log('row',row)
          this.baseCode=[]
          this.olddata=row
            this.$axios({
              method: 'post',
              url: '/api/picprocess',
              data: {
                email: this.email,
                cultivar_id: [row.id]
              }
            }).then(res => {
              for(var i=0;i<res.data.pic[row.id].length;i++){
                this.baseCodeData[i]='data:image/jpeg;base64,'+res.data.pic[row.id][i].base64
              }
              this.baseCode=this.baseCodeData//由于监听器监听baseCode，只能让baseCode改变一次
              console.log('baseCode', this.baseCode)
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
            if (res.data.status=='success'){
                window.open('/api/download?email='+this.email)
            }
            //console.log('sendemail', res.data)
          })

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
        //初始化显示所有数据
        this.$axios.post('/api/allartificial').then(res => {
          console.log('olddata', res.data.data)
          this.list= res.data.data
        })
        // this.$axios({
        //   method: 'post',
        //   url: '/api/getcharacterbyname',
        //   data: {
        //     email: this.email,
        //     cultivar_name: ''
        //   }
        // }).then(res => {
        //    this.list=res.data.data
        // })
        // 获取指标检索数据展示
        var _this = this;//this指代当前对象，在VueEvent内部为VueEvent
        VueEvent.$on('data-to-oldlist',function (data) {
          console.log('tolist',data)
          if(data==null) {
            _this.list = ''
          }else {
            _this.list = data
            _this.total = data.length
          }
          console.log('list',this.list)
        })
        VueEvent.$on('index-to-oldlist',function (data) {
          console.log('tolist',data)
          if(data==null) {
            _this.list = ''
          }else {
            _this.list = data
            _this.total = data.length
          }
          console.log('list',this.list)
        })
        this.$axios.get('/api/currentuser').then(res => {
          this.email = res.data.data[0]
        })
      },
      // watch: {
      //   //获取模糊检索数据展示
      //   result: function () {
      //     console.log('result',this.result)
      //     this.list = this.result
      //     this.total = this.list.length
      //     console.log('total',this.total)
      //   },
      // }

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
