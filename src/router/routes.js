const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      {
        path: "/pegawai",
        //  meta: { requireAuth: true },
        name: "pegawai",
        component: () => import("src/pages/v1/pegawai/IndexPegawaiPage.vue"),
      },
      {
        path: "/produk",
        //  meta: { requireAuth: true },
        name: "produk",
        component: () => import("src/pages/v1/produk/IndexProdukPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
