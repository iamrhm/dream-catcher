<template>
  <div class="min-h-full bg-slate-900 text-white">
    <div class="mx-auto max-w-xl p-4 pt-8">
      <AnalysisFold />
      <div class="relative">
        <div class="flex flex-row items-center justify-end">
        </div>
        <div class="flex justify-between pt-6 pb-4 text-sm md:text-lg font-semibold relative">
          💫 &nbsp; Your Dreams
          <button
            class="rounded-md w-9 px-2 py-2.5 text-sm shadow-md border border-slate-500 hover:border-slate-400 bg-slate-700"
            @click="toggleFilter"
          >
            <div
              class="w-full flex flex-col items-center justify-center"
            >
              <div class="w-full h-0.5 bg-white rounded-lg" />
              <div class="w-3/4 h-0.5 mt-1 bg-white rounded-lg" />
              <div class="w-1/4 h-0.5 mt-1 bg-white rounded-lg" />
            </div>
          </button>
          <FilterPicker
            v-if="showFilter"
            :sentiments="sentiments"
            @closeFilter="toggleFilter"
            @selectSentiment="selectSentiment"
          />
        </div>
        <DreamList/>
      </div>
    </div>
  </div>
</template>

<script>
  import DreamList from './folds/DreamList.vue';
  import AnalysisFold from './folds/AnalysisFold.vue'
  import FilterPicker from '../../components/forms/FilterPicker.vue';
  import { sentiments } from '../../utils';

  export default {
    name: 'LandingPage',
    components: {
      AnalysisFold,
      DreamList,
      FilterPicker,
    },
    data() {
      return {
        sentiments: [...sentiments.map(d => ({
          ...d, selected: false
        }))],
        selectedSentiments: [],
        showFilter: false,
      }
    },
    methods: {
      toggleFilter() {
        this.showFilter = !this.showFilter;
      },
      selectSentiment(idx) {
        this.sentiments[idx] = {
          ...this.sentiments[idx],
          selected: !this.sentiments[idx].selected,
        };
        this.selectedSentiments.push(this.sentiments[idx]);
      }
    }
  }
</script>
