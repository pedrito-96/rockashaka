<script setup lang="ts">
definePageMeta({
  layout: "hidden",
});

const client = useSupabaseClient();
const user = useSupabaseUser();

const email = ref("test@test.com");
const password = ref("testtest");
const wrongPw = ref(false);

// Nova Athletics Academy
// https://www.facebook.com/Nova.Atheletics.Academy/
const router = useRouter();

const login = async () => {
  const { error } = await client.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  });
  if (!error) {
    router.push("/test");
    wrongPw.value = false;
  } else {
    wrongPw.value = true;
  }
};

watchEffect(async () => {
  if (user.value) {
    await router.push("/test");
  }
});
</script>

<template>
  <div
    class="fixed top-24 right-24 bg-black text-white flex items-center justify-center z-50 p-4 rounded-lg"
  >
    <div v-if="!user" class="container_form flex gap-y-4 flex-col">
      <div class="flex flex-col gap-y-2">
        <label for="username"><b>Username:</b></label>
        <input
          v-model="email"
          type="text"
          class="input text-black rounded-lg pl-1"
          placeholder="Enter Username"
          name="username"
          required
        />
      </div>
      <div class="flex flex-col gap-y-2">
        <label for="psw"><b>Password:</b></label>
        <input
          v-model="password"
          type="password"
          class="input text-black rounded-lg pl-1"
          placeholder="Enter Password"
          name="psw"
          required
        />
      </div>
      <div
        v-if="wrongPw"
        class="fixed top-1/2 left-0 text-red-600 bg-lime-400 font-mono justify-center items-center text-9xl flex h-fit w-screen"
      >
        Te ghe sbajà vecio, riprovaghe
      </div>
      <button @click.prevent="login()" class="button">Login</button>
    </div>
    <div v-else>
      <button @click.prevent="signOut()" class="button">Sign out</button>
    </div>
  </div>
</template>
