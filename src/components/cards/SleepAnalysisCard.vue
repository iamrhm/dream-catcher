<template>
  <div class="w-2/3 mr-4 bg-slate-800 rounded-md px-4 py-6 md:px-6 shadow-md h-full">
    <div class="text-left pb-8 text-xs md:text-sm font-semibold"> 🥱 &nbsp; Weekly Sleep </div>
    <div class="flex flex-row justify-between h-full">
      <BarChart
        v-for="(item, index) in items"
        :item="item"
        :index="index"
        :key="item.day"
      />
    </div>
  </div>
</template>

<script>
import BarChart from '../charts/BarChart.vue'

export default {
  name: 'SleepAnalysisCard',
  components: {
    BarChart
  },
  data() {
    return {
      items: [
        { day: 'Sun', hour: 4 },
        { day: 'Mon', hour: 5 },
        { day: 'Tue', hour: 5 },
        { day: 'Wed', hour: 7 },
        { day: 'Thu', hour: 6 },
        { day: 'Fri', hour: 8 },
        { day: 'Sat', hour: 3 },
      ]
    }
  }
}
</script>


<style scoped>
</style>