<script setup lang="ts">
// import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'

// const green = ref(null);

// if (process.client) {
// gsap.registerPlugin(ScrollTrigger);
// }

// onMounted(() => {
//   gsap.to(green.value, {
//     scrollTrigger: {
//       trigger: green.value,
//       start: "top 170px",
//       end: "top top",
//       toggleActions: "restart null null null",
//       markers: true,
//     },
//     opacity: 0.1,
//     y: -100,
//     duration: 5,
  
//   }
//   );
//   // gsap.to(green.value, {rotation: 360, x:500, duration: 10});
// })

</script>


<template>

    <LogoRockAShaka></LogoRockAShaka>    
    
    <!-- <div ref="green" class=" w-32 h-32 bg-slate-500 mt-[1000px]">
        S
    </div> -->
    
    <div  class="w-screen h-fit">
        <HomeCats></HomeCats>
    </div>    

</template>

<style scoped>

</style>