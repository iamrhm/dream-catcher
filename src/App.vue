<template>
  <div class="min-h-full bg-gray-800">
    <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
      <div>
        <SleepAnalysisCard />
        <SleepTrackCard />
      </div>
      <div>
        <DreamCard/>
      </div>
    </div>
  </div>
</template>

<script>
  import DreamCard from './components/cards/DreamCard.vue'
  import SleepAnalysisCard from './components/cards/SleepAnalysisCard.vue'
  import SleepTrackCard from './components/cards/SleepTrackCard.vue'

  export default {
    name: 'app',
    components: {
      DreamCard,
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
