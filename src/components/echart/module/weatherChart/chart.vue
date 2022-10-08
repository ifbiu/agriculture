<template>
  <div>
    <Echart
        :options="options"
        id="weatherChart"
        height="300px"
        width="100%"
    ></Echart>
  </div>
</template>

<script>
import Echart from '@/common/echart'
import {getWeather} from '@/request'
import {weatherIconsURL} from "@/request/config";
export default {
  data () {
    return {
      options: {},
      weatherDataList:[],
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
  mounted() {
    this.getWeatherList()
  },
  methods:{
    async getWeatherList(){
      const res = await getWeather({
        city:this.$route.query['city']
      })
      console.log(res)
      if (res.code==="200"){
        this.weatherDataList = res.daily
      }else{
        console.log('request error')
      }
    }
  },
  watch: {
    weatherDataList: {
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
              data: this.weatherDataList.map(res=>{
                return res.fxDate
              })
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
              data: this.weatherDataList.map(res=>{
                return res.weekdayFormat
              }),
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
                      image: weatherIconsURL+this.weatherDataList[0].iconDay+'.svg',
                    },
                    height: 40,
                    width: 40,
                  },
                  1: {
                    backgroundColor: {
                      image: weatherIconsURL+this.weatherDataList[1].iconDay+'.svg'
                    },
                    height: 40,
                    width: 40
                  },
                  2: {
                    backgroundColor: {
                      image: weatherIconsURL+this.weatherDataList[2].iconDay+'.svg'
                    },
                    height: 40,
                    width: 40
                  },
                  3: {
                    backgroundColor: {
                      image: weatherIconsURL+this.weatherDataList[3].iconDay+'.svg'
                    },
                    height: 40,
                    width: 40
                  },
                  4: {
                    backgroundColor: {
                      image: weatherIconsURL+this.weatherDataList[4].iconDay+'.svg'
                    },
                    height: 40,
                    width: 40
                  },
                  5: {
                    backgroundColor: {
                      image: weatherIconsURL+this.weatherDataList[5].iconDay+'.svg'
                    },
                    height: 40,
                    width: 40
                  },
                  6: {
                    backgroundColor: {
                      image: weatherIconsURL+this.weatherDataList[6].iconDay+'.svg'
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
              data: this.weatherDataList.map(res=>{
                return res.textDay
              })
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
              data: this.weatherDataList.map(res=>{
                return res.tempMax
              }),
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
              data: this.weatherDataList.map(res=>{
                return res.tempMin
              }),
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
            }
          ]
        }
      },
      immediate: false,
      deep: true
    },
  },
}
</script>

<style lang="scss" scoped>
</style>