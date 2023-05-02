<template>
  <div class="min-h-full bg-slate-900 p-4 text-white">
    <div class="mx-auto max-w-5xl py-6 sm:px-6 lg:px-8">
      <div class="flex flex-row mb-6 items-center justify-end">
        <button class="rounded-md px-3 py-2 text-sm shadow-md border border-slate-500 hover:border-slate-400 bg-slate-700">
          Date Picker
        </button>
      </div>
      <div class="flex flex-row h-48 mb-8">
        <SleepAnalysisCard />
        <SleepTrackCard />
      </div>
      <div class="relative">
        <DreamList/>
      </div>
    </div>
  </div>
</template>

<script>
  import DreamList from './components/list/DreamList.vue'
  import SleepAnalysisCard from './components/cards/SleepAnalysisCard.vue'
  import SleepTrackCard from './components/cards/SleepTrackCard.vue'

  export default {
    name: 'app',
    components: {
      DreamList,
      SleepAnalysisCard,
      SleepTrackCard,
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  width:100vw;
}
</style>
