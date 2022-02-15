import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueI18n from "vue-i18n";

import "./assets/styles/reset.scss";
import "./assets/styles/tailwind.scss";
import "./assets/styles/global.scss";

import { Button, DatePicker } from "ant-design-vue";

// style antd
import "ant-design-vue/lib/button/style";

import Vue from "vue";

const app = createApp(App);

app.use(Button);
app.use(DatePicker);
app.use(store).use(router).mount("#app");
