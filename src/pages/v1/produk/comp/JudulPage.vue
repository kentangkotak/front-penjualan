<template>
  <div class="row">
    <div class="col-6">
      <q-toolbar-title class="text-left q-ml-sm">Data Menu </q-toolbar-title>
    </div>
    <div class="col-6">
      <q-toolbar-title class="text-right">
        <q-btn
          round
          glossy
          icon="add"
          color="orange"
          size="xs"
          @click="store.fixed = true"
        />
      </q-toolbar-title>
    </div>
  </div>
  <q-separator />
  <form-page />
</template>
<script setup>
import { useProdukstore } from "src/stores/v1/produk/produk";
import FormPage from "./FormPage.vue";

const store = useProdukstore();
</script>
