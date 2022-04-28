import { App } from "vue";
// import Antd from 'ant-design-vue/lib'

import {
  Button,
  DatePicker,
  ConfigProvider,
  Select,
  Breadcrumb,
  Layout,
  Menu,
  Avatar,
  Popover,
} from "ant-design-vue";

export function registerAntDesignComponents(app: App<Element>): void {
  app.use(ConfigProvider);
  app.use(Button);
  app.use(DatePicker);
  app.use(Select);
  app.use(Breadcrumb);
  app.use(Layout);
  app.use(Menu);
  app.use(Avatar);
  app.use(Popover);
}
