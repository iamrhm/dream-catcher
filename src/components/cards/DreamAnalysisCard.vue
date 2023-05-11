<template>
  <div class="w-2/3 mr-4 bg-slate-800 rounded-md px-4 py-6 md:px-6 shadow-md h-full">
    <div class="text-left pb-8 text-xs md:text-sm font-semibold"> Dream Analysis </div>
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
import { fetchDreamEmotion } from '../../services/dreams';

export default {
  name: 'DreamAnalysisCard',
  components: {
    BarChart
  },
  data() {
    return {
      items: [...fetchDreamEmotion()]
    }
  }
}
</script>