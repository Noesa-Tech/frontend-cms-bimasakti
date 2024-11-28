import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "admin-dashboard",
    component: () => import("@/views/dashboard/Dashboard.vue"),
    meta: {
      requiresAuth: true,
      title: "Admin Dashboard",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
