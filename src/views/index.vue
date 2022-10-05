<template>
  <div id="index" ref="appRef">
    <div class="bg">
      <dv-loading v-if="loading">Loading...</dv-loading>
      <div v-else class="host-body">
        <top/>
        <!-- 第四行数据 -->
        <div class="bottom-box">
          <dv-border-box-12>
            <bottomRight/>
          </dv-border-box-12>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import drawMixin from "@/utils/drawMixin";
import {formatTime} from '@/utils/index.js'
import centerLeft1 from '@/views/components/index/centerLeft1'
import centerLeft2 from '@/views/components/index/centerLeft2'
import centerRight1 from '@/views/components/index/centerRight1'
import centerRight2 from '@/views/components/index/centerRight2'
import center from '@/views/components/index/center'
import bottomLeft from '@/views/components/index/bottomLeft'
import bottomRight from '@/views/components/index/bottomRight'
import top from "@/views/components/top";

export default {
  mixins: [drawMixin],
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
    bottomRight,
    top
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
