<template>
  <judul-page />
  <div v-if="store.loading">
    <loading-page />
  </div>
  <div v-else-if="!store.items.length && !store.loading">
    <EmptyData />
  </div>
  <div class="q-mt-sm flex-width" v-else>
    <q-list
      bordered
      dense
      class="q-mx-sm q-mb-sm shadow-2"
      v-for="(item, x) in store.items"
      :key="x"
    >
      <transition-group>
        <q-item v-ripple>
          <q-item-section avatar>
            <q-avatar size="100px" clickable>
              <q-img :src="`${pathImg + item?.location}`" />
            </q-avatar>
          </q-item-section>
          <q-separator vertical inset color="orange" />
          <q-item-section>
            <div class="row">
              <div class="col-10 text-weight-bold">
                <q-item-section class="q-ml-sm">
                  <q-badge color="cyan" class="text-h7">
                    {{ item?.nama }}</q-badge
                  ></q-item-section
                >
                <q-item-section class="col-10">
                  Deskripsi :
                  <q-item-label caption class="text-italic text-bold">
                    {{ item?.deskripsi }}
                  </q-item-label></q-item-section
                >
                <q-item-section class="q-ml-sm">
                  <q-badge outline color="red" class="text-h7 text-bold"
                    >Harga : {{ formatRpDouble(item?.harga) }}</q-badge
                  ></q-item-section
                >
                <!-- <q-item-section side top>
                  <q-btn flat size="md" icon="delete" color="red"
                /></q-item-section> -->
              </div>
            </div>
          </q-item-section>
        </q-item>
      </transition-group>
    </q-list>
  </div>
</template>
<script setup>
import JudulPage from "./comp/JudulPage.vue";
import LoadingPage from "./comp/LoadingPage.vue";
import EmptyData from "./comp/EmptyData.vue";
import { useProdukstore } from "src/stores/v1/produk/produk";
import { pathImg } from "src/boot/axios";
import { formatRpDouble } from "src/modules/formatter";

const store = useProdukstore();

store.initData();
</script>
