import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { supportedLngs, type SupportedLng } from "../i18n";
import "./languageSwitcher.css"

const labels: Record<SupportedLng, string> = {
  ru: "RU",  
  en: "EN",
  ko: "KO",
};

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const current = (i18n.resolvedLanguage || i18n.language) as SupportedLng;

  const setLang = async (lng: SupportedLng) => {
    if (lng === current) return;
    await i18n.changeLanguage(lng); 
  };

  useEffect(() => {   
    const lng = (i18n.resolvedLanguage || i18n.language) as SupportedLng;
    document.documentElement.lang = lng;
  }, [i18n.resolvedLanguage, i18n.language]);

  return (
    <div className="switcher-container">
      {supportedLngs.map((lng) => (
        <button
          key={lng}
          onClick={() => setLang(lng)}
          disabled={current === lng}
          aria-pressed={current === lng}    
        >
          {labels[lng]}
        </button>
      ))}
    </div>
  );
}
