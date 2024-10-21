<template>
  <q-form ref="refForm" class="full-height" @submit="onSubmit">
    <q-dialog v-model="store.fixed">
      <q-card>
        <q-card-section>
          <div class="text-h6">Input Menu</div>
        </q-card-section>

        <q-separator />

        <q-card-section style="max-height: 50vh" class="scroll">
          <div class="row full-width">
            <div class="col-12 q-mb-sm">
              <q-input
                ref="refnama"
                v-model="store.form.nama"
                outlined
                dense
                label="Nama Menu"
                :rules="[(val) => !!val || 'Harap Diisi terlebih dahulu']"
              />
            </div>
            <div class="col-12 q-mb-sm">
              <q-input
                ref="refdeskripsi"
                v-model="store.form.deskripsi"
                outlined
                dense
                label="Deskripsi Menu"
                :rules="[(val) => !!val || 'Harap Diisi terlebih dahulu']"
              />
            </div>
            <div class="col-12 q-mb-sm">
              <q-input
                ref="refharga"
                v-model="store.form.harga"
                outlined
                dense
                label="Harga Menu"
                :rules="[(val) => !!val || 'Harap Diisi terlebih dahulu']"
              />
            </div>
            <div class="col-12 q-mb-sm">
              <q-select
                ref="refjenis"
                v-model="store.form.jenis"
                outlined
                dense
                label="Jenis Menu"
                :options="jenis"
                :rules="[(val) => !!val || 'Harap Diisi terlebih dahulu']"
              />
            </div>
            <!-- <div class="col-12 q-mb-sm">
              <q-file
                ref="reffoto"
                v-model="store.form.foto"
                outlined
                label="Foto"
                :rules="[(val) => !!val || 'Harap Diisi terlebih dahulu']"
              >
                <template v-slot:prepend>
                  <q-icon name="cloud_upload" />
                </template>
              </q-file>
            </div> -->
          </div>
        </q-card-section>

        <q-separator />

        <q-card-actions align="right">
          <q-btn color="orange" label="Batal" v-close-popup />
          <q-btn
            color="primary"
            label="Simpan"
            type="submit"
            :loading="store.loading"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-form>
</template>
<script setup>
import { useProdukstore } from "src/stores/v1/produk/produk";
import { ref } from "vue";

const store = useProdukstore();
const refForm = ref(null);
const refnama = ref(null);
const refdeskripsi = ref(null);
const refharga = ref(null);
const refjenis = ref(null);
const reffoto = ref(null);
const jenis = ["Food", "Drink"];

function onSubmit() {
  console.log("asasa");
  store.saveData().then(() => {
    refForm.value.resetValidation();
  });
}
</script>
