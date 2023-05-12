<template>
  <div class="p-4 pt-8">
    <AnalysisFold />
    <div class="relative">
      <div class="mx-auto max-w-xl flex justify-between pt-6 pb-4 text-sm md:text-lg font-semibold relative items-center">
        💫 &nbsp; Your Dreams
      </div>
      <DreamList/>
    </div>
  </div>
</template>

<script>
  import DreamList from './folds/DreamList.vue';
  import AnalysisFold from './folds/AnalysisFold.vue'

  export default {
    name: 'LandingPage',
    components: {
      AnalysisFold,
      DreamList,
    },
  }
</script>
