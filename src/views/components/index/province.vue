<template>
  <div id="bottomRight">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span>
          <icon name="chart-pie" class="text-icon"></icon>
        </span>
        <div class="d-flex">
          <span class="fs-xl text mx-2">地图数据</span>
          <div class="decoration2">
            <dv-decoration-2 :reverse="true" style="width:5px;height:6rem;" />
          </div>
          <ul class="menu-link">
            <li v-for="(city,index) in citys" :key="index">
              <a :href="'/city?city='+city.abbreviation">{{city.name}}</a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <BottomRightChart />
      </div>
    </div>
  </div>
</template>

<script>
import BottomRightChart from "@/components/echart/module/provinceMapChart";
export default {
  data(){
    return{
      citys:[
        {name:"呼和浩特",abbreviation:"huhehaote"},
        {name:"包头",abbreviation:"baotou"},
        {name:"赤峰",abbreviation:"chifeng"},
        {name:"通辽",abbreviation:"tongliao"},
        {name:"鄂尔多斯",abbreviation:"eerduosi"},
        {name:"呼伦贝尔",abbreviation:"hulunbeier"},
        {name:"乌兰察布",abbreviation:"wulanchabu"},
        {name:"巴彦淖尔",abbreviation:"bayannaoer"},
        {name:"锡林郭勒",abbreviation:"xilinguole"},
        {name:"兴安盟",abbreviation:"xinganmeng"},
        {name:"乌海",abbreviation:"wuhai"},
        {name:"阿拉善",abbreviation:"alashan"},
      ],
    }
  },
  components: {
    BottomRightChart
  }
};
</script>

<style lang="scss" class>
$box-height: 920px;
$box-width: 100%;
#bottomRight {
  padding: 14px 16px;
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
  //下滑线动态
  .decoration2 {
    position: absolute;
    right: 0.125rem;
  }
  .chart-box {
    margin-top: 16px;
    width: 170px;
    height: 170px;
    .active-ring-name {
      padding-top: 10px;
    }
  }
  .menu-link{
    position:absolute;
    right: 150px;
    z-index: 9999;
    font-size: 30px;
    margin-top: 50px;
  }
  .menu-link li{
    height: 40px;
    margin-top: 20px;
    line-height: 40px;
  }
  .menu-link a{
    color: #c3cbde;
  }
  .menu-link a:hover{
    color: #1a5cd7;
  }
}
</style>