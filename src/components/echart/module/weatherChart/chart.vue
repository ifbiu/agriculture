<template>
  <div>
    <Echart
        :options="options"
        id="weatherChart"
        height="480px"
        width="100%"
    ></Echart>
  </div>
</template>

<script>
import Echart from '@/common/echart'
export default {
  data () {
    return {
      options: {},
    };
  },
  components: {
    Echart,
  },
  props: {
    cdata: {
      type: Object,
      default: () => ({})
    },
  },
  watch: {
    cdata: {
      handler (newData) {
        this.options = {
          grid: {
            show: true,
            backgroundColor: 'transparent',
            opacity: 0.3,
            borderWidth: '0',
            top: '180',
            bottom: '0'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            show: false
          },
          xAxis: [
            // 日期
            {
              type: 'category',
              boundaryGap: false,
              position: 'top',
              offset: 130,
              zlevel: 100,
              axisLine: {
                show: false
              },
              axisTick: {
                show: false
              },
              axisLabel: {
                interval: 0,
                formatter: [
                  '{a|{value}}'
                ].join('\n'),
                rich: {
                  a: {
                    // color: 'white',
                    fontSize: 18
                  }
                }
              },
              nameTextStyle: {

              },
              data: ["25日", "26日", "27日", "28日", "29日", "30日", "31日"]
            },
            // 星期
            {
              type: 'category',
              boundaryGap: false,
              position: 'top',
              offset: 110,
              zlevel: 100,
              axisLine: {
                show: false
              },
              axisTick: {
                show: false
              },
              axisLabel: {
                interval: 0,
                formatter: [
                  '{a|{value}}'
                ].join('\n'),
                rich: {
                  a: {
                    // color: 'white',
                    fontSize: 14
                  }
                }
              },
              nameTextStyle: {
                fontWeight: 'bold',
                fontSize: 19
              },
              data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
            },
            // 天气图标
            {
              type: 'category',
              boundaryGap: false,
              position: 'top',
              offset: 20,
              zlevel: 100,
              axisLine: {
                show: false
              },
              axisTick: {
                show: false
              },
              axisLabel: {
                interval: 0,
                formatter: function (value, index) {
                  return '{' + index + '| }\n{b|' + value + '}'
                },
                rich: {
                  0: {
                    backgroundColor: {
                      // image: require('@/assets/weather_icon/' + this.weatherIconDic[this.weatherdata.weather[0]] + '.png')
                      image: 'https://d.scggqx.com/forecast/img/小雨.png'
                    },
                    height: 40,
                    width: 40
                  },
                  1: {
                    backgroundColor: {
                      // image: require('@/assets/weather_icon/' + this.weatherIconDic[this.weatherdata.weather[1]] + '.png')
                      image: 'https://d.scggqx.com/forecast/img/小雨.png'
                    },
                    height: 40,
                    width: 40
                  },
                  2: {
                    backgroundColor: {
                      // image: require('@/assets/weather_icon/' + this.weatherIconDic[this.weatherdata.weather[2]] + '.png')
                      image: 'https://d.scggqx.com/forecast/img/阴.png'
                    },
                    height: 40,
                    width: 40
                  },
                  3: {
                    backgroundColor: {
                      // image: require('@/assets/weather_icon/' + this.weatherIconDic[this.weatherdata.weather[3]] + '.png')
                      image: 'https://d.scggqx.com/forecast/img/小雨.png'
                    },
                    height: 40,
                    width: 40
                  },
                  4: {
                    backgroundColor: {
                      // image: require('@/assets/weather_icon/' + this.weatherIconDic[this.weatherdata.weather[4]] + '.png')
                      image: 'https://d.scggqx.com/forecast/img/多云.png'
                    },
                    height: 40,
                    width: 40
                  },
                  5: {
                    backgroundColor: {
                      // image: require('@/assets/weather_icon/' + this.weatherIconDic[this.weatherdata.weather[5]] + '.png')
                      image: 'https://d.scggqx.com/forecast/img/小雨.png'
                    },
                    height: 40,
                    width: 40
                  },
                  6: {
                    backgroundColor: {
                      // image: require('@/assets/weather_icon/' + this.weatherIconDic[this.weatherdata.weather[6]] + '.png')
                      image: 'https://d.scggqx.com/forecast/img/小雨.png'
                    },
                    height: 40,
                    width: 40
                  },
                  b: {
                    // color: 'white',
                    fontSize: 12,
                    lineHeight: 30,
                    height: 20
                  }
                }
              },
              nameTextStyle: {
                fontWeight: 'bold',
                fontSize: 19
              },
              // data: this.weatherdata.weather
              data: ["小雨", "小雨", "阴", "小雨", "多云", "小雨", "小雨"]
            }
          ],
          yAxis: {
            type: 'value',
            show: false,
            axisLabel: {
              formatter: '{value} °C',
              color: 'white'
            }
          },
          series: [
            {
              name: '最高气温',
              type: 'line',
              data: ["16.3", "16.2", "17.6", "14.2", "17.6", "15.7", "14.3"],
              symbol: 'emptyCircle',
              symbolSize: 10,
              showSymbol: true,
              smooth: true,
              itemStyle: {
                normal: {
                  color: '#C95843'
                }
              },
              label: {
                show: true,
                position: 'top',
                // color: 'white',
                formatter: '{c} °C'
              },
              lineStyle: {
                width: 1,
                // color: 'white'
              },
              areaStyle: {
                opacity: 1,
                color: 'transparent'
              }
            },
            {
              name: '最低气温',
              type: 'line',
              data: ["13.4", "12.8", "13.5", "12.5", "12.4", "13.2", "13"],
              symbol: 'emptyCircle',
              symbolSize: 10,
              showSymbol: true,
              smooth: true,
              itemStyle: {
                normal: {
                  color: '#1470fb'
                }
              },
              label: {
                show: true,
                position: 'bottom',
                // color: 'white',
                formatter: '{c} °C'
              },
              lineStyle: {
                width: 1,
                // color: 'white'
              },
              areaStyle: {
                opacity: 1,
                color: 'transparent'
              }
            }
          ]
        }
      },
      immediate: true,
      deep: true
    },
  },
}
</script>

<style scoped>

</style>