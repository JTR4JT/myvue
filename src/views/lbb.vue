<template>
    <div>
      <el-table :data="tables" height="300px" border style="width: 100%,color: #000;" :show-header="false">
        <el-table-column prop="name" label="项目经理">
        </el-table-column>
        <el-table-column prop="allProject" label="项目总数">
        </el-table-column>
        <el-table-column prop="okProject" label="已出货项目数"> 
        </el-table-column>
        <el-table-column prop="waitProject" label="待出货项目数">
        </el-table-column>
        <el-table-column prop="problemProject" label="有问题项目">
        </el-table-column>
      </el-table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        tables: [
          {
            name: '张三',
            allProject: 10,
            okProject: 3,
            waitProject: 3,
            problemProject: 6
          },
          {
            name: '李四',
            allProject: 10,
            okProject: 3,
            waitProject: 3,
            problemProject: 6
          },
          {
            name: '王五',
            allProject: 10,
            okProject: 3,
            waitProject: 3,
            problemProject: 6
          },
          {
            name: '老六',
            allProject: 10,
            okProject: 3,
            waitProject: 3,
            problemProject: 6
          },
          {
            name: '阿七',
            allProject: 10,
            okProject: 3,
            waitProject: 3,
            problemProject: 6
          },
          {
            name: '老八',
            allProject: 10,
            okProject: 3,
            waitProject: 3,
            problemProject: 6
          }
        ],
        currentTableIndex: 0,
        intervalId: null
      };
    },
    mounted() {
      this.startCarousel();
    },
    beforeDestroy() {
      this.stopCarousel();
    },
    methods: {
      startCarousel() {
        this.intervalId = setInterval(() => {
          this.currentTableIndex = (this.currentTableIndex + 1) % this.tables.length;
          // 更新 tables
          this.tables = this.tables[this.currentTableIndex];
        }, 5000); // 5000 毫秒 = 5 秒，你可以根据需要调整这个值
      },
      stopCarousel() {
        clearInterval(this.intervalId);
      }
    }
  };
  </script>
  