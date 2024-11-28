import { createRouter, createWebHistory } from "vue-router";

const routes = [
  // {
  //   path: "/",
  //   name: "home",
  //   component: () => import("@/views/Home.vue"),
  //   meta: {
  //     requiresAuth: false,
  //     title: "Bima Sakti",
  //   },
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
