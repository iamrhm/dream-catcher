<template>
  <div class="w-2/3 mr-4 bg-slate-800 rounded-md px-6 py-6 shadow-md h-48">
    <div class="flex flex-row justify-between h-full">
      <VerticalBar
        v-for="(item, index) in items"
        :item="item"
        :index="index"
        :key="item.day"
      />
    </div>
  </div>
</template>

<script>
import VerticalBar from '../graph/VerticalBar.vue'

export default {
  name: 'SleepAnalysisCard',
  components: {
    VerticalBar
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>