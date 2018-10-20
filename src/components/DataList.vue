<template>
  <div id="main">
    <div id="button">
      <el-button type="primary" @click="dialogAddFormVisible = true">添加</el-button>
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
        :data="tableData"
        border
        style="width: 80%">
        <el-table-column
          prop="name"
          label="品种名">
        </el-table-column>
        <el-table-column
          prop="attribute"
          label="指标">
        </el-table-column>
        <el-table-column
          prop="details"
          label="详情">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作">
          <template slot-scope="scope">
            <el-button @click="dialogLookupFormVisible = true" type="text" size="small">查看</el-button>
            <el-dialog title="查找信息" :visible.sync="dialogLookupFormVisible">
              <el-form :model="lookupform">
                <el-form-item label="基地编号" :label-width="formLabelWidth">
                  <el-input v-model="lookupform.field_id" autocomplete="off"></el-input>
                </el-form-item>
                <div slot="footer" class="dialog-footer">
                  <el-button @click="dialogLookupFormVisible = false">取 消</el-button>
                  <el-button type="primary" @click="dialogLookupFormVisible = false">确 定</el-button>
                </div>
              </el-form>
            </el-dialog>
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>

</template>

<script>
    export default {
      name: "DataList",
      data() {
        return {
          dialogAddFormVisible: false,
          addform:{
            field_id: ''
          },
          dialogLookupFormVisible: false,
          lookupform:{
            field_id: ''
          },

          tableData: [{
            date: '2016-05-03',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }, {
            date: '2016-05-02',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }, {
            date: '2016-05-04',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }, {
            date: '2016-05-01',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }]
        }
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
