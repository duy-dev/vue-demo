<template>
  <div class="hello">
    <h1 class="bg-secondary">{{ msg }}</h1>
    <p>{{ $t("test.language") }}</p>
    <!-- <a-button type="primary" @click="setLanguage">{{
      $t("common.select_lang")
    }}</a-button> -->
    <a-select
      default-value="vi"
      style="width: 120px"
      @change="changeLanguage($event)"
    >
      <a-select-option value="vi"> Tiếng Việt </a-select-option>
      <a-select-option value="en"> English </a-select-option>
    </a-select>
    <a-date-picker v-model:value="value1" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import type { Dayjs } from "dayjs";
import { useStore } from "vuex";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String,
  },

  setup() {
    const store = useStore();
    return {
      value1: ref<Dayjs>(),
      language: computed(() => store.state.language.language),
      changeLanguage: (language: string) => {
        store.dispatch("language/setLanguages", language);
      },
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
