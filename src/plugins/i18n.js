import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { DEFAULT_LANGUAGE, FALLBACK_LANGUAGE } from '@/lang/constants'
import fr from '@/lang/fr.json'

Vue.use(VueI18n);

export const i18n = new VueI18n({
  locale: DEFAULT_LANGUAGE, // set locale
  fallbackLocale: FALLBACK_LANGUAGE,
  messages: { fr } // set locale messages
});
