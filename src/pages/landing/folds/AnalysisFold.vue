<template>
  <div class="mx-auto max-w-xl flex flex-row mb-8 h-full">
    <DreamAnalysisCard
      :dreamEmotion="dreamEmotion"
    />
    <DreamTrackCard
      :dreamEmotion="dreamEmotion"
    />
  </div>
</template>

<script>
  import DreamAnalysisCard from '../../../components/cards/DreamAnalysisCard.vue'
  import DreamTrackCard from '../../../components/cards/DreamTrackCard.vue'
  import { fetchDreamEmotion } from '../../../config/dreams';

  export default {
    name: 'AnalysisFold',
    components: {
      DreamAnalysisCard,
      DreamTrackCard,
    },
    data() {
      return {
        dreamEmotion: [...fetchDreamEmotion()]
      }
    }
  }
</script>
