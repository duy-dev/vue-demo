import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { registerGlobalComponents } from "./utils/import";

// language
import { i18n } from "@/assets/lang/i18n";

import "./assets/styles/styles.scss";

// style antd
import "./assets/styles/ant-design/theme.less";
import { registerAntDesignComponents } from "./utils/register-components";

const app = createApp(App);

app.use(i18n);
registerAntDesignComponents(app);

registerGlobalComponents(app);
app.use(store).use(router).mount("#app");

export { app };
