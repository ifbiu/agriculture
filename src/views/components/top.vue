<template>
  <div>
    <div class="d-flex jc-center">
      <dv-decoration-10 class="dv-dec-10" />
      <div class="d-flex jc-center">
        <dv-decoration-8 class="dv-dec-8" :color="decorationColor" />
        <div class="title">
          <span class="title-text">农业大数据统计展示系统</span>
          <dv-decoration-6
              class="dv-dec-6"
              :reverse="true"
              :color="['#50e3c2', '#67a1e5']"
          />
        </div>
        <dv-decoration-8
            class="dv-dec-8"
            :reverse="true"
            :color="decorationColor"
        />
      </div>
      <dv-decoration-10 class="dv-dec-10-s" />
    </div>

    <!-- 第二行 -->
    <div class="d-flex jc-between px-2">
      <div class="d-flex aside-width">
        <div class="react-left ml-4 react-l-s">
          <span class="react-left"></span>
          <span class="text">待展示文字1</span>
        </div>
        <div class="react-left ml-3">
          <span class="text">待展示文字2</span>
        </div>
      </div>
      <div class="d-flex aside-width">
        <div class="react-right bg-color-blue mr-3">
          <span class="text fw-b">内蒙古</span>
        </div>
        <div class="react-right mr-4 react-l-s">
          <span class="react-after"></span>
          <span class="text"
          >{{ dateYear }} {{ dateWeek }} {{ dateDay }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { formatTime } from '@/utils'
import drawMixin from "@/utils/drawMixin";

export default {
  mixins: [ drawMixin ],
  data(){
    return{
      timing: null,
      loading: true,
      dateDay: null,
      dateYear: null,
      dateWeek: null,
      decorationColor: ['#568aea', '#000000'],
      weekday: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
    }
  },
  mounted() {
    this.timeFn()
  },
  beforeDestroy() {
    clearInterval(this.timing)
  },
  methods:{
    timeFn() {
      this.timing = setInterval(() => {
        this.dateDay = formatTime(new Date(), 'HH: mm: ss')
        this.dateYear = formatTime(new Date(), 'yyyy-MM-dd')
        this.dateWeek = this.weekday[new Date().getDay()]
      }, 1000)
    },
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/index.scss';
</style>