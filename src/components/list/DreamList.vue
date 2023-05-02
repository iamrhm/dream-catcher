<template>
  <div class="w-full">
    <div class="flex h-16 items-center justify-between mb-2 sticky top-0 bg-slate-900/80 backdrop-blur-md">
      <div class="flex items-center">
        <div class="flex items-baseline flex-wrap">
          <div class="text-gray-300 lg:hover:bg-gray-700 lg:hover:text-white rounded px-3 py-2 text-sm font-medium cursor-pointer mr-4">All</div>
          <div class="text-gray-300 lg:hover:bg-gray-700 lg:hover:text-white rounded px-3 py-2 text-sm font-medium cursor-pointer mr-4">Today</div>
          <div class="text-gray-300 lg:hover:bg-gray-700 lg:hover:text-white rounded px-3 py-2 text-sm font-medium cursor-pointer">Bookmarked</div>
        </div>
      </div>
    </div>
    <div class="overflow-y-scroll">
      <DreamCard />
      <DreamCard />
      <DreamCard />
      <DreamCard />
      <DreamCard />
      <DreamCard />
      <DreamCard />
      <DreamCard />
      <DreamCard />
      <DreamCard />
      <DreamCard />
      <DreamCard />
      <DreamCard />
      <DreamCard />
    </div>
  </div>
</template>

<script>
import DreamCard from '../cards/DreamCard.vue';

export default {
  name: 'DreamList',
  components: {
    DreamCard,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>