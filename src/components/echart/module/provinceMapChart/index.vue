<template>
  <div>
    <Chart :cdata="cdata" />
  </div>
</template>

<script>
import Chart from './chart.vue'
export default {
  data () {
    return {
      drawTiming: null,
      cdata: [
        {
          name: '呼和浩特',
          value: 10,
          elseData:{
            // 这里放置地图 tooltip 里想显示的数据
          }
        },
        {
          name: '包头',
          value: 9,
        },
        {
          name: '巴彦淖尔',
          value: 8,
        },
        {
          name: '呼伦贝尔',
          value: 7,
        },
        {
          name: '赤峰',
          value: 6,
        },
        {
          name: '通辽',
          value: 5,
        },
        {
          name: '兴安盟',
          value: 4,
        },
        {
          name: '鄂尔多斯',
          value: 3,
        },
        {
          name: '锡林郭勒',
          value: 2,
        },
        {
          name: '乌海',
          value: 3,
        },
        {
          name: '阿拉善',
          value: 2,
        },
        {
          name: '乌兰察布',
          value: 7,
        }
      ]
    }
  },
  components: {
    Chart,
  },
  mounted () {
    this.drawTimingFn();
  },
  beforeDestroy () {
    clearInterval(this.drawTiming);
  },
  methods: {
    drawTimingFn () {
      this.drawTiming = setInterval(() => {
      }, 6000);
    },
  }
};
</script>

<style lang="scss" scoped>
</style>
