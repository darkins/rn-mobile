import * as Localisation from 'expo-localization';
import i18n from 'i18n-js';
import english from './en';
import spanish from './es';

i18n.translations = {
    en: english,
    es: spanish,
    'en-US': english,
    'es-US': spanish,
};

i18n.locale = Localisation.locale;
i18n.fallbacks = true;

export default i18n;
