<template>
  <div>
    <h1 style="text-align: center;">项目管理</h1>
  <el-table
  ref="tab"
  id="boxed"
    :data="tableData"
    height="250"
    border
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
destroyed() {
    this.autoRoll('stop')
},
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
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
        }, ]
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
    // 下方判断是滑动到底部就会自己回到最上方重新开始滑动  改动像素的话 一定要满足进入这个判断  否则滚动到底部就停了
    if (divData.clientHeight + divData.scrollTop == divData.scrollHeight) {
      divData.scrollTop = 0
    }
  }, 100)
},
    }
  }
</script>
