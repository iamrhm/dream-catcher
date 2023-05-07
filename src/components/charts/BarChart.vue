<template>
  <div
    class="flex flex-col items-center h-full bar"
  >
    <div class="w-full h-full bg-slate-900 rounded-lg relative">
      <div
        class="w-full bg-slate-100 rounded-lg absolute bottom-0 left-0 inner-bar"
        :style="{height: (item.hour/8) * 100 + '%'}"
      ></div>
    </div>
    <div class="mt-2 text-day">
      {{item.day}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'BarChart',
  props: ['item'],
}
</script>


<style scoped>
  .bar {
    width: 6px;
    min-width: 4px;
    height: 150px;
  }
  .inner-bar {
    height: 0%;
    transition: all 0.5s ease-in;
  }
  .text-day {
    font-size: 10px;
  }
</style>