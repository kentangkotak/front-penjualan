import { defineStore } from "pinia";

export const useLayoutpage = defineStore("layout-pages", {
  state: () => ({
    tab: "home",
  }),
});
