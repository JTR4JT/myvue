<template>
  <div>
    <el-table
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    style="width: 100%"
    :row-key="getRowKey"
    @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      label="日期"
      width="120">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="id"
      label="地址"
      show-overflow-tooltip>
    </el-table-column>
  </el-table>
  <div style="margin-top: 20px">
    <el-button @click="toggleSelection([tableData[1], tableData[2]])">切换第二、第三行的选中状态</el-button>
    <el-button @click="getSameMsg()">test</el-button>
    <el-button @click="toggleSelection()">取消选择</el-button>
  </div>
  </div>
 
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          id: 1
        }, {
          date: '2016-05-02',
          name: '王小虎',
          id: 2
        }, {
          date: '2016-05-04',
          name: '王小虎',
          id: 3
        }, {
          date: '2016-05-01',
          name: '王小虎',
          id: 4
        }, {
          date: '2016-05-08',
          name: '王小虎',
          id: 5
        }, {
          date: '2016-05-06',
          name: '王小虎',
          id: 6
        }, {
          date: '2016-05-07',
          name: '王小虎',
          id: 7
        }],
        multipleSelection: [],
        allMsg:[],
        testData:[{
          name: '王小虎',
          id: 2
        },
        {
          name: '王小虎',
          id: 7
        },
        {
          name: '王小虎',
          id: 1
        }, {
          date: '2016-05-07',
          name: '王小虎',
          id: 7
        }
      ]
      }
    },
    mounted(){
        this.getSameMsg()
    },
    methods: {
      toggleSelection(rows) {
      
    if (this.$refs.multipleTable) {
        if (rows) {
            rows.forEach(row => {
              console.log(row)
                this.$refs.multipleTable.toggleRowSelection(row);
            });
        } else {
            this.$refs.multipleTable.clearSelection();
        }
    }
    
},
getRowKey(row) {
      return row.id
    },

      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      getSameMsg()
      {
        var arr2 = this.tableData
        var arr1 = this.testData
        // 使用filter和some来筛选出在arr1中存在的arr2的元素
        // var rows = JSON.parse(JSON.stringify(arr2.filter(item2 => {
        //   return arr1.some(item1 => item1.id === item2.id);
        // })));
        // this.allMsg = rows
          for (const item2 of arr2) {
          for (const item1 of arr1) {
            if (item1.id === item2.id) {
              this.allMsg.push(item2);
              break;  // 找到相等的就不用继续在arr1里找了，直接进入下一轮循环判断arr2的下一项
            }
          }
      }
      this.toggleSelection( this.allMsg)
    // this.allMsg.forEach(row => {
    //             this.$refs.multipleTable.toggleRowSelection(row,true);
    //         });
      }
    }
  }
</script>