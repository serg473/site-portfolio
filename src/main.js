import "./assets/main.css";
import "@/assets/font/Inter.css";
import router from "./router";
import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";

const pinia = createPinia();
createApp(App).use(router).use(pinia).mount("#app");
