<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const isLargeScreen = useMediaQuery('(min-width: 768px)')
// class="block w-[60%] mx-auto mt-[15%]"
let mm = gsap.matchMedia();



const catAnimation = ref(null);
const cat2Animation = ref(null);
let g: gsap.core.Tween;

if (process.client) {
gsap.registerPlugin(ScrollTrigger);
}

onMounted(() => {

  mm.add("(min-width: 768px)", () => {
  g = gsap.to(catAnimation.value, {
    scrollTrigger: {
      trigger: catAnimation.value,
      start: "90px bottom",
      end: "bottom",
      toggleActions: "play null null reset",
      pinSpacing: true,
      // markers: true,
    },
    y: -300,
    ease: "bounce.out",
    duration: 1,
  })
  g = gsap.to(cat2Animation.value, {
    scrollTrigger: {
      trigger: cat2Animation.value,
      start: "90px bottom",
      end: "bottom",
      toggleActions: "play null null reverse",
      pinSpacing: true,
      // markers: true,
      
    },
    y: -300,
    ease: "bounce.out",
    duration: 1,
  });
});
  
})

onUnmounted(() => {
g.revert();
});

</script>

<template>
<div class="flex flex-col justify-center items-center">

    <div ref="catAnimation" class="grid md:grid-cols-2 mt-[50%] md:mt-[100vh] mb-32 content-center items-center justify-items-center mx-[10%] gap-y-10">
        <img src="../assets/cats/cat_1.png" class="w-36 md:w-52 md:order-2"/>
        <h1 class="font-bold justify-self-center text-xl md:text-2xl text-center">Your design, your style, <br/> wherever you need it <br/> at an affordable price!</h1>
    </div>
    
    
    <div ref="cat2Animation" class="grid md:grid-cols-2 mt-10 md:mt-[40vh] content-center items-center justify-items-center mx-[10%] gap-y-10 mb-32">
        <img src="../assets/cats/cat_10.png" class="w-36 md:w-56"/>
        <div>
            <h1 class="font-bold justify-self-center text-xl md:text-2xl">What do we offer</h1>
            <p class="justify-self-center text-xl md:text-2xl text-center">Screen Printing &amp; <br/> Heat transfer Vinyl</p>
        </div>
    </div>
</div>

</template>