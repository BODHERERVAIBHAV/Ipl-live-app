import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
    resources: {
      en: { translation: { title: "IPL Live Match", loading: "Loading..." } },
      hi: { translation: { title: "आईपीएल लाइव मैच", loading: "लोड हो रहा है..." } },
      ta: { translation: { title: "ஐபிஎல் நேரலை", loading: "ஏற்றுகிறது..." } },
      te: { translation: { title: "ఐపిఎల్ ప్రత్యక్ష మ్యాచ్", loading: "లోడ్ అవుతోంది..." } },
      mr: { translation: { title: "आयपीएल लाइव्ह सामना", loading: "लोड करत आहे..." } },
      gu: { translation: { title: "આઈપીએલ લાઈવ મેચ", loading: "લોડ થઈ રહ્યું છે..." } },
      bn: { translation: { title: "আইপিএল লাইভ ম্যাচ", loading: "লোড হচ্ছে..." } },
      kn: { translation: { title: "ಐಪಿಎಲ್ ನೇರ ಪಂದ್ಯ", loading: "ಲೋಡ್ ಆಗುತ್ತಿದೆ..." } },
      ml: { translation: { title: "ഐപിഎൽ തത്സമയ മത്സരം", loading: "ലോഡ് ചെയ്യുന്നു..." } },
      ur: { translation: { title: "آئی پی ایل لائیو میچ", loading: "لوڈ ہو رہا ہے..." } },
      pa: { translation: { title: "ਆਈਪੀਐਲ ਲਾਈਵ ਮੈਚ", loading: "ਲੋਡ ਹੋ ਰਿਹਾ ਹੈ..." } }
    }
  });

export default i18n;