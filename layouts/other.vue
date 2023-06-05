<template>
  <div class="flex justify-between items-center mt-5">
    <LogoRAS class="fixed top-8 md:top-5 left-0 ml-[3%] fill-red-300"></LogoRAS>
    <TheHeader class="mr-[5%] text-red-300" />
  </div> 

      <slot/>
      
    <TheFooter class="bottom-0 text-red-300" />
  </template>
  