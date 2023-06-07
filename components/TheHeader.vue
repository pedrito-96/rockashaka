<template>
  <div class="fixed right-0 top-10">

    <header class="flex flex-col md:flex-row gap-2 md:gap-8 justify-end items-end w-full text-xl md:text-2xl">
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
    GET A QUOTE
  </nuxt-link>
  <nuxt-link
  to="/about"
  class="hover-underline-animation"
  >
  ABOUT
</nuxt-link>
</header>
</div>
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
  background-color: currentColor;
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