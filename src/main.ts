import { createApp } from "vue";
import { createPinia } from "pinia";
import { registerSW } from "virtual:pwa-register";

// TODO: https://sunpot.note.osu.si/posts/2021/05/23-vite-pwa/

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

registerSW();
const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
