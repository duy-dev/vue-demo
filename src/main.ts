import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { registerGlobalComponents } from "./utils/import-layout";

import "./assets/styles/styles.scss";

// style antd
import "./assets/styles/ant-design/theme.less";
import { registerAntDesignComponents } from "./utils/register-antd-components";

const app = createApp(App);

registerAntDesignComponents(app);

registerGlobalComponents(app);
app.use(store).use(router).mount("#app");

export { app };
