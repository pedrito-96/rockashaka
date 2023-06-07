<template>
  <div class="flex justify-between items-center mt-5 z-50" :class="{ 'navbar' : isNavbarVisible}">
      <div class="container" :class="{'h-52': isLargeScreen}">
      <LogoRAS class="fixed top-8 md:top-5 left-0 ml-[3%] fill-red-300 z-50"></LogoRAS>
      <TheHeader class="mr-[5%] text-red-300 z-50"/>
    </div> 
    </div> 

      <slot/>
      
    <TheFooter class="bottom-0 text-red-300 bg-black" />
  </template>
  
  <script setup>
const scrollPosition = ref(0);
const isNavbarVisible = ref(false);

const updateScrollPosition = () => {
  scrollPosition.value = window.pageYOffset;
  console.log(scrollPosition)
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

.container {
  @apply h-48 w-screen bg-white fixed top-0 left-0;
  background: linear-gradient(#ffffff 30%, #ffffffbc 60%, #ffffffbc 80%, #ffffff00 100%);
}
</style>