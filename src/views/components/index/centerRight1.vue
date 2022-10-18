<template>
  <div id="centerRight1">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span>
          <icon name="chart-line" class="text-icon"></icon>
        </span>
        <div class="d-flex">
          <span class="fs-xl text mx-2">{{city}}农作物产量排行榜</span>
        </div>
      </div>
      <div class="d-flex jc-center body-box">
        <dv-scroll-board class="dv-scr-board" :config="config" />
      </div>
    </div>
  </div>
</template>

<script>
import {judgeRoute} from "@/utils";

export default {
  props: {
    cdata: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      config: {
        header: ['旗县','播种面积','播种增长率','粮食产量', '粮食增长率','油料产量', '油料增长率'],
        data: this.cdata.map(res=>{
          let oil_colorClass = ""
          let oil_arrow = ""
          let oil_percent = "%"

          let gra_colorClass = ""
          let gra_arrow = ""
          let gra_percent = "%"

          let sown_colorClass = ""
          let sown_arrow = ""
          let sown_percent = "%"

          if(res.oil_production_incr_sign===-1){
            oil_colorClass = "colorRed"
            oil_arrow = "↓"
          }else if (res.oil_production_incr_sign===1){
            oil_colorClass = "colorGrass"
            oil_arrow = "↑"
          }else{
            oil_percent=""
          }

          if(res.grain_yield_incr_sign===-1){
            gra_colorClass = "colorRed"
            gra_arrow = "↓"
          }else if (res.grain_yield_incr_sign===1){
            gra_colorClass = "colorGrass"
            gra_arrow = "↑"
          }else{
            gra_percent=""
          }

          if(res.sown_area_incr_sign===-1){
            sown_colorClass = "colorRed"
            sown_arrow = "↓"
          }else if (res.sown_area_incr_sign===1){
            sown_colorClass = "colorGrass"
            sown_arrow = "↑"
          }else{
            sown_percent=""
          }

          return [res.county,
            res.sown_area,
            "<span  class='"+sown_colorClass+"'>"+
            sown_arrow+res.sown_area_incr+sown_percent+"</span>",
            res.grain_yield,
            "<span  class='"+gra_colorClass+"'>"+
            gra_arrow+res.grain_yield_incr+gra_percent+"</span>",
            res.oil_production,
            "<span  class='"+oil_colorClass+"'>"+
            oil_arrow+res.oil_production_incr+oil_percent+"</span>"
          ]
        }),
        rowNum: 7, //表格行数
        headerHeight: 35,
        headerBGC: '#0f1325', //表头
        oddRowBGC: '#0f1325', //奇数行
        evenRowBGC: '#171c33', //偶数行
        index: true,
        columnWidth: [50,180,100,100,100,100,100,100],
        align: ['center']
      },
      city:judgeRoute(this.$route.query['city']),
    }
  }
}
</script>

<style lang="scss" scoped>
$box-height: 410px;
$box-width: 880px;
#centerRight1 {
  padding: 16px;
  padding-top: 20px;
  height: $box-height;
  width: $box-width;
  border-radius: 5px;
  .bg-color-black {
    height: $box-height - 30px;
    border-radius: 10px;
  }
  .text {
    color: #c3cbde;
  }
  .body-box {
    border-radius: 10px;
    overflow: hidden;
    .dv-scr-board {
      width: 800px;
      height: 340px;
    }
  }
}
</style>
