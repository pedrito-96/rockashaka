<template>
    <div class="flex justify-between items-center mt-5 z-50 bg-white w-screen" :class="{ 'navbar' : !isNavbarVisible}">
      <LogoRAS class="fixed top-8 md:top-5 left-0 ml-[3%] fill-red-300 z-50"></LogoRAS>
      <TheHeader class="mr-[5%] text-red-300 z-50"/>
    </div> 

      <slot/>
      
    <TheFooter class="bottom-0 text-red-300 bg-black" />
  </template>
  
  <script setup>


const scrollPosition = ref(0);
const isNavbarVisible = ref(true);

const updateScrollPosition = () => {
  scrollPosition.value = window.pageYOffset;
};

onMounted(() => {
  window.addEventListener('scroll', updateScrollPosition);
});

watch(scrollPosition, (newValue, oldValue) => {
  // Check the scroll direction
  isNavbarVisible.value = newValue <= oldValue || newValue === 0;
});

</script>

<style scoped>
.navbar {
  transform: translate3d(0, 0, 0);
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
}

</style>