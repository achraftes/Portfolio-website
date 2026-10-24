import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Importez vos fichiers JSON
import en from "./locales/en.json";
import fr from "./locales/fr.json";
import de from "./locales/de.json";

const resources = {
  en: { translation: en },
  fr: { translation: fr },
  de: { translation: de }
};

i18n
  .use(initReactI18next) // Passe i18n à react-i18next
  .init({
    resources,
    lng: "en", // Langue par défaut (ici le français)
    fallbackLng: "fr", // Langue de secours si une traduction manque
    interpolation: {
      escapeValue: false // React se protège déjà contre les failles XSS
    }
  });

export default i18n;