import { createRouter, createWebHistory } from "vue-router";
import { AuthStore } from '@/store/auth'
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

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
    path: "/master/layanan",
    name: "master-services",
    component: () => import("@/views/master/MasterServices.vue"),
    meta: {
      requiresAuth: true,
      title: "Data Layanan",
    },
  },
  {
    path: "/master/benefit",
    name: "master-benefit",
    component: () => import("@/views/master/MasterBenefit.vue"),
    meta: {
      requiresAuth: true,
      title: "Data Layanan",
    },
  },
  {
    path: "/master/kategori",
    name: "master-category",
    component: () => import("@/views/master/MasterCategory.vue"),
    meta: {
      requiresAuth: true,
      title: "Data Kategori",
    },
  },
  {
    path: "/master/sub-kategori",
    name: "master-subcategory",
    component: () => import("@/views/master/MasterSubCategory.vue"),
    meta: {
      requiresAuth: true,
      title: "Data Sub Kategori",
    },
  },
  {
    path: "/master/properti",
    name: "master-property",
    component: () => import("@/views/master/MasterProperty.vue"),
    meta: {
      requiresAuth: true,
      title: "Data Properti",
    },
  },
  {
    path: "/master/lokasi",
    name: "master-location",
    component: () => import("@/views/master/MasterLocation.vue"),
    meta: {
      requiresAuth: true,
      title: "Data Lokasi",
    },
  },
  {
    path: "/admin",
    name: "admins",
    component: () => import("@/views/admins/Admins.vue"),
    meta: {
      requiresAuth: true,
      title: "Data Admin",
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
    path: "/pelanggan",
    name: "customers",
    component: () => import("@/views/customers/Customers.vue"),
    meta: {
      requiresAuth: true,
      title: "Data Pelanggan",
    },
  },
  {
    path: "/pesanan",
    name: "orders",
    component: () => import("@/views/orders/Orders.vue"),
    meta: {
      requiresAuth: true,
      title: "Data Pesanan",
    },
  },
  {
    path: "/pesanan-diproses",
    name: "orders-process",
    component: () => import("@/views/orders/OrdersProcess.vue"),
    meta: {
      requiresAuth: true,
      title: "Data Pesanan Diproses",
    },
  },
  {
    path: "/pesanan/tambah",
    name: "orders-add",
    component: () => import("@/views/orders/order_add/OrderAdd.vue"),
    meta: {
      requiresAuth: true,
      title: "Tambah Pesanan",
    },
  },
  {
    path: "/pesanan/:id",
    name: "order-detail",
    component: () => import("@/views/orders/order-detail/OrderDetail.vue"),
    meta: {
      requiresAuth: true,
      title: "Detail Pesanan",
    },
  },
  {
    path: "/invoice/:code/:id",
    name: "invoice-vendor",
    component: () => import("@/views/invoice/VendorInvoice.vue"),
    meta: {
      title: "Detail Pesanan",
    },
  },
  {
    path: "/laporan-keuangan",
    name: "payment-report",
    component: () => import("@/views/payment_report/PaymentReport.vue"),
    meta: {
      requiresAuth: true,
      title: "Laporan Keuangan",
    },
  },
  {
    path: "/pengaturan/landing-page",
    name: "settings-landing-page",
    component: () => import("@/views/settings/landing_page/LandingPage.vue"),
    meta: {
      requiresAuth: true,
      title: "Pengaturan Landing Page",
    },
  },
  {
    path: "/pengaturan/kontak",
    name: "settings-kontak",
    component: () => import("@/views/settings/contact/Contact.vue"),
    meta: {
      requiresAuth: true,
      title: "Pengaturan Kontak",
    },
  },
  {
    path: "/pengaturan/ulasan",
    name: "settings-review",
    component: () => import("@/views/settings/review/Review.vue"),
    meta: {
      requiresAuth: true,
      title: "Pengaturan Review",
    },
  },
  {
    path: "/pengaturan/pembayaran",
    name: "settings-payment",
    component: () => import("@/views/settings/payment/Payment.vue"),
    meta: {
      requiresAuth: true,
      title: "Pengaturan Pembayaran",
    },
  },
  {
    path: "/pengaturan/media-sosial",
    name: "settings-social",
    component: () => import("@/views/settings/social/Social.vue"),
    meta: {
      requiresAuth: true,
      title: "Pengaturan Media Sosial",
    },
  },
  // VENDOR 
  {
    path: "/vendor/login",
    name: "vendor-login",
    component: () => import("@/views/vendors/vendor/VendorLogin.vue"),
    meta: {
      requiresAuth: false,
      title: "Vendor Login",
    },
  },
  {
    path: "/vendor/order/:id",
    name: "vendor-order",
    component: () => import("@/views/vendors/vendor/VendorOrder.vue"),
    meta: {
      requiresAuth: false,
      title: "Pesanan Detail",
    },
  },
  // {
  //   path: "/uikit/formlayout",
  //   name: "formlayout",
  //   component: () => import("@/views/uikit/FormLayout.vue"),
  //   meta: {
  //     requiresAuth: true,
  //     title: "Admin Dashboard",
  //   },
  // },
  // {
  //   path: "/uikit/input",
  //   name: "input",
  //   component: () => import("@/views/uikit/InputDoc.vue"),
  //   meta: {
  //     requiresAuth: true,
  //     title: "Admin Dashboard",
  //   },
  // },
  // {
  //   path: "/uikit/button",
  //   name: "button",
  //   component: () => import("@/views/uikit/ButtonDoc.vue"),
  //   meta: {
  //     requiresAuth: true,
  //     title: "Admin Dashboard",
  //   },
  // },
  // {
  //   path: "/uikit/table",
  //   name: "table",
  //   component: () => import("@/views/uikit/TableDoc.vue"),
  //   meta: {
  //     requiresAuth: true,
  //     title: "Admin Dashboard",
  //   },
  // },
  // {
  //   path: "/uikit/list",
  //   name: "list",
  //   component: () => import("@/views/uikit/ListDoc.vue"),
  //   meta: {
  //     requiresAuth: true,
  //     title: "Admin Dashboard",
  //   },
  // },
  // {
  //   path: "/uikit/tree",
  //   name: "tree",
  //   component: () => import("@/views/uikit/TreeDoc.vue"),
  //   meta: {
  //     requiresAuth: true,
  //     title: "Admin Dashboard",
  //   },
  // },
  // {
  //   path: "/uikit/panel",
  //   name: "panel",
  //   component: () => import("@/views/uikit/PanelsDoc.vue"),
  //   meta: {
  //     requiresAuth: true,
  //     title: "Admin Dashboard",
  //   },
  // },

  // {
  //   path: "/uikit/overlay",
  //   name: "overlay",
  //   component: () => import("@/views/uikit/OverlayDoc.vue"),
  //   meta: {
  //     requiresAuth: true,
  //     title: "Admin Dashboard",
  //   },
  // },
  // {
  //   path: "/uikit/media",
  //   name: "media",
  //   component: () => import("@/views/uikit/MediaDoc.vue"),
  //   meta: {
  //     requiresAuth: true,
  //     title: "Admin Dashboard",
  //   },
  // },
  // {
  //   path: "/uikit/message",
  //   name: "message",
  //   component: () => import("@/views/uikit/MessagesDoc.vue"),
  //   meta: {
  //     requiresAuth: true,
  //     title: "Admin Dashboard",
  //   },
  // },
  // {
  //   path: "/uikit/file",
  //   name: "file",
  //   component: () => import("@/views/uikit/FileDoc.vue"),
  //   meta: {
  //     requiresAuth: true,
  //     title: "Admin Dashboard",
  //   },
  // },
  // {
  //   path: "/uikit/menu",
  //   name: "menu",
  //   component: () => import("@/views/uikit/MenuDoc.vue"),
  //   meta: {
  //     requiresAuth: true,
  //     title: "Admin Dashboard",
  //   },
  // },
  // {
  //   path: "/uikit/charts",
  //   name: "charts",
  //   component: () => import("@/views/uikit/ChartDoc.vue"),
  //   meta: {
  //     requiresAuth: true,
  //     title: "Admin Dashboard",
  //   },
  // },
  // {
  //   path: "/uikit/misc",
  //   name: "misc",
  //   component: () => import("@/views/uikit/MiscDoc.vue"),
  //   meta: {
  //     requiresAuth: true,
  //     title: "Admin Dashboard",
  //   },
  // },
  // {
  //   path: "/uikit/timeline",
  //   name: "timeline",
  //   component: () => import("@/views/uikit/TimelineDoc.vue"),
  //   meta: {
  //     requiresAuth: true,
  //     title: "Admin Dashboard",
  //   },
  // },
  // {
  //   path: "/pages/empty",
  //   name: "empty",
  //   component: () => import("@/views/pages/Empty.vue"),
  //   meta: {
  //     requiresAuth: true,
  //     title: "Admin Dashboard",
  //   },
  // },
  // {
  //   path: "/pages/crud",
  //   name: "crud",
  //   component: () => import("@/views/pages/Crud.vue"),
  //   meta: {
  //     requiresAuth: true,
  //     title: "Admin Dashboard",
  //   },
  // },
  // {
  //   path: "/documentation",
  //   name: "documentation",
  //   component: () => import("@/views/pages/Documentation.vue"),
  //   meta: {
  //     requiresAuth: true,
  //     title: "Admin Dashboard",
  //   },
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

NProgress.configure({ showSpinner: false });

router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});


router.beforeEach((to, from, next) => {
  const $auth = AuthStore()
  if (to.meta.requiresAuth && !$auth.isAuthenticated) {
    next({ name: 'login' })
  } else {
    next()
  }
})

export default router;
