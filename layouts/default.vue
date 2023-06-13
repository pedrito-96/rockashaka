<template>
  <div class="container">
  <div class="flex justify-between items-center mt-0 box">
      <LogoRAS v-show="!isLargeScreen" class="fixed top-4 md:top-5 left-0 ml-[7%]"></LogoRAS>
      <TheHeader class="mr-[5%] z-50" />
    </div>
    </div>
  
    <slot />

    <div class="">
    <TheFooter class="bottom-0 md:fixed" />
  </div>
</template>

<script setup lang="ts">
import { useMediaQuery } from '@vueuse/core'

const isLargeScreen = useMediaQuery('(min-width: 768px)')

</script>

<style scoped>
.container {
  @apply h-80 md:h-48 w-screen fixed top-0 left-0 right-0 bg-white z-40;
 background: linear-gradient( rgb(255, 255, 236) 30%, rgba(255,255,236,0.5), rgba(255, 255, 236, 0.000));
 
}
.box{
  box-shadow: 0px 15px 100px 10px rgba(255,255,236, 0.9);
  box-shadow: 0px 0px 100px 80px rgba(255, 255, 236, 0.9);
}

.footer{
  @apply h-36 md:h-32 w-screen bg-white z-40 mr-0;
 background: linear-gradient(to top, rgb(250, 250, 236) 30%, rgba(255,255,236,0.5), rgba(255, 255, 236, 0.000));
}

/*Need to keep this 2 to have screen width container*/
@media (min-width: 768px){
  .container {
    max-width: 100vw;
  }
}
  @media (min-width: 640px){
    .container {
        max-width: 100vw;
    }
  }
</style>