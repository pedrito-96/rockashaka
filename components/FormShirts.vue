<script setup lang="ts">

const submitted = ref(false)
const submitHandler = async () => {
  // Let's pretend this is an ajax request:
  await new Promise((r) => setTimeout(r, 1000))
  submitted.value = true
}

const schema = [
  {
    $cmp: 'FormKit',
    props: {
      type: 'radio',
      id: 'delivery',
      label: 'DELIVERY METHOD *',
      options: {
        shipped: 'SHIPPED',
        pickUp: 'PICK UP'
      },
      validation:'required'
    }
  },
  {
      $cmp: 'FormKit',
      if: '$get(delivery).value === shipped',
    props: {
      type: 'text',
      label: '$: "SHIPPING ADDRESS *"',
      placeholder: 'address',
      validation: 'required',
    }
    },
    {
        $cmp: 'FormKit',
        if: '$get(delivery).value === shipped',
        props: {
        type: 'number',
        label: '$: "ZIP CODE *"',
        placeholder: '12345',
        validation: 'required|number|length:5',
    }
},
  
]
const schemaDesign = [
  {
    $cmp: 'FormKit',
    props: {
      type: 'radio',
      id: 'des',
      label: 'DO YOU NEED OUR GRAPHIC TEAM TO DESIGN YOUR ARTWORK? *',
      options: {
        yes: 'YES',
        no: 'NO'
      },
      validation:'required'
    }
  },
  {
      $cmp: 'FormKit',
      if: '$get(des).value === no',
    props: {
     type: "file",
     label: "ARTWORK/LOGOS: ( NO SHIRT, HOODIE, ETC IN BACKGROUND)",
     accept: ".pdf,.doc,.docx,.png,.jpeg,.svg",
     help: "Select as many documents as you need.",
     multiple: "true",
    }
    }
]
</script>

<template>

    <div class="flex justify-center items-center flex-col">
  <FormKit
    type="form"
    action="https://api.web3forms.com/submit"
    method="POST"
    id="registration"
    :form-class="submitted ? 'hide' : 'show'"
    submit-label="Register"
    @submit="submitHandler"
    :actions="false"
  >

  <input type="hidden" name="access_key" value="027c5ca7-5310-48ff-80b7-5da5128750d9">
  <input type="checkbox" name="botcheck" class="hidden" style="display: none;">

    <h1 class="text-3xl font-bold">CONTACT FORM</h1>
    <p>
      Fill the form so we can contact you and process your order
    </p>
    <hr />
    <br>
    <FormKit
      type="text"
      name="company-name"
      label="BRAND/COMPANY NAME *"
      placeholder="Dubidu.co"
      validation="required"
    />
    <FormKit
      type="text"
      name="name"
      label="NAME *"
      placeholder="Jane Doe"
      validation="required"
    />
    <FormKit
      type="text"
      name="email"
      label="EMAIL *"
      placeholder="jane@example.com"
      help="What email should we use?"
      validation="required|email"
    />
    <FormKit
      type="text"
      name="instagram"
      label="INSTAGRAM *"
      placeholder="@username"
      validation="required|starts_with:@"
    />
    <FormKit
    type="tel"
    label="PHONE *"
    placeholder="xxx-xxx-xxxx"
    validation="required|matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/"
    :validation-messages="{
    matches: 'Phone number must be in the format xxx-xxx-xxxx',
    }"
    validation-visibility="dirty"
/>

<FormKit
  type="radio"
  label="BEST WAY TO REACH YOU? *"
  :options="['SMS', 'INSTAGRAM DM', 'EMAIL']"
  validation="required"

/>

<FormKitSchema :schema="schema" />

<br>
<h1 class="text-2xl font-bold"> PROJECT DETAILS </h1>
 <p class="text-xl w-[500px]">IN ORDER TO GIVE YOU AN ACCURATE QUOTE PLEASE PROVIDE US WITH AS MANY DETAILS AS POSSIBLE.</p>
 <br>
 
 <FormKit
 type="select"
 label="GARMENT TYPE *"
 name="garment-type"
 :options="[
     'T-SHIRTS',
     'TANK TOP',
     'SHORTS',
     'HOODIES',
     'SWEATPANTS',
     'LONGSLEEVES',
     'TOTEBAGS',
     ]"
     validation="required"
     />
     
     <FormKit
     type="text"
     name="garment-color"
     label="GARMENT COLOR"
     placeholder="Red"
     />
     
     <br>
     <h1 class="text-xl font-bold"> MINIMUM ORDER QUANTITY 12 PIECES PER DESIGN    </h1>
     <p class="text-xl w-[500px]">🚫 WE DO NOT OFFER SAMPLES</p>
     <br>
     
     <FormKit
     type="text"
     name="sizes"
     label="WHAT SIZES WOULD YOU LIKE? *"
     placeholder="SMALL - 1, MEDIUM -2, LARGE -3, XL - 4, ETC"
     />
     
     <br>
     <h1 class="text-xl font-bold"> LOGOS &amp; PLACEMENT</h1>
     <br>

<!-- <FormKitSchema :schema="schemaDesign" /> -->

<FormKit
  type="checkbox"
  label="WHERE SHOULD WE PRINT THESE LOGOS? *"
  :options="['FULL FRONT', 'LEFT CHEST', 'FULL BACK', 'LEFT SLEEVE','RIGHT SLEEVE','LEFT LEG','RIGHT LEG']"
  decorator-icon="happy"
  validation="required"
/>
     
     <FormKit
     type="textarea"
     label="ANY SPECIFIC DETAILS WE SHOULD KNOW ABOUT THIS ORDER?"
  rows="10"
/>

<input type="hidden" name="redirect" value="https://web3forms.com/success">

    <FormKit
      type="submit"
      label="Submit"
    />

  </FormKit>
</div>


  <div v-if="submitted">
    <h2 class="text-red-500 text-center">Submission successful!</h2>
  </div>

</template>

<style scoped>
form {
  width: 90%;
  margin-right: 20px;
  margin-left: 40px;
}

h1, p {
  width: 80%;
}
@media (min-width: 768px){

  form{
    width: 500px;
  }

}
</style>