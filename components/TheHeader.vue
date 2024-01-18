<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
const router = useRouter();
const user = useSupabaseUser();
const client = useSupabaseClient();

const signOut = async () => {
  const { error } = await client.auth.signOut();
  if (error) return;
  await router.push("/");
};
</script>
<template>
  <div class="fixed right-0 top-4 md:top-10">
    <header
      class="flex flex-col lg:flex lg:flex-row md:grid md:pt-8 lg:pt-0 grid-rows-2 grid-cols-2 gap-0.5 md:gap-8 justify-end items-end w-full text-xl md:text-2xl"
    >
      <nuxt-link
        to="/services"
        class="hover-underline-animation text-rockPurple"
      >
        SERVICES
      </nuxt-link>
      <nuxt-link to="/contact" class="hover-underline-animation text-rockGreen">
        GET A QUOTE
      </nuxt-link>
      <nuxt-link
        to="/about"
        class="hover-underline-animation text-rockMossGreen"
      >
        OUR STORY
      </nuxt-link>

      <Menu as="div" class="relative inline-block text-left">
        <div>
          <MenuButton
            class="font-medium text-rockBlak focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
          >
            <div class="flex items-center gap-1">
              <span class="hover-underline-animation"> OUR CLIENTS </span>
              <NuxtIcon
                name="ChevronDownIcon"
                class="h-5 w-5"
                aria-hidden="true"
              />
            </div>
          </MenuButton>
        </div>

        <transition
          enter-active-class="transition duration-100 ease-out"
          enter-from-class="transform scale-95 opacity-0"
          enter-to-class="transform scale-100 opacity-100"
          leave-active-class="transition duration-75 ease-in"
          leave-from-class="transform scale-100 opacity-100"
          leave-to-class="transform scale-95 opacity-0"
        >
          <MenuItems
            class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
          >
            <div class="px-1 py-1">
              <MenuItem v-slot="{ active }">
                <nuxt-link
                  to="/test"
                  :class="[
                    active ? 'bg-rockPurple text-white' : 'text-gray-900',
                    'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                  ]"
                >
                  <img
                    src="../assets/NAC.png"
                    class="mr-2 h-6 w-5"
                    aria-label="Nova Athletics Academy"
                  />
                  Nova Athletics Academy
                </nuxt-link>
              </MenuItem>
              <MenuItem v-if="user" v-slot="{ active }">
                <button
                  @click.prevent="signOut()"
                  :class="[
                    active ? 'bg-rockPurple text-white' : 'text-gray-900',
                    'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                  ]"
                >
                  <NuxtIcon
                    name="LogOut"
                    class="h-4 w-5 mx-1"
                    aria-hidden="true"
                  />

                  Sign Out
                </button>
              </MenuItem>
            </div>
          </MenuItems>
        </transition>
      </Menu>
    </header>
  </div>
</template>

<style scoped>
.hover-underline-animation {
  display: inline-block;
  position: relative;
}

.hover-underline-animation::after {
  content: "";
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: currentColor;
  transform-origin: bottom right;
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
