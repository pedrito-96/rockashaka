<template>
  <div class="container" :class="{'h-52': isLargeScreen}">
  <div class="flex justify-between items-center mt-5">
      <LogoRAS v-if="!isLargeScreen" class=" fixed top-8 md:top-5 left-0 ml-[3%]"></LogoRAS>
      <TheHeader class="mr-[5%]" />
    </div>
    </div>
  
    <slot/>
    
  <TheFooter class="bottom-0 md:fixed" />
</template>

<script setup lang="ts">
import { useMediaQuery } from '@vueuse/core'
// import { useScroll } from '@vueuse/core'

const isLargeScreen = useMediaQuery('(min-width: 768px)')

</script>

<style scoped>
.container {
  @apply h-48 w-screen bg-white fixed top-0 left-0;
  background: linear-gradient(#ffffff 30%, #ffffffbc 60%, #ffffffbc 80%, #ffffff00 100%);
}

</style>