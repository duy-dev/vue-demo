import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { registerGlobalComponents } from "./utils/import";

// language
import { i18n } from "@/assets/lang/i18n";

import "./assets/styles/reset.scss";
import "./assets/styles/tailwind.scss";
import "./assets/styles/global.scss";

import { Button, DatePicker, ConfigProvider, Select } from "ant-design-vue";

// style antd
import "ant-design-vue/lib/button/style";
import "ant-design-vue/lib/select/style";

const app = createApp(App);

app.use(i18n);
app.use(ConfigProvider);
app.use(Button);
app.use(DatePicker);
app.use(Select);

registerGlobalComponents(app);
app.use(store).use(router).mount("#app");

export { app };
