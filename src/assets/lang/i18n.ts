import { createI18n } from "vue-i18n";
import vi from "./vi.json";
import en from "./en.json";

const i18n = createI18n({
  locale: "vi", // set locale
  fallbackLocale: "vi", // set fallback locale
  messages: {
    vi,
    en,
  },
});

function changeLanguage(): void {
  console.log("a2");
}

export { i18n, changeLanguage };
