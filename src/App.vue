<template>
  <div class="min-h-full bg-slate-900 text-white">
    <LandingPage />
  </div>
</template>

<script>
  import LandingPage from './pages/landing/LandingPage.vue'

  export default {
    name: 'app',
    components: {
      LandingPage,
    },
    data() {},
    methods: { }
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
