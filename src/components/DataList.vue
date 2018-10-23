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
      <v-old :newdata="newdata"></v-old>
    </el-dialog>
  </div>

</template>

<script>
   import VueEvent from '../model/VueEvent.js'
  import OldDetailInformation from '../components/DetailedInformation/OldDetailInformation'
    export default {
      name: "DataList",
      data() {
        return {
          list:[],
          dialogAddFormVisible: false,
          newdata: [],
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
          console.log('row',row)
          this.newdata=row
          this.dialogLookupFormVisible = true
        },
        add(){
          alert('ssss')
        }
      },
      props:['result'],
      mounted(){
        var _this = this;
        VueEvent.$on('to-list',function (data) {
          console.log('tolist',data)
          _this.list = data
          console.log('list',this.list)
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
