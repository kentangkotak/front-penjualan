<template>
  <div v-if="store.loading">
    <loading-page />
  </div>
  <div class="q-mt-sm flex-width" v-else>
    <judul-page />
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
              <q-img src="https://cdn.quasar.dev/img/boy-avatar.png" />
            </q-avatar>
          </q-item-section>
          <q-separator vertical inset color="orange" />
          <q-item-section>
            <div class="row">
              <div class="col-10 text-weight-bold">
                <q-item-section class="q-ml-sm">
                  <q-badge outline color="cyan" class="text-h7"
                    >Nama : {{ item?.name }}</q-badge
                  ></q-item-section
                >
                <q-item-section class="col-10">
                  Alamat : {{ item?.alamat }}</q-item-section
                >
                <q-item-section class="q-ml-sm">
                  <q-badge color="red" class="text-h7"
                    >No. Telepone : {{ item?.nohp }}</q-badge
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
import { usePegawai } from "src/stores/v1/pegawai/pegawai";
import JudulPage from "./comp/JudulPage.vue";
import LoadingPage from "./comp/LoadingPage.vue";

const store = usePegawai();

store.initData();
</script>
