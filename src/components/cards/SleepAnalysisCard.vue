<template>
  <div class="w-2/3 mr-4 bg-slate-800 rounded-md px-4 py-8 md:p-8 shadow-md h-full">
    <div class="flex flex-row justify-around space-x-2 md:space-x-4 h-full">
      <Bar />
      <Bar />
      <Bar />
      <Bar />
      <Bar />
      <Bar />
      <Bar />
    </div>
  </div>
</template>

<script>
import Bar from '../bar/Bar.vue'

export default {
  name: 'SleepAnalysisCard',
  components: {
    Bar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>