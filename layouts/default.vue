<template>
  <div class="container" :class="{'h-52': isLargeScreen}">
  <div class="flex justify-between items-center mt-5 box">
      <LogoRAS v-if="!isLargeScreen" class=" fixed top-8 md:top-5 left-0 ml-[3%]"></LogoRAS>
      <TheHeader class="mr-[5%] z-50" />
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
  @apply h-48 w-screen fixed top-0 left-0 bg-white z-40;
 /* background: linear-gradient(rgb(255, 255, 255) , rgba(255, 255, 255, 0.250), rgb(255, 255, 255, 0.500), rgb(255, 255, 255,0.750),rgb(255, 255, 255, 0.99) );*/
 background: linear-gradient( rgba(255,255,255,1) 30%, rgba(255,255,255,0.5), rgba(255, 255, 255, 0.000));
 
}
.box{
  
  box-shadow: 0px 15px 100px 10px rgba(255,255,255,0.9);
  box-shadow: 0px 0px 100px 80px rgba(255, 255, 255, 0.9);
}
</style>