import dayjs from "dayjs";
import vi_VN from "ant-design-vue/es/locale/vi_VN";
import "dayjs/locale/vi";
import en_US from "ant-design-vue/es/locale/en_US";
import "dayjs/locale/en";
import { Locale } from "ant-design-vue/lib/locale-provider";
import { i18n } from "@/assets/lang/i18n";

export interface StateLanguage {
  language: Locale;
}

export default {
  namespaced: true,
  state: {
    language: vi_VN,
  },
  mutations: {
    SET_LANGUAGE(state: StateLanguage, value: Locale): void {
      state.language = value;
    },
  },
  actions: {
    setLanguages(
      { commit }: { commit: (type: string, payload: Locale) => void },
      value: "vi" | "en"
    ): void {
      i18n.global.locale = value;
      switch (value) {
        case "vi":
          dayjs.locale("vi");
          commit("SET_LANGUAGE", vi_VN);
          break;
        case "en":
          dayjs.locale("en");
          commit("SET_LANGUAGE", en_US);
          break;

        default:
          dayjs.locale("vi");
          commit("SET_LANGUAGE", vi_VN);
          break;
      }
    },
  },
};
