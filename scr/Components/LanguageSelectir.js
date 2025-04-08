import React from "react";
import { useTranslation } from "react-i18next";

const languages = {
  en: "English",
  hi: "हिन्दी",
  ta: "தமிழ்",
  te: "తెలుగు",
  mr: "मराठी",
  gu: "ગુજરાતી",
  bn: "বাংলা",
  kn: "ಕನ್ನಡ",
  ml: "മലയാളം",
  ur: "اردو",
  pa: "ਪੰਜਾਬੀ"
};

function LanguageSelector() {
  const { i18n } = useTranslation();

  return (
    <select
      className="p-2 border rounded"
      value={i18n.language}
      onChange={(e) => i18n.changeLanguage(e.target.value)}
    >
      {Object.entries(languages).map(([code, name]) => (
        <option key={code} value={code}>
          {name}
        </option>
      ))}
    </select>
  );
}

export default LanguageSelector;
