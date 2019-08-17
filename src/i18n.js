import Vue from 'vue';
import VueI18n from 'vue-i18n';
import * as translations from './locales/fr';
import axios from 'axios';

Vue.use(VueI18n);

const messages = translations.messages;
export const i18n = new VueI18n({
  locale: 'fr',  // set locale
  fallbackLocale: 'fr',
  messages // set locale messages
});
const loadedLanguages = ['fr']; // our default language that is preloaded

function setI18nLanguage (lang) {
  i18n.locale = lang;
  axios.defaults.headers.common['Accept-Language'] = lang;
  document.querySelector('html').setAttribute('lang', lang);
  return lang;
}

export function loadLanguageAsync(locale) {
  if (i18n.locale !== locale) {
    if (!loadedLanguages.includes(locale)) {
      return import(`@/locales/${locale}`)
        .then(data => {
          i18n.setLocaleMessage(locale, data.messages[locale]);
          loadedLanguages.push(locale);
          return setI18nLanguage(locale);
        });
    }
    return Promise.resolve(setI18nLanguage(locale));
  }
  return Promise.resolve(locale);
}
