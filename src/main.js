import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./styles/app.css";
import axios from 'axios';
import VueAxios from 'vue-axios';

createApp(App)
  .use(router)
  .use(VueAxios, axios)
  .mount("#app");


