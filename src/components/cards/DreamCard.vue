<template>
  <div class="w-full mb-8 bg-slate-800 rounded-md shadow-md">
    <div class="dream-display-content py-8 px-6">
      <p class='text-left line-clamp-3 text-sm font-medium'>
      <span
        v-for="(text, index) in dream.data.split('\n')"
        :key="index"
        :index="index"
      >
        {{ text }}
        <br/>
      </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DreamCard',
  props: ['dream']
}
</script>