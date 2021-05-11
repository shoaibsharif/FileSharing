import { createApp } from "vue";
import App from "@/App.vue";
import "./index.css";
import router from "./router";
import store from "./store";
import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;
axios.defaults.withCredentials = true;
const app = createApp(App).use(store).use(router);
app.config.devtools = true;
app.mount("#app");
