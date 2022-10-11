<template>
  <div>
    <Chart :cdata="cdata" />
  </div>
</template>

<script>
import Chart from './chart.vue'
import {getPopulation} from '@/request'
export default {
  data () {
    return {
      drawTiming: null,
      cdata:[]
    }
  },
  components: {
    Chart,
  },
  mounted () {
    this.getPopulationList()
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
    async getPopulationList(){
      const res = await getPopulation({
        city:"neimenggu"
      })
      if (res.code==="200"){
        for (let i = 0; i < res.data.length; i++) {
          this.cdata = res.data
        }
        this.cdata.map(res=>{
          res.name=res.city
          res.value=res.population
        })
        console.log(this.cdata)

      }else{
        console.log('request error')
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
