<template>
  <div
    class="flex flex-col items-center h-full bar"
  >
    <div class="w-full h-full bg-slate-900 rounded-lg relative">
      <div
        class="w-full h-1/2 bg-slate-100 rounded-lg absolute bottom-0 left-0"
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
  name: 'VerticalBar',
  props: ['item'],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .bar {
    width: 3%;
    min-width: 4px;
  }
  .text-day {
    font-size: 10px;
  }
</style>