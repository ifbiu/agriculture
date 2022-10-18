<template>
  <div>
    <Chart :cdata="cdata" />
  </div>
</template>

<script>
import Chart from './chart.vue'
export default {
  props: {
    cdata: {
      type: Array,
      default: () => [],
    },
  },
  data () {
    return {
    };
  },
  components: {
    Chart,
  },
};
</script>

<style lang="scss" scoped>
</style>
