<template>

        <div class="flex justify-center">
            <form action="https://api.web3forms.com/submit" method="POST" class="flex flex-col justify-center items-baseline border-2 border-blue-100 p-8 rounded-xl bg-blue-200 form-bg">
                
                <input type="hidden" name="access_key" value="027c5ca7-5310-48ff-80b7-5da5128750d9">
                
                <p class="self-start">NAME</p>
                <input label="NAME" type="text" name="name" placeholder="Your name" required>
                <p>E-MAIL</p>
                <input label="E-MAIL" type="email" name="email"  placeholder="Your email address" required>
                <p class="self-start">APPAREL NEEDED</p>
                <input label="APPAREL" type="text" name="apparel" placeholder="T-shirts, Hoodies, Shorts, ..." required>
                <p>MESSAGE</p>
                <textarea label="Message" name="message" rows="8"  placeholder="Enter your message" required></textarea>
                <input type="hidden" name="redirect" value="https://web3forms.com/success">
                <button type="submit" class="rounded bg-rockPurple text-white p-2 self-end" >Submit Form</button>
                
            </form>
        </div>

</template>

<script setup lang="ts">

</script>

<style scoped>
input, textarea {
    margin: 0 0 2rem 0;
    border: 2px solid black;
    border-radius: 4px;
    width: 300px;
  }

  p {
    @apply text-xl font-bold
  }

  .form-bg{
    /*background-image: url('https://us.123rf.com/450wm/juristka/juristka1610/juristka161000020/66761234-a-mano-ornamento-modello-per-la-carta-da-parati-cartolina-o-un-libro-da-colorare-per-adulti.jpg?ver=6');*/
    @apply bg-rockGreen;
    background-size: cover;
}
</style>