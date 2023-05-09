<template>
  <Modal>
    <div class="shadow px-6 py-4 flex justify-between items-center">
      <h3 class="text-base font-semibold leading-6" id="modal-title">Select Date</h3>
      <div
        class="rounded px-4 py-2 text-m font-medium cursor-pointer bg-gray-700 text-white"
        @click="handleCloseModal"
      >
        x
      </div>
    </div>

    <div class="sm:flex sm:items-start space-y-4 sm:space-x-4 sm:space-y-0 px-6 py-6">

        <div class="w-full">
          <label for="year" class="block text-sm font-medium leading-6">Year</label>
          <div class="mt-2">
            <input
              type="number"
              name="year"
              id="year"
              class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 ring-1 ring-inset ring-gray-300 outline-none"
              min="1900"
              :max="currentYear"
              v-model="inputValues.year"
            >
          </div>
        </div>

        <div class="w-full">
          <label for="month" class="block text-sm font-medium leading-6">Month</label>
          <div class="mt-2">
            <input
              type="number"
              name="month"
              id="month"
              class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 ring-1 ring-inset ring-gray-300 outline-none"
              min="1"
              max="12"
              v-model="inputValues.month"
            >
          </div>
        </div>

        <div class="w-full">
          <label for="date" class="block text-sm font-medium leading-6">Date</label>
          <div class="mt-2">
            <input
              type="number"
              name="date"
              id="date"
              class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 ring-1 ring-inset ring-gray-300 outline-none"
              min="1"
              max="31"
              v-model="inputValues.date"
            >
          </div>
        </div>

    </div>

    <div class="px-6 pb-4 flex justify-end items-center">
      <p class="w-full"> {{ message }} </p>
      <div
        class="rounded-md px-3 py-2 text-sm shadow-md border border-slate-500 hover:border-slate-400 bg-slate-700 cursor-pointer"
        @click="validateDate"
      >
        Show
      </div>
    </div>

  </Modal>
</template>

<script>
  import Modal from '../common/Modal.vue';

  export default {
    name: 'DatePicker',
    components: {
      Modal,
    },
    data(){
      const currentDate = new Date();
      return {
        currentYear: currentDate.getFullYear(),
        inputValues: {
          year: currentDate.getFullYear(),
          month: currentDate.getMonth() + 1,
          date: currentDate.getDate(),
        },
        message: '',
      }
    },
    methods: {
      handleCloseModal() {
        this.$emit('closeModal');
      },
      validateDate() {
        const inputYear = this.inputValues.year;
        const inputMonth = this.inputValues.month - 1;
        const inputDate = this.inputValues.date;
        const dateObj = new Date(inputYear, inputMonth, inputDate);
        if (dateObj.getFullYear() !== inputYear || dateObj.getMonth() !== inputMonth || dateObj.getDate() !== inputDate) {
          this.message = 'Invalid date!!  🤦🏻';
        } else {
          this.message = '';
        }
      }
    }
  }
</script>