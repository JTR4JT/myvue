<template>
  <div>
    <div style="height: 10%;">
    <h1 style="text-align: center;height: 20px;">项目管理</h1>
    </div>
    
 
    <div class="tableStyle">
      <el-table
  ref="tab"
  id="boxed"
    :data="tableData"
    height="100%"
    border
    :header-cell-style="{fontSize: '14px', backgroundColor: '#f8f8f8',color:'#333'}"
    style="width: 100%">
    <el-table-column
      prop="date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
  </el-table>
    </div>
  </div>
</template>

<script>
var rolltimer ;
  export default {
    
    mounted(){
      this.autoRoll()
    // 此处 boxed 是 el-table 绑定的 id
    let box = document.getElementById("boxed")
    // 鼠标滑进暂停
    box.addEventListener("mouseenter", (e) => {
        // 此处函数里传什么值都会暂停
        this.autoRoll("stop")
    })
    // 鼠标滑出滚动
    box.addEventListener('mouseleave', (e) => {
        this.autoRoll()
    })
},
created () {
  this.tableHeight = window.innerHeight - 100
  
    },
destroyed() {
    this.autoRoll('stop')
},
    data() {
      return {
        tableHeight:'' ,
        tableData: [{
          date: '2016-05-03',
          name: '1',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '2',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '3',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '4',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '5',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '6',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '7',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '8',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '9',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '8',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '9',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '8',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '9',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '4',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '5',
          address: '上海市普陀区金沙江路 1518 弄'
        }, , {
          date: '2016-05-01',
          name: '4',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '5',
          address: '上海市普陀区金沙江路 1518 弄'
        }, , {
          date: '2016-05-01',
          name: '4',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '5',
          address: '上海市普陀区金沙江路 1518 弄'
        },  ]
      }
    },
    methods:{
      autoRoll(stop) {
  if (stop) {
    clearInterval(rolltimer)
    return
  }
  // 这里的 tab 是上方 table 表格绑定的ref值
  const table = this.$refs.tab
  const divData = table.bodyWrapper
  rolltimer = setInterval(() => {
    // + 4 是每秒向下滑动 4个像素  这块可以自己更改
    divData.scrollTop += 4
    console.log(divData.scrollTop)
    // 下方判断是滑动到底部就会自己回到最上方重新开始滑动  改动像素的话 一定要满足进入这个判断  否则滚动到底部就停了
    if (divData.clientHeight + divData.scrollTop >= divData.scrollHeight-10) {
      divData.scrollTop = 0
    }
  }, 100)
},
    }
  }
</script>

<style scoped>

.tableStyle
{
  position: absolute;
  width: 99%;
  height: 90%;
  background-color: aqua;
}

.el-table .warning-row {
  background: #31a354;
}
.el-table .success-row {
  background: #f0f9eb;
}

.tableStyle>>>.el-table_1_column_3 
{
  color: #31a354 ;
}
</style>
