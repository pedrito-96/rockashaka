<script setup lang="ts">
// import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'

// const green = ref(null);
// let g: gsap.core.Tween;

// if (process.client) {
// gsap.registerPlugin(ScrollTrigger);
// }

// onMounted(() => {
// //   g = gsap.to(green.value, {
// //     scrollTrigger: {
// //       trigger: green.value,
// //       start: "top 170px",
// //       end: "top top",
// //       toggleActions: "restart null null null",
// //       markers: true,
// //     },
// //     opacity: 0.1,
// //     y: -100,
// //     duration: 5,
// //   });
//   g = gsap.to(green.value, {
//     scrollTrigger: {
//       trigger: green.value,
//       start: "top 170px",
//       end: "top top",
//       toggleActions: "restart null null null",
//       markers: true,
//     },
//       rotation: 360, 
//       x:500, 
//       duration: 10,
//   });
//     //   gsap.to(green.value, {rotation: 360, x:500, duration: 10,});
// })

// onUnmounted(() => {
// g.revert();
// });
</script>


<template>
<div class="index">

    <LogoRockAShaka></LogoRockAShaka>    
    
    <!-- <div ref="green" class=" w-32 h-32 bg-slate-500 mt-[1000px]">
        S
    </div>
-->
    <div  class="w-screen h-fit">
    <HomeCats></HomeCats>
    </div>    

</div>
</template>

<style scoped>

</style>