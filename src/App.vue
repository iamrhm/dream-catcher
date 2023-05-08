<template>
  <div class="min-h-full bg-slate-900 text-white">
    <div class="mx-auto max-w-xl p-4 pt-8">
      <div class="flex flex-row mb-8 items-center justify-end">
        <button
          class="rounded-md px-3 py-2 text-sm shadow-md border border-slate-500 hover:border-slate-400 bg-slate-700"
          @click="toggleModal()"
        >
          Date Picker
        </button>
      </div>
      <div class="flex flex-row mb-8 h-full">
        <SleepAnalysisCard />
        <SleepTrackCard />
      </div>
      <div class="relative">
        <div class="text-left pt-6 pb-4 text-sm md:text-lg font-semibold"> 💫 &nbsp; Your Dreams </div>
        <DreamList/>
      </div>
    </div>
    <ModalComponent v-if="showModal" />
  </div>
</template>

<script>
  import DreamList from './components/list/DreamList.vue'
  import SleepAnalysisCard from './components/cards/SleepAnalysisCard.vue'
  import SleepTrackCard from './components/cards/SleepTrackCard.vue'
  import ModalComponent from './components/common/Modal.vue'

  export default {
    name: 'app',
    components: {
      DreamList,
      SleepAnalysisCard,
      SleepTrackCard,
      ModalComponent,
    },
    data() {
      return {
        showModal: false,
      }
    },
    methods: {
      toggleModal() {
        this.showModal = !this.showModal;
      }
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
