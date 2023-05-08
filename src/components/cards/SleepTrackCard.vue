<template>
  <div class="w-1/3">
  <div class="w-full bg-slate-800 rounded-md p-4 py-6 shadow-md">
    <div class="text-left pb-8 text-xs md:text-sm truncate font-semibold"> 😴 &nbsp; Daily Sleep </div>
    <CircleChart />
  </div>
  </div>
</template>

<script>
import CircleChart from '../charts/DonutChart.vue';

export default {
  name: 'SleepTrackCard',
  components: {
    CircleChart,
  }
}
</script>


<style scoped>
</style>