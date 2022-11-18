import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import VueCookieComply from "vue-cookie-comply";
import "vue-cookie-comply/dist/style.css";

import { createI18n } from "vue-i18n";
import messages from "@intlify/unplugin-vue-i18n/messages";

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTwitter, faFacebook, faInstagram, faPinterest, faLinkedin } from '@fortawesome/free-brands-svg-icons'
library.add(faTwitter, faFacebook, faInstagram, faPinterest, faLinkedin )

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: navigator.language.substring(0, 2), //navigator.language.substring(0, 2)
  fallbackLocale: "en",
  availableLocales: ["en", "it"],
  messages: messages,
});

const app = createApp(App);

app.use(router);
app.use(VueCookieComply);
app.use(i18n);

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount("#app");
