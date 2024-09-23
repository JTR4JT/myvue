<template>
    <div @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
        <el-table :data="tableSave" height="280" border ref="table" :row-class-name="rowStyle">
            <el-table-column prop="date" label="TitleA" width="100"> </el-table-column>
            <el-table-column prop="name" label="TitleB" width="150"> </el-table-column>
            <el-table-column prop="address" label="TitleC" width="150"> </el-table-column>
        </el-table>
        <button @click="add(1)">A警告</button>
        <button @click="add(2)">B警告</button>
        <button @click="add(3)">C警告</button>
        <button @click="add(4)">紧急警告</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            // 表格数据
            tableData: [
                {
                    date: 'A警告',
                    name: 'aaa',
                    address: '111',
                    type: 'red'
                },
                {
                    date: 'B警告',
                    name: 'bbb',
                    address: '222',
                    type: 'yellow'
                },
                {
                    date: 'C警告',
                    name: 'ccc',
                    address: '333',
                    type: 'blue'
                },
                {
                    date: 'C警告',
                    name: 'ddd',
                    address: '444',
                    type: 'blue'
                },
                {
                    date: 'B警告',
                    name: 'fff',
                    address: '666',
                    type: 'yellow'
                },
                {
                    date: 'C警告',
                    name: 'eee',
                    address: '555',
                    type: 'blue'
                },
            ],
            tableSave: [],
            stack: [],
            moveflag: true,
            showflag: 0,
        };
    },
    mounted() {
        //总数据表判空
        if (this.tableData.length > 0) {
            //数据量是否需要轮播
            if (this.tableData.length > 5) {
                for (; this.showflag < 6; this.showflag++) {
                    this.tableSave[this.showflag] = this.tableData[this.showflag];
                }
            } else {
                this.tableData.forEach(item => {
                    this.tableSave.push(item)
                });
            }
        }
        this.tableShow();
    },

    methods: {
        tableShow() {
            const table = this.$refs.table;
            const divData = table.bodyWrapper;
            let myVar = setInterval(() => {
                //是否可移动
                if (this.moveflag && this.tableSave.length >= 6) {
                    // 元素自增距离顶部1像素
                    divData.scrollTop += 1;
                    // 判断元素是否滚动到底部(可视高度+距离顶部=整个高度)
                    if (divData.clientHeight + divData.scrollTop >= divData.scrollHeight - 10) {
                        //移除看不见的行
                        this.tableSave.shift();
                        //插入轮播、判断插入栈是否有通知
                        if (this.stack.length != 0) {
                            let data = this.stack.pop();
                            //插入轮播列表
                            this.tableSave.push(data);
                            //插入总Table表
                            //this.tableData.push(data);
                        } else {
                            //轮播指针重置
                            if (this.showflag >= this.tableData.length) this.showflag = 0;
                            //插入指针位数据
                            this.tableSave.push(this.tableData[this.showflag]);
                            this.showflag++;
                        }
                        // 重置table距离顶部距离
                        divData.scrollTop = 0;
                    }
                }
            }, 30);
        },
        rowStyle({ row, rowIndex }) {
            if (row.type === 'red') {
                return 'red_class';
            } else if (row.type === 'yellow') {
                return 'yellow_class';
            } else {
                return 'blue_class'
            }
        },
        add(n) {
            const table = this.$refs.table;
            const divData = table.bodyWrapper;
            if (n == 1) {
                this.tableData.push({
                    date: 'red',
                    name: '红色警告',
                    address: '红色警告',
                    type: 'red'
                });
                this.$notify({
                    title: '红色警告',
                    message: '红色警告',
                    type: 'error',
                });
            }
            if (n == 2) {
                this.tableData.push({
                    date: 'yellow',
                    name: '黄色警告',
                    address: '黄色警告',
                    type: 'yellow',
                });
                this.$notify({
                    title: '黄色警告',
                    message: '黄色警告',
                    type: 'warning',
                });
            }
            if (n == 3) {
                this.tableData.push({
                    date: 'blue',
                    name: '蓝色警告',
                    address: '蓝色警告',
                    type: 'blue',
                });
                this.$notify({
                    title: '蓝色警告',
                    message: '蓝色警告',
                    type: 'info',
                });
            }
            if (n == 4) {
                this.stack.push({
                    date: '紧急警告',
                    name: '紧急警告',
                    address: '紧急警告',
                    type: 'red',
                });
                this.$notify({
                    title: '紧急警告',
                    message: '紧急警告',
                    type: 'error',
                });
            }
        },
        handleMouseEnter() {
            //鼠标进入
            this.moveflag = false;
        },
        handleMouseLeave() {
            //鼠标移出
            this.moveflag = true;
        }

    },
};
</script>
<style>
.el-table {
    background-color: transparent;
}

.el-table tr {
    background-color: transparent;
}

.el-table thead {
    color: lightblue;
    background-color: transparent;
}

.el-table td.el-table__cell,
.el-table th.el-table__cell.is-leaf {
    background-color: transparent;
}

.el-table__body-wrapper::-webkit-scrollbar {
    width: 0;
}

.el-table--border th.el-table__cell.gutter:last-of-type {
    background-color: transparent;
}

.el-table .red_class {
    color: red;
    background-color: yellow;
}

.el-table .yellow_class {
    color: yellow;
    background-color: green;
}

.el-table .blue_class {
    color: blue;
    background-color: white;
}
</style>