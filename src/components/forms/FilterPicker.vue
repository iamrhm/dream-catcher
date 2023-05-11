<template>
  <div
    class="absolute w-48 rounded-lg z-10 right-0 border-solid border border-slate-500 popup-open bg-slate-900/80 backdrop-blur-md"
  >
    <div class="flex flex-col px-4 py-4">
      <div
        class="w-full text-sm"
        v-for="(sentiment, index) in sentiments"
        :key="sentiment.value"
        :index="index"
      >
        <div
          class="mt-2 flex items-center cursor-pointer"
          @click="handleClick(index)"
        >
          <div
            class="h-4 w-5 rounded"
            :class="sentiment.selected ? 'bg-sky-500' : 'bg-slate-600'"
          />
          <div class="font-medium capitalize ml-4 flex items-center justify-between w-full">
            <span>{{ sentiment.value }}</span>
            <span>{{ sentiment.emoji }} </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'FilterPicker',
    props: ['sentiments'],
    emits: ['closeFilter', 'selectSentiment'],
    data() {
      return {
        message: '',
      }
    },
    methods: {
      handleClose() {
        this.$emit('closeModal');
      },
      handleClick(idx) {
        this.$emit('selectSentiment',idx);
      }
    }
  }
</script>

<style scoped>
  .popup-open {
    animation: open 0.2s ease-in both;
  }
  @keyframes open {
    0% {
      opacity: 0;
      top: 80px;
    }
    100% {
      opacity: 1;
      top: 74px;
    }
  }
</style>