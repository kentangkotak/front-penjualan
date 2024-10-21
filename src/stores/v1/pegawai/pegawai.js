import { defineStore } from "pinia";
import { api } from "src/boot/axios";

export const usePegawai = defineStore("master-pegawai", {
  state: () => ({
    items: [],
    loading: "",
  }),
  actions: {
    async initData() {
      this.getData();
    },
    async getData() {
      this.loading = true;
      await api
        .get("/pegawai/pegawai")
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
  },
});
