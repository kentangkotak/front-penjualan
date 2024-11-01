import { defineStore } from "pinia";
import { api } from "src/boot/axios";
import { notifErr, notifSuccess } from "src/boot/notify-defaults";

export const useProdukstore = defineStore("master-produk", {
  state: () => ({
    items: [],
    loading: "",
    fixed: false,
    form: {
      nama: "",
      deskripsi: "",
      harga: "",
      jenis: "",
      photos: [],
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
          if (resp.status === 200) {
            this.items = resp?.data;
            this.loading = false;
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
        const resp = await api.post("/produk/simpanproduk", this.form, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        if (resp.status === 200) {
          notifSuccess(resp);
          this.initData();
          this.loading = false;
        }
        this.loading = false;
      } catch (error) {
        this.loading = false;
        notifErr(error);
      }
    },
    selectFiles(files) {
      this.form.photos = files;
    },
  },
});
