<template>
  <div class="min-h-full bg-slate-900 text-white">
    <div class="shadow-md p-4 flex justify-center items-center">
      <div class="flex items-center">
        <!-- <img class='w-8' src="./assets/dream_icon.svg" />
        <div class="text-base font-semibold leading-6 ml-2">
          Dream journal
        </div> -->
      </div>
    </div>
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
