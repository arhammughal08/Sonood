import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import arabic from "./arabic.json";
import english from "./english.json";
import Cookies from "js-cookie";

const i18nPromise = i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en: {
        translation: english.translation,
      },
      ar: {
        translation: arabic.translation,
      },
    },
    lng: Cookies.get("lang") || "ar",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["Cookies", "navigator"],
      caches: ["Cookies"],
    },
  });

export const i18nInitialized = i18nPromise;

export default i18n;
