<template>
  <div class="w-1/3 bg-slate-800 rounded-md p-4 shadow-md flex items-center justify-center h-48">
    <DonutCircle />
  </div>
</template>

<script>
import DonutCircle from '../graph/DonutCircle.vue';

export default {
  name: 'SleepTrackCard',
  components: {
    DonutCircle,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>