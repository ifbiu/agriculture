<template>
  <div>
    <Chart :cdata="cdata" />
  </div>
</template>

<script>
import Chart from './chart.vue'
import {getYearBooks} from '@/request'
export default {
  data () {
    return {
      cdata: [],
    };
  },
  components: {
    Chart,
  },
  mounted () {
    this.getYearBooksList()
  },
  methods: {
    async getYearBooksList(){
      const res = await getYearBooks({
        city:this.$route.query['city']
      })
      if (res.code==="200"){
        this.cdata = res.data
      }else{
        console.log('request error')
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>