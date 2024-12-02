import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "login",
    component: () => import("@/views/auth/Login.vue"),
    meta: {
      requiresAuth: false,
      title: "Login",
    },
  },
  {
    path: "/login-gagal",
    name: "login-error",
    component: () => import("@/views/auth/Error.vue"),
    meta: {
      requiresAuth: false,
      title: "Login Gagal",
    },
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("@/views/dashboard/Dashboard.vue"),
    meta: {
      requiresAuth: true,
      title: "Admin Dashboard",
    },
  },
  {
    path: "/vendors",
    name: "vendors",
    component: () => import("@/views/vendors/Vendors.vue"),
    meta: {
      requiresAuth: true,
      title: "Data Vendors",
    },
  },
  {
    path: "/uikit/formlayout",
    name: "formlayout",
    component: () => import("@/views/uikit/FormLayout.vue"),
    meta: {
      requiresAuth: true,
      title: "Admin Dashboard",
    },
  },
  {
    path: "/uikit/input",
    name: "input",
    component: () => import("@/views/uikit/InputDoc.vue"),
    meta: {
      requiresAuth: true,
      title: "Admin Dashboard",
    },
  },
  {
    path: "/uikit/button",
    name: "button",
    component: () => import("@/views/uikit/ButtonDoc.vue"),
    meta: {
      requiresAuth: true,
      title: "Admin Dashboard",
    },
  },
  {
    path: "/uikit/table",
    name: "table",
    component: () => import("@/views/uikit/TableDoc.vue"),
    meta: {
      requiresAuth: true,
      title: "Admin Dashboard",
    },
  },
  {
    path: "/uikit/list",
    name: "list",
    component: () => import("@/views/uikit/ListDoc.vue"),
    meta: {
      requiresAuth: true,
      title: "Admin Dashboard",
    },
  },
  {
    path: "/uikit/tree",
    name: "tree",
    component: () => import("@/views/uikit/TreeDoc.vue"),
    meta: {
      requiresAuth: true,
      title: "Admin Dashboard",
    },
  },
  {
    path: "/uikit/panel",
    name: "panel",
    component: () => import("@/views/uikit/PanelsDoc.vue"),
    meta: {
      requiresAuth: true,
      title: "Admin Dashboard",
    },
  },

  {
    path: "/uikit/overlay",
    name: "overlay",
    component: () => import("@/views/uikit/OverlayDoc.vue"),
    meta: {
      requiresAuth: true,
      title: "Admin Dashboard",
    },
  },
  {
    path: "/uikit/media",
    name: "media",
    component: () => import("@/views/uikit/MediaDoc.vue"),
    meta: {
      requiresAuth: true,
      title: "Admin Dashboard",
    },
  },
  {
    path: "/uikit/message",
    name: "message",
    component: () => import("@/views/uikit/MessagesDoc.vue"),
    meta: {
      requiresAuth: true,
      title: "Admin Dashboard",
    },
  },
  {
    path: "/uikit/file",
    name: "file",
    component: () => import("@/views/uikit/FileDoc.vue"),
    meta: {
      requiresAuth: true,
      title: "Admin Dashboard",
    },
  },
  {
    path: "/uikit/menu",
    name: "menu",
    component: () => import("@/views/uikit/MenuDoc.vue"),
    meta: {
      requiresAuth: true,
      title: "Admin Dashboard",
    },
  },
  {
    path: "/uikit/charts",
    name: "charts",
    component: () => import("@/views/uikit/ChartDoc.vue"),
    meta: {
      requiresAuth: true,
      title: "Admin Dashboard",
    },
  },
  {
    path: "/uikit/misc",
    name: "misc",
    component: () => import("@/views/uikit/MiscDoc.vue"),
    meta: {
      requiresAuth: true,
      title: "Admin Dashboard",
    },
  },
  {
    path: "/uikit/timeline",
    name: "timeline",
    component: () => import("@/views/uikit/TimelineDoc.vue"),
    meta: {
      requiresAuth: true,
      title: "Admin Dashboard",
    },
  },
  {
    path: "/pages/empty",
    name: "empty",
    component: () => import("@/views/pages/Empty.vue"),
    meta: {
      requiresAuth: true,
      title: "Admin Dashboard",
    },
  },
  {
    path: "/pages/crud",
    name: "crud",
    component: () => import("@/views/pages/Crud.vue"),
    meta: {
      requiresAuth: true,
      title: "Admin Dashboard",
    },
  },
  {
    path: "/documentation",
    name: "documentation",
    component: () => import("@/views/pages/Documentation.vue"),
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
