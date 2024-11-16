<template>
    <div class="bodydiv">
      <div class="bigbk" >
                <div  style="height:100%;padding: 0px;">
                  <div class="card" style="">
                      
                      <div class="card-body" style="padding:0px;margin:0 0 0.2vw 0;height:100%;">
                        <div style="height:100%;overflow: hidden;">
                          <div class="tableSty"  ref="chartProject"  style="height: 100%;width:100%" >
  
       <el-table
        ref="tab"
        id="boxed"
        :data="allMsg"
        height="100%"
       :header-cell-style="{'text-align':'center',borderColor:'#33CCFF'}"
        :cell-style="{'text-align':'center',borderColor:'#33CCFF'}"
      border
      style="width: 100%" class="msgtable">
   
      <el-table-column
        prop="name"
        label="项目经理">
      </el-table-column>
      <el-table-column
        prop="allProject"
        label="项目总数">
      </el-table-column>
      <el-table-column
        prop="okProject"
        label="已出货项目数"> 
      </el-table-column>
      <el-table-column
        prop="waitProject"
        label="待出货项目数">
      </el-table-column>
      <el-table-column
        prop="problemProject"
        label="有问题项目">
        
      </el-table-column>
    </el-table>
                          </div>
                        </div>   
                      </div>
                      
                      <!-- 四个角的边框效果 -->
                      <div class="border_corner border_corner_left_top"></div>
                      <div class="border_corner border_corner_right_top"></div>
                      <div class="border_corner border_corner_left_bottom"></div>
                      <div class="border_corner border_corner_right_bottom"></div> 
                  </div>
                </div>
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
      data () {
        return {
          conn: null,
          showList: [],
          taskList:[],
          allMsg: 
          [{
            name: '张三',
            allProject:10,
            okProject:3,
            waitProject:3,
            problemProject:6
          }, {
            name: '李四',
            allProject:10,
            okProject:3,
            waitProject:3,
            problemProject:6
          }, {
            name: '王五',
            allProject:10,
            okProject:3,
            waitProject:3,
            problemProject:6
          }, {
            name: '老六',
            allProject:10,
            okProject:3,
            waitProject:3,
            problemProject:6
          }, {
            name: '阿七',
            allProject:10,
            okProject:3,
            waitProject:3,
            problemProject:6
          }, {
            name: '老八',
            allProject:10,
            okProject:3,
            waitProject:3,
            problemProject:6
          }, {
            name: '李四',
            allProject:10,
            okProject:3,
            waitProject:3,
            problemProject:6
          }, {
            name: '王五',
            allProject:10,
            okProject:3,
            waitProject:3,
            problemProject:6
          }, {
            name: '老六',
            allProject:10,
            okProject:3,
            waitProject:3,
            problemProject:6
          }, {
            name: '阿七',
            allProject:10,
            okProject:3,
            waitProject:3,
            problemProject:6
          }, {
            name: '老八',
            allProject:10,
            okProject:3,
            waitProject:3,
            problemProject:6
          }, {
            name: '李四',
            allProject:10,
            okProject:3,
            waitProject:3,
            problemProject:6
          }, {
            name: '王五',
            allProject:10,
            okProject:3,
            waitProject:3,
            problemProject:6
          }, {
            name: '老六',
            allProject:10,
            okProject:3,
            waitProject:3,
            problemProject:6
          }, {
            name: '阿七',
            allProject:10,
            okProject:3,
            waitProject:3,
            problemProject:6
          }, {
            name: '老八',
            allProject:10,
            okProject:3,
            waitProject:3,
            problemProject:6
          }, {
            name: '阿七',
            allProject:10,
            okProject:3,
            waitProject:3,
            problemProject:6
          }, {
            name: '老八',
            allProject:10,
            okProject:3,
            waitProject:3,
            problemProject:6
          }, {
            name: '阿七',
            allProject:10,
            okProject:3,
            waitProject:3,
            problemProject:6
          }, {
            name: '老八',
            allProject:10,
            okProject:3,
            waitProject:3,
            problemProject:6
          }, {
            name: '阿七',
            allProject:10,
            okProject:3,
            waitProject:3,
            problemProject:6
          }, {
            name: '老八',
            allProject:10,
            okProject:3,
            waitProject:3,
            problemProject:6
          }
        ]
    
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
  .bodydiv
  {
    padding:0;
    margin:0;
    border:0;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #040926;
  }
  .card {
    border-radius: 0;
    box-shadow:inset 0 0 1px #009db5,inset 0 1px 5px #009db5;
    /* box-shadow:inset 0 0 1px #33ccff,inset 0 1px 5px #33ccff; */
    background-color: #040926;
    color:#fff;
    height:100%;
    line-height:100%;
    margin:0;
    padding:0.4vw;
    border-radius:8px;
  }
  .card-body {
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    min-height: 1px;
  }
  .border_corner{
    z-index: 2500;
    position: absolute;
    width: 0.8vw;
    height: 0.8vw;
    background: rgba(0,0,0,0);
    border: 2px solid #67edff;
  }
  .border_corner_left_top{
    top: 0;
    left: 0;
    border-right: none;
    border-bottom: none;
    border-top-left-radius: 8px;
  }
  .border_corner_right_top{
      top: 0;
      right: 0;
      border-left: none;
      border-bottom: none;
      border-top-right-radius: 8px;
  }
  .border_corner_left_bottom{
      bottom: 0;
      left: 0;
      border-right: none;
      border-top: none;
      border-bottom-left-radius: 8px;
  }
  .border_corner_right_bottom{
      bottom: 0;
      right: 0;
      border-left: none;
      border-top: none;
      border-bottom-right-radius: 8px;
  }
  .bigbk
  {
    position: absolute;
    width: 80%;
    height: 80%;
    margin-top: 5%;
    margin-left: 10%;
    color:#33CCFF;
    
  }
  .msgtable
  {
    border:1px solid  #33CCFF !important;
    border-radius: 6px;
  
  }
  .tableSty>>>.el-table--scrollable-x .el-table__body-wrapper 
    {
      border: none !important;
      overflow-x: hidden;
    }
  .tableSty>>>.el-table tr,.tableSty>>>.el-table th,.tableSty>>>.el-table td
  {
  
     /* 去除el的自带背景 */
     background-color: transparent !important;
    }
    .tableSty>>>.el-table ,.tableSty>>>.el-table_expanded-cell
    {
      
       /* 去除el的自带背景同上一起用 */
      background-color: transparent !important;
    
    }
 /*去除滚动的滚动条*/
::v-deep .el-table th.gutter{
  display: none;
  width:0
}
::v-deep.el-table colgroup col[name='gutter']{
  display: none;
  width: 0;
}
::v-deep .el-table__body{
  width: 100% !important;
}
::v-deep .el-table--scrollable-y .el-table__body-wrapper {
  overflow-y: hidden;
}

    
  </style>