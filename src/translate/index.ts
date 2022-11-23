import ENUS from '@/translate/locales/en-us.json'
import ESES from '@/translate/locales/es-es.json'
import PTBR from '@/translate/locales/pt-br.json'
import i18n from 'i18next'
import detector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

let defaultLanguage: string | null = 'pt-BR'

if (typeof window !== 'undefined') {
  defaultLanguage = window.localStorage.getItem('i18nextLng')
}

const resources = {
  'pt-BR': PTBR,
  'en-US': ENUS,
  'es-ES': ESES
}

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: defaultLanguage as string,
    interpolation: {
      escapeValue: false
    }
  })
