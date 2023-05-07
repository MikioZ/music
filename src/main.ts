import { createApp } from "vue";

// Vue Router
import { createPinia } from "pinia";

import { router } from "./router";

import { registerStore } from "./store";
import App from "~/App.vue";

// reset css
import "@kirklin/reset-css/kirklin.css";
import "~/styles/main.css";
import "uno.css";

const app = createApp(App);
app.use(createPinia());
registerStore();
app.use(router);
app.mount("#app");
