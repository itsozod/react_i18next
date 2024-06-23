import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import EnTranslation from "../public/locale/en/en.json";
import RuTranslation from "../public/locale/ru/ru.json";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: EnTranslation,
      },
      ru: {
        translation: RuTranslation,
      },
    },

    lng: localStorage.getItem("i18nextLng") as string,
    fallbackLng: "ru",

    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["querystring", "localStorage"],
      caches: ["localStorage"],
    },
  });

export default i18n;
