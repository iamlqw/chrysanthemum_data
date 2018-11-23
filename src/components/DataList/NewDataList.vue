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
    <el-button type="primary" style="float: right" @click="Download()">下载该页内容</el-button>
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
            <el-button type="text" size="small" @click="OriginalImageView(scope.row)">查看原图</el-button>
            <el-button type="text" size="small" @click="LBPImageView(scope.row)">LBP图像</el-button>
            <el-button type="text" size="small" @click="DataView(scope.row)">查看数据</el-button>
            <el-button type="text" size="small" @click="GetData(scope.row)">获取数据</el-button>
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
    <el-dialog title="查看原图" width="70%" :visible.sync="imgLookupFormVisible">
      <v-newimg :baseCode="baseCode"></v-newimg>
    </el-dialog>
    <el-dialog title="查看LBP图像" width="70%" :visible.sync="lbpimgLookupFormVisible">
      <v-newlbpimg :lbpbaseCode="lbpbaseCode"></v-newlbpimg>
    </el-dialog>
   <el-dialog title="查看数据" width="70%" :visible.sync="DataLookupFormVisible">
      <v-newdata :data="data"></v-newdata>
    </el-dialog>
  </div>
</template>

<script>
  import VueEvent from '../../model/VueEvent.js'
  import NewDataOriginalImageView from '../DetailedInformation/NewDataOriginalImageView'
  import NewDataLBPImgView from '../DetailedInformation/NewDataLBPImgView'
  import NewDetailInformation from '../DetailedInformation/NewDetailInformation'
    export default {
        name: "NewDataList",
        data(){
          return{
            email:'',
            list:[],//返回的列表数据
            pagesize: 5,//分页
            currentPage:1,//当前页
            total:0,//总数据数
            baseCode:'',//存储原图base码
            lbpbaseCode:'',//lbpbase码
            data:'',
            ids:[],//批量下载
            imgLookupFormVisible:false,//展开对话框，下同
            lbpimgLookupFormVisible:false,
            DataLookupFormVisible:false
          }
        },
        components: {
          'v-newimg': NewDataOriginalImageView,
          'v-newlbpimg': NewDataLBPImgView,
          'v-newdata': NewDetailInformation
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
          },
          //查看原图
          OriginalImageView(row){
            this.$axios({
              method: 'post',
              url: '/api/Instrument/getOriginPic',
              data: {
                email: this.email,
                id: [row.id]
              }
            }).then(res => {
               console.log('res', res.data.data)
              this.baseCode='data:image/jpeg;base64,'+res.data.data[row.id]
            })
            this.imgLookupFormVisible = true
          },
          //查看LBP图像
          LBPImageView(row){
            this.$axios({
              method: 'post',
              url: '/api/Instrument/getProcessPic',
              data: {
                email: this.email,
                cultivar_id: row.cultivar_id,
                plant_id:row.plant_id,
                pic_date:row.pic_date,
                angle:row.angle,
                revolution_num:row.revolution_num
              }
            }).then(res => {
              console.log('res', res.data.pic.LBP)
              this.lbpbaseCode='data:image/jpeg;base64,'+res.data.pic.LBP
            })
            this.lbpimgLookupFormVisible = true
          },
          //查看信息
          DataView(row){
            this.$axios({
              method: 'post',
              url: '/api/Instrument/getProcessData',
              data: {
                email: this.email,
                cultivar_id: row.cultivar_id,
                plant_id:row.plant_id,
                pic_date:row.pic_date,
                angle:row.angle,
                revolution_num:row.revolution_num
              }
            }).then(res => {
              console.log('res', res.data)
              this.data=res.data.data
              console.log('data', this.data)
            })
              this.DataLookupFormVisible=true
          },
          GetData(row) {
            this.$axios({
              method: 'post',
              url: '/api/Instrument/packAndDownload',
              data: {
                email: this.email,
                ids: [row.id]
              }
            }).then(res => {
              console.log('xiazai',res)
              if (res.data.status == 'success') {
                window.open('/api/download?email=' + this.email)
              }else{
                alert(res.data.reason)
              }
            })
          },
          Download(){
            console.log('list',this.list)
            // console.log('currentPage',this.currentPage)
            // console.log('pagesize',this.pagesize)
            if(this.list.length<this.pagesize){
              for(var i=0;i<this.list.length;i++){
                this.ids[i]=this.list[i].id
              }
            }else if(this.currentPage*this.pagesize>this.list.length){
              for(var i=0;i<this.list.length-(this.currentPage-1)*this.pagesize;i++){
                this.ids[i]=this.list[(this.currentPage-1)*this.pagesize+i].id
              }
            }else{
              for(var i=0;i<this.pagesize;i++){
                this.ids[i]=this.list[(this.currentPage-1)*this.pagesize+i].id
              }
            }

             console.log('ids',this.ids)
            this.$axios({
              method: 'post',
              url: '/api/Instrument/packAndDownload',
              data: {
                email: this.email,
                ids: this.ids
              }
            }).then(res => {
              console.log('xiazai',res)
              if (res.data.status == 'success') {
                window.open('/api/download?email=' + this.email)
              }else{
                alert(res.data.reason)
              }
            })
          }
        },
        mounted(){
          this.$axios.post('/api/Instrument/getAllOriginPicInfo').then(res => {
            console.log('newdata', res.data.data)
            this.list= res.data.data
          })
          var _this = this;//this指代当前对象，在VueEvent内部为VueEvent
          //接收新数据（输入框）
          VueEvent.$on('data-to-newlist',function (data) {
            console.log('newtolist',data)
            if(data==null) {
              _this.list = ''
            }else{
              _this.list = data
              _this.total = data.length
            }
            console.log('list',this.list)
          })
          //接收新数据（索引表）
          VueEvent.$on('index-to-newlist',function (data) {
            console.log('tolist',data)
            if(data==null) {
              _this.list = ''
            }else{
              _this.list = data
              _this.total = data.length
            }
            console.log('list',this.list)
          })
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
