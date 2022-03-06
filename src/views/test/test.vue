<template>
  <div class="container">
    <!-- 为 ECharts 准备一个定义了宽高的 DOM -->
    <div id="main" style="width: 80%;height:80%;"></div>
  </div>
</template>

<script lang="ts">
import * as echarts from "echarts";
import options from "./options.js";
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class Todo extends Vue {
  editor: any = null;
  handleClick() {
    const html = this.editor.txt.html();
    console.log(
      "Bowen ~ file: todo.vue ~ line 19 ~ Todo ~ handleClick ~ html",
      html
    );
  }
  mounted() {
    // 基于准备好的dom，初始化echarts实例
    const myChart = echarts.init(
      document.getElementById("main") as HTMLElement
    );
    const option = {
      title: {
        text: "ECharts 入门示例"
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "line" // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true
      },
      xAxis: [
        {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          axisTick: {
            alignWithLabel: true
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            color: "rgba(242, 25, 25, 1)",
            fontStyle: "normal",
            fontWeight: "bolder",
            fontSize: 15
          }
        }
      ],
      yAxis: [
        {
          type: "value",
          axisLine: {
            show: true,
            lineStyle: {
              width: 6,
              color: "#eeeeee"
            }
          },
          splitLine: {
            lineStyle: {
              // 使用深浅的间隔色
              color: ["rgba(234, 32, 32, 1)", "#eeeeee", "#ff00ff", "#ffff00"],
              width: 2
            }
          }
        }
      ],
      series: [
        {
          name: "Direct",
          type: "bar",
          barWidth: "60%",
          data: [10, 52, 200, 334, 390, 330, 220],
          itemStyle: {
            borderRadius: [5, 5, 0, 0],
            color: "rgba(137, 9, 9, 1)"
          }
        },
        {
          name: "test",
          type: "line",
          barWidth: "60%",
          data: [15, 2, 234, 23, 31, 4, 632],
          itemStyle: {
            borderRadius: [5, 5, 0, 0],
            color: "#ff00ff"
          }
        }
      ]
    };
    // 绘制图表
    myChart.setOption(options);

    // window.addEventListener("resize", () => {
    //   myChart.resize();
    // });
  }
}
</script>

<style lang="scss">
.container {
  width: 100%;
  height: 100%;
}
</style>
