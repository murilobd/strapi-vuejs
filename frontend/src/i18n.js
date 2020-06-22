import Vue from "vue";
import VueI18n from "vue-i18n";
import axios from "axios";

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: process.env.VUE_APP_I18N_LOCALE || "en",
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || "en",
  messages: { en: {} }
});

const loadedPages = [];

function setI18nLanguage(lang) {
  i18n.locale = lang;
  return lang;
}

export async function loadLanguageAsync(lang, page, slug) {
  if (loadedPages.includes(page)) return Promise.resolve(setI18nLanguage(lang));

  return new Promise((resolve, reject) => {
    return axios.get(`http://localhost:1337/${page}?name=${slug}`).then(res => {
      const locale = res.data[0];
      const newLocale = {};
      for (const key of Object.keys(locale)) {
        if (["created_at", "updated_at", "id", "locale"].includes(key)) {
          continue;
        }
        newLocale[`${page}-${key}`] = locale[key];
      }

      i18n.setLocaleMessage(lang, newLocale);
      loadedPages.push(`${page}-${lang}`);
      resolve(setI18nLanguage(lang));
    });
  });
}

export default i18n;
