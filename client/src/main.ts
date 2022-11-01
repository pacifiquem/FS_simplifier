import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import { BootstrapIconsPlugin } from "bootstrap-icons-vue";
import "./index.css";
import "flowbite";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(BootstrapIconsPlugin);
app.mount("#app");
