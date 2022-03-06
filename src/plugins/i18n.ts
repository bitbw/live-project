import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

const messages = {
  "zh-CN": require("@/language/zh-CN.js"),
  "en-US": require("@/language/en-US.js"),
};

export default new VueI18n({
  locale: "zh-CN",
  messages,
});
