<template>
    <div class="motion-safe:animate-bounce ">
      <button
        type="button"
        @click="openModal"
        class="rounded-md bg-rockPurple px-4 py-2 text-sm font-medium text-white hover:bg-opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-rockGreen focus-visible:ring-opacity-75"
      >
       {{ printingtype?.toUpperCase() }} PRICING
      </button>
    </div>
    <TransitionRoot appear :show="isOpen" as="template">
      <Dialog as="div" @close="closeModal" class="relative z-10">
        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black bg-opacity-50" />
        </TransitionChild>
  
        <div class="fixed inset-0 overflow-y-auto">
          <div
            class="flex min-h-full items-center justify-center p-4 text-center"
          >
            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
            >
              <DialogPanel
                class="w-full max-w-md transform overflow-hidden rounded-2xl bg-rockblack p-6 text-left align-middle shadow-xl transition-all"
              >
                <!-- <DialogTitle
                  as="h3"
                  class="text-lg font-medium leading-6 text-gray-900"
                >
                  SCREEN PRINTING PRICING:
                </DialogTitle> -->
                <div class="mt-2">
                  <img src="../assets/SPpricingtable.png" :alt="`${printingtype} pricing`" class="">
                </div>
  
                <NuxtLink to="/contact" class="">
                  <h1 class="text-rockGreen text-center text-xl font-bold py-1 bg-rockPurple rounded-xl hover:bg-rockGreen hover:text-rockPurple">GET A QUOTE</h1>
                </NuxtLink>

                <div class="mt-4">
                  <button
                    type="button"
                    class="absolute top-[-2px] right-[-3px] inline-flex justify-center rounded-bl-lg border border-transparent bg-rockPurple px-4 py-2 text-sm font-medium text-white hover:bg-rockGreen focus:outline-none focus-visible:ring-2 focus-visible:ring-rockGreen focus-visible:ring-offset-2"
                    @click="closeModal"
                  >
                  <span class="text-xl">x</span>
                </button>
              </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </template>
  
  <script setup lang="ts">
  import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
  } from '@headlessui/vue'
  
  const props = defineProps({
    printingtype: String,
    filename: String,

  })

  const isOpen = ref(false)
  
  function closeModal() {
    isOpen.value = false
  }
  function openModal() {
    isOpen.value = true
  }
  </script>
  