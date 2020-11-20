import i18n from "i18next";
import en from "./en";
import vi from "./vi";

i18n.init({
  // we init with resources
  resources: {
    en: en,
    vi: vi
  },
  fallbackLng: "en",
  debug: false,

  // have a common namespace used around the full app
  ns: ["translations"],
  defaultNS: "translations",

  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ","
  },

  react: {
    wait: true
  }
});

export default i18n;
