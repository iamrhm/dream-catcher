<template>
  <div class="w-full">
    <div class="flex h-16 items-center justify-between mb-2 sticky top-0 bg-slate-900/80 backdrop-blur-md">
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
    </div>
    <div class="overflow-y-scroll">
      <DreamCard
        v-for="(dream, index) in dreamsArray"
        :dream="dream"
        :index="index"
        :key="dream.id"
      />
    </div>
  </div>
</template>

<script>
import DreamCard from '../cards/DreamCard.vue';

export default {
  name: 'DreamList',
  components: {
    DreamCard,
  },
  data() {
    return {
      dreamsArray: [
        { id: 1 } , { id: 2 } , { id: 3 } , { id: 4 } , { id: 5 } ,
        { id: 6 } , { id: 7 } , { id: 8 } , { id: 9 }
      ],
      filters: [
        { key: 1, value: 'All' },
        { key: 2, value: `Today's` },
        { key: 3, value: `Favorites` }
      ],
      selectedFilterKey: 1,
    }
  },
  methods: {
    updateFilter(filter) {
      this.selectedFilterKey = filter.key;
    }
  },
}
</script>


<style scoped>
</style>