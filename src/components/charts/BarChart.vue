<template>
  <div
    class="flex flex-col items-center h-full bar"
  >
    <div class="w-full h-full bg-slate-900 rounded-lg relative">
      <div
        class="w-full bg-slate-100 rounded-lg absolute bottom-0 left-0 inner-bar"
      />
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
  data(){
    return {
      height: (this.item.hour/8) * 100 + '%',
    }
  }
}
</script>


<style scoped>
  .bar {
    width: 6px;
    min-width: 4px;
    height: 150px;
  }
  .inner-bar {
    animation: grow 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }
  .text-day {
    font-size: 10px;
  }
  @keyframes grow {
    0% {
      height: 0px;
    }
    100% {
      height: v-bind(height);
    }
  }
</style>