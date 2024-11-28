import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import "./assets/tailwind.css";
import router from "./router";
import mixins from "./mixins";
import store from './store'
import "primeicons/primeicons.css";

import AnimateOnScroll from "primevue/animateonscroll";

const app = createApp(App);
app.use(Toast);
app.use(store)
app.use(router);
app.directive("animateonscroll", AnimateOnScroll);
app.mixin(mixins);
app.use(PrimeVue, {
  theme: "none",
  ripple: true,
});

app.mount("#app");
