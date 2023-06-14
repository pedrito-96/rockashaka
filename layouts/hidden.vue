<template>
  <div class="flex justify-between items-center mt-5 z-50" :class="{ 'navbar' : isNavbarVisible}">
      <div class="">
      <LogoRAS2 :style="{ 'fill': dynamicBgColor + ' !important' }"
      class="fixed top-2 md:top-5 left-0 ml-[3%] z-50"></LogoRAS2>
      <TheHeader class="mr-[5%] text-red-300 z-50"/>
    </div> 
    </div> 

    <slot />
<div class="relative h-32 w-full">
  <TheFooter class=" absolute bottom-0" :style="{ 'color': dynamicBgColor + ' !important' }" />
</div>

  </template>
  
  <script setup>
import { usePageBgColor } from "~/composables/usePageBgColor";
const { dynamicBgColor } = usePageBgColor();

const scrollPosition = ref(0);
const isNavbarVisible = ref(false);

const updateScrollPosition = () => {
  scrollPosition.value = window.pageYOffset;
  // console.log(scrollPosition)
};

onMounted(() => {
  window.addEventListener('scroll', updateScrollPosition);
});

watch(scrollPosition, (newValue) => {
  // Check the scroll direction
  isNavbarVisible.value = newValue > 130;
});

</script>

<style scoped>

.nav {
  opacity: 1;
  transition: 0.5s ease-in-out;
}
.navbar {
  transform: translateY(-250px);
  opacity: 0.1;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
}

/*
.bg-footer {
  background-color: azure;
  background-image: url(../assets/footer.svg);
  background-repeat: no-repeat;
  background-size:100% 100%;
  width: 100%;
  height: 400px;
}
*/

</style>