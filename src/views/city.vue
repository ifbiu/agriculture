<template>
  <div id="index" ref="appRef">
    <div class="bg">
      <dv-loading v-if="loading">Loading...</dv-loading>
      <div v-else class="host-body">
        <top />
        <div class="body-box">
          <!-- 第三行数据 -->
          <div class="content-box">
            <div>
              <dv-border-box-12>
                <centerLeft1 />
              </dv-border-box-12>
            </div>
            <div>
              <dv-border-box-12>
                <centerLeft2 />
              </dv-border-box-12>
            </div>
            <!-- 中间 -->
            <div>
              <center />
            </div>
            <!-- 中间 -->
            <div>
              <centerRight2 />
            </div>
            <div>
              <dv-border-box-13>
                <centerRight1 />
              </dv-border-box-13>
            </div>
          </div>

          <!-- 第四行数据 -->
          <div class="bottom-box">
            <dv-border-box-13>
              <bottomLeft />
            </dv-border-box-13>
            <dv-border-box-12>
              <city />
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
import bottomLeft from '@/views/components/index/bottomLeft'
import city from '@/views/components/index/city'
import top from "@/views/components/top";

export default {
  mixins: [ drawMixin ],
  data() {
    return {
      loading: true,
    }
  },
  components: {
    centerLeft1,
    centerLeft2,
    centerRight1,
    centerRight2,
    center,
    bottomLeft,
    // bottomRight,
    top,
    city
  },
  mounted() {
    this.cancelLoading()
  },
  methods: {
    cancelLoading() {
      setTimeout(() => {
        this.loading = false
      }, 500)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/index.scss';
</style>
