import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import "./assets/tailwind.css";
import "./assets/styles.scss";
import router from "./router";
import mixins from "./mixins";
import store from "./store";
import "primeicons/primeicons.css";
import AnimateOnScroll from "primevue/animateonscroll";
import Aura from "@primevue/themes/aura";
import { definePreset } from "@primevue/themes";

const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: "{orange.50}",
      100: "{orange.100}",
      200: "{orange.200}",
      300: "{orange.300}",
      400: "{orange.400}",
      500: "{orange.500}",
      600: "{orange.600}",
      700: "{orange.700}",
      800: "{orange.800}",
      900: "{orange.900}",
      950: "{orange.950}",
    },
  },
});

const app = createApp(App);
app.use(Toast);
app.use(store);
app.use(router);
app.directive("animateonscroll", AnimateOnScroll);
app.mixin(mixins);
app.use(PrimeVue, {
  theme: {
    preset: MyPreset,
    options: {
      darkModeSelector: ".app-dark",
    },
  },
  ripple: true,
});

app.mount("#app");
