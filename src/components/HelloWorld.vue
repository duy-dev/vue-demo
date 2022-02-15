<template>
  <div class="hello">
    <h1 class="bg-secondary">{{ msg }}</h1>
    <a-button type="primary">Primary Button</a-button>
    <a-date-picker v-model:value="value1" :locale="locale" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import type { Dayjs } from "dayjs";
import vi_VN from "ant-design-vue/es/date-picker/locale/zh_CN";
import dayjs from "dayjs";
import "dayjs/locale/vi";
import updateLocale from "dayjs/plugin/updateLocale";
dayjs.extend(updateLocale);

dayjs.locale("vi");
dayjs.updateLocale("vi", {
  months: [
    "Tháng 1",
    "Tháng 2",
    "Tháng 3",
    "Tháng 4",
    "Tháng 5",
    "Tháng 6",
    "Tháng 7",
    "Tháng 8",
    "Tháng 9",
    "Tháng 10",
    "Tháng 11",
    "Tháng 12",
  ],
  weekdays: [
    "Thứ hai",
    "Thứ ba",
    "Thứ tư",
    "Thứ năm",
    "Thứ sau",
    "Thứ bảy",
    "Chủ nhật",
  ],
});

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String,
  },

  setup() {
    console.log(dayjs);

    return {
      value1: ref<Dayjs>(),
      locale: vi_VN,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/styles/_breakpoints";
@import "@/assets/styles/_variables";

h1 {
  font-size: 16px;
  color: $color-primary;

  @include md {
    font-size: 40px;
  }
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
