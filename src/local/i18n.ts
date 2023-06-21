// eslint-disable-next-line import/no-extraneous-dependencies
import i18next from 'i18next';
// eslint-disable-next-line import/no-extraneous-dependencies
import { initReactI18next } from 'react-i18next';
import { translation } from '../utils/translation';

const resources = translation;

i18next.use(initReactI18next).init({
  resources,
  lng: 'ko',
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
