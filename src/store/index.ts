import { createStore } from "vuex";
import language from "./modules/language";
import sidebar from "./modules/sidebar";

export default createStore({
  modules: { language, sidebar },
});
