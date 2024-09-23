<template>
  <div class="table-box">
    <!--表头-->
    <div class="table-th">
      <div style="width: 60px">排名</div>
      <div>区域</div>
      <div>总服务人数</div>
      <div>2023年</div>
      <div>2024年</div>
    </div>
    <!--表格数据-->
    <div class="table-tr" ref="tableTr" @mouseenter="pause" @mouseleave="resume">
      <!--克隆一份数据-->
      <div
        class="tr-item"
        v-for="(item, index) in [...tableData, ...tableData]"
        :key="index"
        :class="{ 'even-background': index < 15 ? index % 2 !== 0 : index % 2 === 0 }"
      >
        <div class="index-item">
          <div v-if="item.ranking <= 3" class="tab-index index-bg">
            {{ item.ranking }}
          </div>
          <div v-else class="tab-index">
            {{ item.ranking }}
          </div>
        </div>
        <div>{{ item.province }}</div>
        <div>{{ item.totalServiceNumber }}</div>
        <div>{{ item.yearNumber2 }}</div>
        <div>{{ item.yearNumber3 }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'demo2',
  data() {
    return {
      tableData: [],
      position: 0,
      animationId: null,
    }
  },
  mounted() {
    this.getTableData()
    this.$nextTick(() => {
      this.animation()
    })
  },
  methods: {
    /**
     * 暂停动画。
     * 此方法通过取消动画帧请求来暂停动画的执行。
     * 当鼠标移入组件时调用，以暂停动画的播放。
     */
    pause() {
      cancelAnimationFrame(this.animationId) // 取消当前的动画帧请求
      this.animationId = null // 清空动画帧请求的ID
      this.isPaused = true // 标记动画为暂停状态
    },
    /**
     * 恢复动画。
     * 如果动画当前处于暂停状态，此方法会重新启动动画。
     * 当鼠标移出组件时调用，以恢复动画的播放。
     */
    resume() {
      if (this.isPaused) {
        // 当动画处于暂停状态时
        this.animation() // 重新调用动画函数
        this.isPaused = false // 将动画状态设置为播放
      }
    },
    /**
     * 启动一个动画，用于滚动表格中的行。
     * 此函数没有参数和返回值，因为它直接操作DOM并启动一个循环动画。
     * 动画效果是通过改变行的垂直偏移来实现的。
     */
    animation() {
      // 获取将要进行动画的ul元素
      let tableTr = this.$refs.tableTr
      // 获取ul元素的高度，用于计算动画的终点
      let tableTrHeight = tableTr.offsetHeight
      /**
       * 动画循环函数。
       * 不断调整元素的垂直偏移，创造向下滚动的效果。
       * 当元素偏移超过其高度的一半时，重置偏移值，实现循环滚动。
       */
      const animate = () => {
        this.position -= 2 // 每次循环减少的偏移量，控制动画速度
        if (this.position <= -(tableTrHeight / 2)) {
          this.position = 0 // 当偏移量小于等于负的一半高度时，重置偏移量，准备下一次循环
        }
        tableTr.style.transform = `translateY(${this.position}px)` // 应用偏移量到元素的transform属性上，实现动画效果
        this.animationId = requestAnimationFrame(animate) // 请求下一个动画帧继续执行此函数，保持动画运行
      }
      animate() // 初始化动画
    },
    getTableData() {
      const generatedData = []
      const provinces = [
        '北京',
        '上海',
        '广东',
        '江苏',
        '浙江',
        '山东',
        '河南',
        '湖南',
        '湖北',
        '四川',
        '福建',
        '安徽',
        '陕西',
        '重庆',
        '云南',
      ]
      const randomServiceNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
      for (let i = 0; i < 15; i++) {
        const province = provinces[Math.floor(Math.random() * provinces.length)]
        const totalServiceNumber = randomServiceNumber(1000, 10000).toString()
        const yearNumber2 = randomServiceNumber(500, 5000).toString()
        const yearNumber3 = randomServiceNumber(1000, 8000).toString()

        generatedData.push({
          ranking: i + 1,
          province,
          totalServiceNumber,
          yearNumber2,
          yearNumber3,
        })
      }

      this.tableData = generatedData
    },
  },
}
</script>

<style  lang="less" scoped>
.table-box {
  background-color: #000;
  color: white;
  // 最外层父元素必须要定高
  width: 500px;
  height: 385px;
  overflow: hidden;
}

.table-th {
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #1a8dec;
  font-weight: 100;
  font-size: 14px;
  padding: 2px 0;
  height: 35px;
  line-height: 35px;
  position: sticky;
  z-index: 2;

  & > div {
    width: 120px;
    text-align: center;
  }
}

.table-tr {
  display: flex;
  flex-direction: column;

  .tr-item {
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-weight: 100;
    font-size: 12px;
    height: 35px; // 每一行的高度也必须固定，用户计算滚动距离
    line-height: 35px;

    & > div {
      width: 120px;
      text-align: center;
    }

    .index-item {
      width: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  //.tr-item:nth-child(odd) {
  //  background-color: #322c5f;
  //}
}

.even-background {
  background-color: #322c5f;
}

.tab-index {
  width: 16px;
  height: 16px;
  line-height: 16px;

  text-align: center;
  border-radius: 50%;
  background-color: #4666ff;
}

.index-bg {
  background-color: #f43737;
}
</style>
