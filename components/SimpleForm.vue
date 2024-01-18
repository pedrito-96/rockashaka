<template>
  <div class="flex justify-center">
    <form
      action="https://api.web3forms.com/submit"
      method="POST"
      class="flex flex-col justify-center items-baseline border-2 border-black p-6 rounded-xl form-bg"
    >
      <input
        type="hidden"
        name="access_key"
        value="20407160-f9a4-4585-8713-3c8ae4c7e749"
      />

      <p class="self-start">NAME</p>
      <input
        label="NAME"
        type="text"
        name="name"
        placeholder="Your name"
        required
      />
      <p>E-MAIL</p>
      <input
        label="E-MAIL"
        type="email"
        name="email"
        placeholder="Your email address"
        required
      />
      <p class="self-start">APPAREL NEEDED</p>
      <input
        label="APPAREL"
        type="text"
        name="apparel"
        placeholder="T-shirts, Hoodies, Shorts, ..."
        required
      />
      <p>MESSAGE</p>
      <textarea
        label="Message"
        name="message"
        :rows="8"
        placeholder="Enter your message"
        required
      ></textarea>
      <input
        type="hidden"
        name="redirect"
        value="https://web3forms.com/success"
      />
      <button
        type="submit"
        class="rounded border-2 border-black bg-rockPurple text-white p-2 self-end"
      >
        Submit Form
      </button>
    </form>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
input,
textarea {
  margin: 0 0 2rem 0;
  border: 2px solid black;
  border-radius: 4px;
  width: 300px;
}
::placeholder {
  padding-left: 0.5rem;
}
p {
  @apply text-xl font-bold text-rockGreen;
  text-shadow: 2px 0 #000, -2px 0 #000, 0 2px #000, 0 -2px #000, 1px 1px #000,
    -1px -1px #000, 1px -1px #000, -1px 1px #000;
}

.form-bg {
  /*background-image: url('https://us.123rf.com/450wm/juristka/juristka1610/juristka161000020/66761234-a-mano-ornamento-modello-per-la-carta-da-parati-cartolina-o-un-libro-da-colorare-per-adulti.jpg?ver=6');*/
  @apply bg-rockMossGreen;
  background-size: cover;
}
</style>
