<template>
  <q-page>
    <Suspense>
      <DataProdukPage />
      <template #fallback> </template>
    </Suspense>
  </q-page>
</template>
<script setup>
import DataProdukPage from "./DataProdukPage.vue";
</script>
