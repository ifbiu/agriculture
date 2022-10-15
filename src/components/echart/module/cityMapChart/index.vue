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
    }
  },
  props: {
    cdata: {
      type: Array,
      default: () => [],
    },
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
