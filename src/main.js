import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap"; // Import Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap JS
import { createPinia } from "pinia";
// import 2 dòng thông báo
import Vue3Toasity from "vue3-toastify";
import "vue3-toastify/dist/index.css";

const pinia = createPinia();

const app = createApp(App);

app.use(router);
app.use(Vue3Toasity, {
    autoClose: 3000,

    // ...
});
app.use(pinia);
app.mount("#app");
