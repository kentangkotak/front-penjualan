<template>
  <q-footer elevated class="flex-whidth">
    <q-tabs v-model="tab.tab" inline-label class="bg-cyan text-white shadow-2">
      <q-tab name="home" icon="home" label="Home" @click="home()" />
      <q-tab name="penjualan" icon="receipt_long" label="Penjualan" />
    </q-tabs>
  </q-footer>
</template>
<script setup>
import { useLayoutpage } from "src/stores/v1";
import { useRouter } from "vue-router";
const router = useRouter();
const tab = useLayoutpage();

function home() {
  router.push({ path: "/" });
}
</script>
