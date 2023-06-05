<template>
  <header class="flex flex-col md:flex-row gap-2 md:gap-10 justify-end items-end mt-10 md:mt-20 w-full px-[10%] text-2xl">
    <nuxt-link
      to="/services"
      class="hover-underline-animation"
    >
      SERVICES
    </nuxt-link>
    <nuxt-link
      to="/contact"
      class="hover-underline-animation"
    >
      CONTACT
    </nuxt-link>
    <nuxt-link
      to="/about"
      class="hover-underline-animation"
    >
      ABOUT
    </nuxt-link>
  </header>
</template>

<style scoped>

.hover-underline-animation {
  display: inline-block;
  position: relative;
}

.hover-underline-animation::after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #000000;
  transform-origin: bottom right ;
  transition: transform 0.25s ease-out;
}

.hover-underline-animation:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

.router-link-active {
  @apply font-extrabold;
}
</style>