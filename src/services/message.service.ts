import { notification } from "ant-design-vue";

export const onHttpSuccess = (description: string, duration = 400): void => {
  notification["success"]({
    message: "",
    description: description,
    duration,
    class: "success",
  });
};

export const onHttpError = (description: string, duration = 4): void => {
  notification["error"]({
    message: "",
    description: description,
    duration,
    class: "error",
  });
};
