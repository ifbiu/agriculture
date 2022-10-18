<template>
  <div id="index" ref="appRef">
    <div class="bg">
      <dv-loading v-if="loading">Loading...</dv-loading>
      <div v-else class="host-body">
        <top />
        <div class="body-box">
          <!-- 第三行数据 -->
          <div class="content-box">
<!--            <div>-->
<!--              <dv-border-box-12>-->
<!--                <centerLeft1 />-->
<!--              </dv-border-box-12>-->
<!--            </div>-->
            <div>
              <dv-border-box-12>
                <weather />
              </dv-border-box-12>
            </div>
            <!-- 中间 -->
            <div>
              <center :cdata="cdata" :four-data="fourData" />
            </div>
            <!-- 中间 -->
<!--            <div>-->
<!--              <centerRight2 :cdata="ybdata" />-->
<!--            </div>-->
            <div>
              <dv-border-box-13>
                <centerRight1 :cdata="ybdata" />
              </dv-border-box-13>
            </div>
          </div>

          <!-- 第四行数据 -->
          <div class="bottom-box">
            <dv-border-box-13>
              <gdp :cdata="ybdata" />
            </dv-border-box-13>
            <dv-border-box-12>
              <city :cdata="cdata" />
            </dv-border-box-12>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import drawMixin from "@/utils/drawMixin";
import { formatTime } from '@/utils/index.js'
import centerLeft1 from '@/views/components/index/centerLeft1'
import centerLeft2 from '@/views/components/index/centerLeft2'
import centerRight1 from '@/views/components/index/centerRight1'
import centerRight2 from '@/views/components/index/centerRight2'
import center from '@/views/components/index/center'
import weather from '@/views/components/index/weather'
import gdp from '@/views/components/index/gdp'
import city from '@/views/components/index/city'
import top from "@/views/components/top";
import {getFourData, getPopulation, getYearBooks} from "@/request";

export default {
  mixins: [ drawMixin ],
  data() {
    return {
      loading: true,
      cdata:[],
      fourData:{},
      ybdata:[]
    }
  },
  components: {
    centerLeft1,
    centerLeft2,
    centerRight1,
    centerRight2,
    center,
    gdp,
    weather,
    top,
    city
  },
  mounted() {
    this.getPopulationList()
    this.getFourDataList()
    this.getYearBooksList()
    this.cancelLoading()
  },
  methods: {
    cancelLoading() {
      setTimeout(() => {
        this.loading = false
      }, 500)
    },
    async getPopulationList(){
      const res = await getPopulation({
        city:this.$route.query['city']
      })
      if (res.code==="200"){
        for (let i = 0; i < res.data.length; i++) {
          this.cdata = res.data
        }
        this.cdata.map(res=>{
          res.name=res.county
          res.value=res.population
        })

      }else{
        console.log('request error')
      }
    },
    async getFourDataList(){
      const res = await getFourData({
        city:this.$route.query['city']
      })
      if (res.code==="200"){
        this.fourData = res.data
      }else{
        console.log('request error')
      }
    },
    async getYearBooksList(){
      const res = await getYearBooks({
        city:this.$route.query['city']
      })
      if (res.code==="200"){
        this.ybdata = res.data
      }else{
        console.log('request error')
      }
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/index.scss';
</style>
