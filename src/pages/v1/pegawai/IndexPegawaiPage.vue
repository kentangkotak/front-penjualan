<template>
  <q-page>
    <Suspense>
      <DataPegawaiPage />
      <template #fallback> </template>
    </Suspense>
  </q-page>
</template>
<script setup>
import DataPegawaiPage from "./DataPegawaiPage.vue";
</script>
