<template>
  <div class="container">
    <h1>{{ $t("todo") }}</h1>
    <v-btn @click="handleClick">点击获取富文本</v-btn>
    <div id="div1">
      <p>欢迎使用 <b>wangEditor</b> 富文本编辑器</p>
    </div>
  </div>
</template>

<script lang="ts">
import E from "wangeditor";
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class Todo extends Vue {
  editor: any = null;
  handleClick() {
    const html = this.editor.txt.html();
    console.log(
      "Bowen ~ file: todo.vue ~ line 19 ~ Todo ~ handleClick ~ html",
      html
    );
  }
  mounted() {
    this.editor = new E("#div1");
    // 或者 const editor = new E( document.getElementById('div1') )
    this.editor.create();
  }
}
</script>

<style lang="scss" scoped>
.setting-container {
  height: 100%;
}
</style>
