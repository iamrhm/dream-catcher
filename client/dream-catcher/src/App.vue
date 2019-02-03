<template>
  <div id="app">
    <DreamCard />
  </div>
</template>

<script>
import DreamCard from './components/DreamCard.vue'

export default {
  name: 'app',
  components: {
    DreamCard
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background : #313c41;
  height: 100vh;
  width:100vw;
  overflow: hidden;
}
</style>
