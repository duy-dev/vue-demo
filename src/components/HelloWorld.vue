<template>
  <div class="hello">
    <h1 class="bg-secondary">{{ msg }}</h1>
    <p>{{ $t("test.language") }}</p>
    <a-button type="primary" @click="changeLocale()">{{
      $t("common.select_lang")
    }}</a-button>
    <a-date-picker v-model:value="value1" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import type { Dayjs } from "dayjs";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String,
  },

  setup() {
    return {
      value1: ref<Dayjs>(),
    };
  },
  methods: {
    changeLocale() {
      if (this.$i18n.locale === "vi") {
        this.$i18n.locale = "en";
      } else {
        this.$i18n.locale = "vi";
      }
    },
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
