<script setup lang="ts">
import { createClient } from "@supabase/supabase-js";
import { transformDatetime } from "../utils/transformDateTime";

definePageMeta({
  layout: "hidden",
  // middleware: "auth",
});

const runtimeConfig = useRuntimeConfig();
const supabase = createClient(
  runtimeConfig.public.SUPABASE_URL,
  runtimeConfig.public.SUPABASE_KEY
);

type Order = {
  id: number;
  name: string;
  size: string;
  quantity: number;
  timestamp: string;
};

const orders = ref<Order[] | null>([]);

async function getOrder() {
  const { data } = await supabase.from("orderNAA").select();
  orders.value = data;
}
async function addOrder() {
  const { data, error } = await supabase
    .from("orderNAA")
    .insert({ name: item.value, size: size.value, quantity: quantity.value })
    .select();

  getOrder();
}

const lastUpdate = ref();
async function getLastUpdate() {
  const { data } = await supabase.from("orderNAA").select("created_at");
  if (data?.length)
    lastUpdate.value = transformDatetime(data[data.length - 1].created_at);
}

async function removeRow(id: number) {
  const { error } = await supabase.from("orderNAA").delete().eq("id", id);
  getOrder();
}

async function toCSV() {
  const { data, error } = await supabase.from("orderNAA").select().csv();
}

onMounted(() => {
  getOrder();
  getLastUpdate();
});

const design = ref("");
const item = ref("");
const quantity = ref(1);
const size = ref("");
</script>

<template>
  <div class="mt-52 px-8">
    <h1 class="text-center text-2xl pt-0 p-4">Welcome partners!</h1>
    <div class="flex flex-col md:flex-row justify-center items-center">
      <div class="flex justify-center items-center w-full">
        <FormKit type="form" name="addRow" :actions="false" @submit="addOrder">
          <div
            class="flex h-18 gap-0 justify-center items-center w-full flex-col p-2 lg:gap-2"
          >
            <FormKit
              type="select"
              v-model="design"
              label="Design"
              placeholder="#001..."
              help="Select the design code"
              validation="required"
              name="type"
              :options="['001', '002', '003', '004']"
            />
            <FormKit
              type="select"
              v-model="item"
              label="Item"
              placeholder="t-shirt, hoodie..."
              help="Select the type of merch"
              validation="required"
              name="type"
              :options="['t-shirt', 'hoodie', 'pants', 'crewneck']"
            />
            <FormKit
              type="number"
              v-model="quantity"
              label="Quantity"
              name="size"
              validation="required"
              min="1"
              number="integer"
            />
            <FormKit
              type="select"
              v-model="size"
              label="Size"
              placeholder="M, 2XL ..."
              help="Select the size"
              validation="required"
              name="size"
              :options="['S', 'M', 'L', 'XL', '2XL', '3XL']"
            />
            <div class="w-full">
              <FormKit type="submit">ADD ORDER</FormKit>
            </div>
          </div>
        </FormKit>
      </div>

      <div class="w-full p-2">
        <!-- <ul>
          <li v-for="order in orders" :key="order.id">
            id: {{ order.id }} | name: {{ order.name }} | size:
            {{ order.size }} | quantity: {{ order.quantity }}
            <button @click="removeRow(order.id)">Remove</button>
          </li>
        </ul> -->
        <p class="text-center text-2xl pt-0 p-4">Your order:</p>
        <p>Last order added: {{ lastUpdate }}</p>
        <table class="w-full border" cellpadding="4">
          <thead>
            <tr class="border">
              <td>DESIGN ID</td>
              <td>ITEM TYPE</td>
              <td>SIZE</td>
              <td>QUANTITY</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="order in orders" :key="order.id">
              <td>{{ order.id }}</td>
              <td>{{ order.name }}</td>
              <td>{{ order.size }}</td>
              <td>{{ order.quantity }}</td>
              <td>
                <button @click="removeRow(order.id)">
                  <NuxtIcon
                    name="Trash"
                    class="h-5 w-5 mx-1"
                    aria-hidden="true"
                  />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<style scoped>
td {
  text-align: center;
  border: solid gainsboro 1px;
}
</style>
