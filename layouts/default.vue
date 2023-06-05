<template>

    <div class="flex justify-between items-center mt-5">
      <LogoRAS v-if="!isLargeScreen" class=" fixed top-8 md:top-5 left-0 ml-[3%]"></LogoRAS>
      <TheHeader class="mr-[5%]" />
    </div>
  
    <slot/>
    
  <TheFooter class="bottom-0 fixed" />
</template>

<script setup lang="ts">
import { useMediaQuery } from '@vueuse/core'
// import { useScroll } from '@vueuse/core'

const isLargeScreen = useMediaQuery('(min-width: 768px)')

</script>