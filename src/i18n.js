import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './locales/en/translation.json';
import translationZHTW from './locales/zh-TW/translation.json';
import pricingEN from './locales/en/pricing.json';
import pricingZHTW from './locales/zh-TW/pricing.json';
import faqEN from './locales/en/faq.json';
import faqZHTW from './locales/zh-TW/faq.json';
import docsEN from './locales/en/docs.json';
import docsZHTW from './locales/zh-TW/docs.json';
import comingsoonEN from './locales/en/comingsoon.json';
import comingsoonZHTW from './locales/zh-TW/comingsoon.json';

const resources = {
  en: {
    translation: translationEN,
    pricing: pricingEN,
    faq: faqEN,
    docs: docsEN,
    comingsoon: comingsoonEN
  },
  'zh-TW': {
    translation: translationZHTW,
    pricing: pricingZHTW,
    faq: faqZHTW,
    docs: docsZHTW,
    comingsoon: comingsoonZHTW
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: ['en', 'zh-TW'],
    interpolation: {
      escapeValue: false // React already escapes values
    }
  });

export default i18n;
