import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enCommon from "../locales/en/english.json";
import ruCommon from "../locales/ru/russian.json";
import koCommon from "../locales/ko/korean.json";

export const LANG_STORAGE_KEY = "ui_lang";

export const supportedLngs = ["ru", "ko", "en"] as const;
export type SupportedLng = (typeof supportedLngs)[number];

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { common: enCommon },
      ru: { common: ruCommon },
      ko: { common: koCommon },
    },
    fallbackLng: "en",
    supportedLngs,
    ns: ["common"],
    defaultNS: "common",
    interpolation: { escapeValue: false },
    detection: {      
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
      lookupLocalStorage: LANG_STORAGE_KEY,
    },
  });

export default i18n;
