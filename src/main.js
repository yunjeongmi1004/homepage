import "./assets/scss/style.scss";
import AOS from 'aos';
import "aos/dist/aos.css";
import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"


const app = createApp(App)

app.use(router)

app.mount("#app")

app.use(AOS.init())