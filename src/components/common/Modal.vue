<template>
  <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
    <div class="fixed inset-0 z-10 overflow-y-auto">
      <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-full sm:max-w-lg">
          <div class="bg-slate-800 ">
            <div class="shadow px-6 py-4 sm:flex sm:items-start">
              <h3 class="text-base font-semibold leading-6" id="modal-title">Select Date</h3>
            </div>
            <div class="sm:flex sm:items-start space-y-4 sm:space-x-4 sm:space-y-0 px-6 py-6">

                <div class="">
                  <label for="year" class="block text-sm font-medium leading-6">Year</label>
                  <div class="mt-2">
                    <input type="number" name="year" id="year" class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 ring-1 ring-inset ring-gray-300 outline-none">
                  </div>
                </div>

                <div class="">
                  <label for="month" class="block text-sm font-medium leading-6">Month</label>
                  <div class="mt-2">
                    <input type="number" name="month" id="month" class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 ring-1 ring-inset ring-gray-300 outline-none">
                  </div>
                </div>

                <div class="">
                  <label for="date" class="block text-sm font-medium leading-6">Date</label>
                  <div class="mt-2">
                    <input type="number" name="date" id="date" class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 ring-1 ring-inset ring-gray-300 outline-none">
                  </div>
                </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ModalComponent'
  }
</script>