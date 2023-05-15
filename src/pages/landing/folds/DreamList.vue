<template>
  <div class="w-full mt-4">
    <div class="bg-gradient-to-r from-gray-800 to-gray-900 backdrop-blur-md sticky top-0">
      <div class="flex h-16 items-center justify-between mb-6 mx-auto max-w-xl">
        <div class="flex items-center">
          <div class="flex items-baseline flex-wrap">
            <div
              class="text-gray-300 rounded px-3 py-2 text-sm font-medium cursor-pointer mr-4"
              v-for="(filter, index) in filters"
              :key="filter.key"
              :index="index"
              :class="[index !== filters.length - 1 ? 'mr-4' : '', filter.key === selectedFilterKey ? 'bg-gray-700 text-white' : '']"
              @click="updateFilter(filter)"
            >
              {{filter.value}}
            </div>
          </div>
        </div>
        <div class="flex items-center relative">
          <button
            class="rounded-md px-3 py-2 bg-slate-700 shadow-md border-solid border border-sky-500 flex justify-center items-center text-sm font-semibold"
            @click="toggleDreamModal()"
          >
            <span class="hidden sm:block">Add Dreams &nbsp;</span> 💭
          </button>
          <button
            class="rounded-md w-9 px-2 py-2.5 text-sm shadow-md border border-slate-500 hover:border-slate-400 bg-slate-700 ml-4"
            @click="toggleShowCategory"
          >
            <div
              class="w-full flex flex-col items-center justify-center"
            >
              <div class="w-full h-0.5 bg-white rounded-lg" />
              <div class="w-3/4 h-0.5 mt-1 bg-white rounded-lg" />
              <div class="w-1/4 h-0.5 mt-1 bg-white rounded-lg" />
            </div>
          </button>
          <CategoryFilter
            v-if="showCategory"
            :categories="categories"
            @closeCategory="toggleShowCategory"
            @selectCategory="selectCategory"
          />
        </div>
      </div>
    </div>
    <div class="mx-auto max-w-xl overflow-y-scroll">
      <DreamCard
        v-for="(dream, index) in dreamsArray"
        :dream="dream"
        :index="index"
        :key="dream.id"
      />
    </div>
    <AddDream
      v-if="showDreamModal"
      @closeModal="toggleDreamModal"
      @addDream="addDream"
    />
  </div>
</template>

<script>
import DreamCard from '../../../components/cards/DreamCard.vue';
import AddDream from '../../../components/forms/AddDream.vue';
import CategoryFilter from '../../../components/forms/CategoryFilter.vue';
import { sentiments } from '../../../utils';

export default {
  name: 'DreamList',
  components: {
    DreamCard,
    AddDream,
    CategoryFilter,
  },
  data() {
    return {
      categories: [...sentiments.map(d => ({
        ...d, selected: false
      }))],
      selectedCategory: [],
      showCategory: false,

      dreamsArray: [],
      filters: [
        { key: 1, value: 'All' },
        { key: 2, value: 'Favorites' }
      ],
      selectedFilterKey: 1,
      showDreamModal: false,
    }
  },
  methods: {
    toggleDreamModal() {
      this.showDreamModal = !this.showDreamModal;
    },
    selectCategory(idx) {
      this.categories[idx] = {
        ...this.categories[idx],
        selected: !this.categories[idx].selected,
      };
      this.selectedCategory.push(this.categories[idx]);
    },
    updateFilter(filter) {
      this.selectedFilterKey = filter.key;
    },
    addDream(dream) {
      this.dreamsArray.push({
        id: this.dreamsArray.length + 1,
        data: dream,
        favorite: false,
      });
    },
    toggleShowCategory() {
      this.showCategory = !this.showCategory;
    },
  },
}
</script>
