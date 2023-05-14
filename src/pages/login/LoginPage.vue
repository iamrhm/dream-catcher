<template>
  <div class="w-full h-screen p-8 flex justify-center items-center">

    <div class="mx-auto max-w-2xl flex flex-col sm:flex-row justify-around rounded-md p-6 sm:p-2 max-h-full sm:h-80 bg-gray-900  items-center shadow-2xl border border-solid border-cyan-900 popup-open">

      <div class="w-full sm:w-3/5 flex flex-col items-center justify-center">
        <img class='w-24 h-20' src="../../assets/dreamIcon.svg" />
        <div class="text-lg font-bold mt-2 bg-gradient-to-r from-cyan-50 to-cyan-800 bg-clip-text text-transparent">
          Dream journal
        </div>
        <p class="text-sm px-2 mt-4 opacity-75 w-3/4">
          A fun tool for recording and analyzing dreams to identify recurring patterns.
        </p>
      </div>

      <div class="h-1/4 w-px bg-neutral-50 opacity-0 sm:opacity-60" />

      <div class="w-full sm:w-2/5 pt-8 sm:pt-0">
        <p class="text-sm px-8 mb-4 opacity-75">
          Login with
        </p>
        <button
          class="rounded-md px-6 py-2 text-sm shadow-md border border-slate-500 hover:border-slate-400 bg-slate-700 cursor-pointer outline-0"
          @click="handleLogin"
        >
          Google
        </button>
      </div>

    </div>

  </div>
</template>

<script>
  import { signInWithGoogle } from '../../service/auth';

  export default {
    name: 'LoginPage',
    data() {
    },
    methods: {
      handleLogin() {
        signInWithGoogle();
      }
    }
  }
</script>

<style scoped>
  .popup-open {
    animation: open 0.2s ease-in forwards;
  }
  @keyframes open {
    0% {
      opacity: 0.5;
      margin-top: 32px;
    }
    100% {
      opacity: 1;
      margin-top: 0px;
    }
  }
</style>
