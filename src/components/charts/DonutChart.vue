<template>
  <div
    class="relative flex items-center justify-center w-full"
    id="donut-chart"
  >
    <apexchart
      type="radialBar"
      :height="chartOptions.chart.height"
      :options="chartOptions"
      :series="series"
      style="backgroundColor: #1E293B"
    />
  </div>
</template>

<script>
export default {
  name: 'DonutChart',
  data: function() {
    return {
      series: [70],
      chartOptions: {
        chart: {
          height: 192,
          type: 'radialBar',
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: '70%',
              background: 'transparent',
              margin: 0,
            },
            track: {
              show: true,
              background: '#0f172a',
            },
            dataLabels: {
              value: {
                fontSize: '14px',
                color: '#fff',
                offsetY: -10
              },
              total: {
                show: true,
                label: '',
                formatter: function () {
                  return '6 hr'
                }
              }
            }
          },
        },
        colors: ['#f1f5f9'],
        stroke: {
          lineCap: "round",
        },
        responsive: [
          {
            breakpoint: 540,
            options: {
              chart: {
                height: 180,
              },
            }
          },
          {
            breakpoint: 501,
            options: {
              chart: {
                height: 160,
              },
              plotOptions: {
                radialBar: {
                  hollow: {
                    size: '65%'
                  }
                }
              }
            }
          },
          {
            breakpoint: 450,
            options: {
              chart: {
                height: 130,
              },
              plotOptions: {
                radialBar: {
                  hollow: {
                    size: '60%'
                  },
                  dataLabels: {
                    value: {
                      fontSize: '12px'
                    }
                  }
                }
              }
            }
          },
          {
            breakpoint: 370,
            options: {
              chart: {
                height: 110,
              },
              plotOptions: {
                radialBar: {
                  hollow: {
                    size: '50%'
                  },
                  dataLabels: {
                    value: {
                      fontSize: '10px'
                    }
                  }
                }
              }
            }
          }
        ]
      },
    }
  }
}
</script>


<style scoped>
  #donut-chart {
    height: 150px;
  }
</style>