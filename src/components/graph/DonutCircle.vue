<template>
  <div
    class="bg-slate-100 rounded-full relative flex items-center justify-center p-2 md:p-4 circle"
  >
    <div class="w-full h-full bg-slate-800 rounded-full">
    </div>
  </div>
</template>

<script>
export default {
  name: 'DonutCircle',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .circle {
    width: 84px;
    height: 84px;
  }
  @media (min-width: 768px) {
    .circle {
      width: 120px;
      height: 120px;
    }
  }
</style>