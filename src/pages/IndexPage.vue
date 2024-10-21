<template>
  <q-page class="flex-top">
    <div class="row flex">
      <div class="col-6">
        <q-card class="my-card" flat bordered align="center">
          <q-avatar size="200px" @click="pegawai()">
            <q-img
              src="../images/icon-user.svg"
              style="height: 150px; max-width: 150px"
            >
              <div class="absolute-bottom text-subtitle2 text-center">
                Pegawai
              </div>
            </q-img>
          </q-avatar>
        </q-card>
      </div>
      <div class="col-6">
        <q-card class="my-card" flat bordered align="center">
          <q-avatar size="200px" @click="produk()">
            <q-img
              src="../images/makanan.svg"
              style="height: 150px; max-width: 150px"
            >
              <div class="absolute-bottom text-subtitle2 text-center">
                Produk
              </div>
            </q-img>
          </q-avatar>
        </q-card>
      </div>
      <div class="col-6">
        <q-card class="my-card" flat bordered align="center">
          <q-avatar size="200px">
            <q-img
              src="../images/order.svg"
              style="height: 150px; max-width: 150px"
            >
              <div class="absolute-bottom text-subtitle2 text-center">
                Orderan
              </div>
            </q-img>
          </q-avatar>
        </q-card>
      </div>
      <div class="col-6">
        <q-card class="my-card" flat bordered align="center">
          <q-avatar size="200px">
            <q-img
              src="../images/money.svg"
              style="height: 150px; max-width: 150px"
            >
              <div class="absolute-bottom text-subtitle2 text-center">
                Penjualan
              </div>
            </q-img>
          </q-avatar>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { useLayoutpage } from "src/stores/v1";
import { useRouter } from "vue-router";

const tab = useLayoutpage();

defineOptions({
  name: "IndexPage",
});

const router = useRouter();

function pegawai() {
  tab.tab = "";
  router.push({ path: "/pegawai" });
}
function produk() {
  tab.tab = "";
  router.push({ path: "/produk" });
}
</script>
