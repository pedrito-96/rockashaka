<template>
    <div>
        <h1 class="font-bold text-3xl text-center mt-56 mb-10 underline text-rockPurple">SCREEN PRINTING</h1>
        <div class="grid md:grid-cols-3 justify-center items-center gap-12">
            <div>
                <img class="w-[200px] md:[300px] m-auto" src="../assets/cats/cat_4.png">
            </div>
            <div class="text-center">
                <p class="">
                    The best and most common way to print custom designs/logos onto all types of apparel is through screen printing.  
                    Screen printing, also known as silk screening, is a printing technique that involves transferring ink onto a substrate (such as paper, fabric, plastic, glass, or metal) through a stencil-like mesh screen. 
                    It is a versatile and widely used method for creating high-quality prints on various materials. Screen printing is popular due to its ability to produce vibrant, opaque, and long-lasting prints. 
                    With screen printing higher product quantities will have a cheaper individual price.
                </p>
            </div>
            <div class="text-center md:text-right">
            <!-- <h2 class="font-bold text-xl text-rockPurple">PRICING</h2>
            <p class="">
              Setup cost: $50.0<br>
              1 Color design: $3.03<br>
              2 Color design: $3.70<br>
              3 Color design: $4.48<br>
              4 Color design: $5.05
            </p> -->
            <PricingModalSP printingtype="screen printing" filename="SPpricingtable.png"></PricingModalSP>
          </div>
        </div>


        <h1 class="font-bold text-3xl text-center mt-32 mb-10 underline text-rockPurple">HEAT TRANSFER VYNIL</h1>
        <div class="grid md:grid-cols-3 justify-center items-center gap-12 mb-32">
            <div class="md:order-3">
                <img class="h-[200px] md:h-[300px] m-auto" src="../assets/cats/cat_8.png">
            </div>
            <div class="text-center md:order-2">
                <p class="">
                    Heat vinyl transfer (HTV) is a popular technique used to apply custom designs, logos, or lettering onto various surfaces, 
                    primarily fabrics, using heat and pressure. It involves cutting out a design from a sheet of heat transfer vinyl using a cutting machine. 
                    The excess vinyl is removed, leaving only the desired design on a carrier sheet. 
                    The design is then placed onto the fabric or surface and heat is applied using a heat press. 
                    The heat causes the adhesive on the vinyl to bond with the surface, creating a permanent and vibrant transfer. 
                    HTV is commonly used for customizing apparel when the design is different for each piece, for example team apparel with numbers and names.
                </p>
            </div>
            
            <div class="text-center md:text-left">
                <!-- <h2 class="font-bold text-xl text-rockPurple">PRICING</h2>
                <p>
                    1 Color design: $0.39 /per sheet<br>
                    Setup cost: $39.99 /per sheet<br>
                    <hr class="w-[90%] m-auto"/>
                    2 Color design: $1.69 /per sheet<br>
                    Setup cost: $99.99 /per sheet<br>
                    <hr class="w-[90%] m-auto"/>
                    3 Color design: $3.39 /per sheet<br>
                    Setup cost: $109.99 /per sheet
                  </p> -->
                  <PricingModalHTV type="htv" filename="HTVpricingtable.png"></PricingModalHTV>

              </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>