<template>
  <div class="min-h-full bg-gradient-to-r from-gray-800 to-gray-900 text-white">
    <div
      class="shadow-md p-4 flex justify-center items-center"
      v-if="$route.path !== '/login'"
    >
      <div class="flex items-center">
        <img class='w-8' src="./assets/dreamIcon.svg" />
        <div class="text-lg font-bold leading-6 ml-2">
          Dream journal 
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'app',
    components: { },
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
