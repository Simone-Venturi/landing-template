import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import VueCookieComply from 'vue-cookie-comply'
import 'vue-cookie-comply/dist/style.css'

import { createI18n } from "vue-i18n";
import messages from "@intlify/unplugin-vue-i18n/messages";

const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: navigator.language, //navigator.language
    fallbackLocale: "en",
    availableLocales: ["en", "it"],
    messages: messages,
  });

const app = createApp(App)

app.use(router)
app.use(VueCookieComply)
app.use(i18n)

app.mount('#app')
