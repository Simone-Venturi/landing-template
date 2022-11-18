import { createRouter, createWebHistory } from "vue-router";
import Corpus from "../views/Corpus.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior: function (to, from, savedPosition) {
    if (to.hash) {
      setTimeout(() => {
        const element = document.getElementById(to.hash.replace(/#/, ""));
        if (element && element.scrollIntoView) {
          element.scrollIntoView({ block: "end", behavior: "smooth" });
        }
      }, 500);
      return { el: to.hash };
    } else if (savedPosition) {
      return savedPosition;
    }
    return { top: 0 };
  },
  routes: [
    {
      path: "/",
      name: "home",
      component: Corpus,
    },
  ],
});

export default router;
