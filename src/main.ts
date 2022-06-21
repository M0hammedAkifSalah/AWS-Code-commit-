import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { loadFonts } from "./plugins/webfontloader";
import { createPinia } from "pinia";
import native from "./plugins/native-ui";

loadFonts();

createApp(App).use(native).use(createPinia()).use(router).mount("#app");
