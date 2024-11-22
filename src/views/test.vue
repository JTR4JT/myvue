<template>
  <el-table
    ref="multipleTable"
    :data="tableData"
  >
    <el-table-colum type="selection"></el-table-colum>
    <el-table-column  prop="name" label="姓名"></el-table-column>
  </el-table>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        { id: 1, name: '张三' },
        { id: 2, name: '李四' },
        { id: 3, name: '王五' }
      ]
    };
  },
  methods: {
    filterData() {
      this.tableData = this.tableData.filter(item => item.id > 1);
      console.log(this.tableData);
      return this.tableData;
    }
  },
  mounted() {
    // 调用filterData方法，但没有正确更新数据
    this.filterData();
  }
};
</script>