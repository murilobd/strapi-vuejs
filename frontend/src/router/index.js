import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import { loadLanguageAsync } from "@/i18n";

Vue.use(VueRouter);

const routes = [
  {
    alias: "/",
    path: "/en",
    name: "home-en",
    component: Home,
    meta: {
      model: "homes",
      lang: "en"
    }
  },
  {
    path: "/fr",
    name: "home-fr",
    component: Home,
    meta: {
      model: "homes",
      lang: "fr"
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

// eslint-disable-next-line space-before-function-paren
router.beforeEach(async (to, from, next) => {
  const lang = to.meta.lang;
  const model = to.meta.model;
  await loadLanguageAsync(lang, model, to.name);
  next();
});

export default router;
