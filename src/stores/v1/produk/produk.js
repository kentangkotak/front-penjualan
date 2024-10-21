import { defineStore } from "pinia";
import { api } from "src/boot/axios";

export const useProdukstore = defineStore("master-produk", {
  state: () => ({
    items: [],
    loading: "",
    fixed: true,
    form: {
      nama: "",
      deskripsi: "",
      harga: "",
      jenis: "",
      foto: "",
    },
  }),
  actions: {
    async initData() {
      this.getData();
    },
    async getData() {
      this.loading = true;
      await api
        .get("/produk/produk")
        .then((resp) => {
          this.loading = false;
          if (resp.status === 200) {
            this.items = resp?.data;
          }
        })
        .catch((err) => {
          console.log(err);
          this.loading = false;
        });
    },
    async saveData() {
      this.loading = true;
      try {
        const resp = await api.post("/produk/simpanproduk", this.form);
        if (resp.status === 200) {
          const storePasien = usePengunjungIgdStore();
          const isi = resp.data.result;
          storePasien.injectDataPasien(pasien, isi, "triage");
          notifSuccess(resp);
          this.initReset();
          this.loadingForm = false;
        }
        this.loadingForm = false;
      } catch (error) {
        this.loadingForm = false;
        notifErr(error);
      }
    },
  },
});
