<template>
  <Modal>
    <div class="shadow px-6 py-4 flex justify-between items-center">
      <div class="flex items-center">
        <img class='w-8' src="../../assets/dreamIcon.svg" />
        <h3 class="text-base font-semibold leading-6 ml-2" id="modal-title">New Dream</h3>
      </div>
      <div
        class="rounded px-4 py-2 text-m font-medium cursor-pointer bg-gray-700 text-white"
        @click="handleCloseModal"
      >
        x
      </div>
    </div>

    <div class="p-4">
      <div class="w-full">
        <div class="mt-2">
          <textarea
            rows="6"
            class="block w-full rounded-md border-0 p-2 shadow-sm placeholder:text-gray-400 bg-gradient-to-r from-slate-800 to-gray-900 outline-none resize-none"
            placeholder="Write a few sentences about your dream."
            v-model="dream"
          />
        </div>
      </div>
    </div>

    <div class="px-6 pb-4 flex justify-between items-center">
      <p>
        {{ this.message }}
      </p>
      <button
        class="rounded-md px-6 py-2 text-sm shadow-md border border-slate-500 hover:border-slate-400 bg-slate-700 cursor-pointer outline-0"
        @click="handleSave"
      >
        Add
      </button>
    </div>
  </Modal>
</template>

<script>
  import Modal from '../common/Modal.vue';
  export default {
    name: 'AddDream',
    components: {
      Modal,
    },
    emits: ['closeModal', 'addDream'],
    data() {
      return {
        dream: '',
        message: '',
      }
    },
    methods: {
      handleCloseModal() {
        this.$emit('closeModal');
      },
      handleSave() {
        if(this.dream.length > 10) {
          this.$emit('addDream',this.dream);
          this.$emit('closeModal');
        } else {
          this.message = 'Dream bigger'
        }
      }
    }
  }
</script>

<style scoped>
</style>
