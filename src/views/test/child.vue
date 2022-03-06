<!--
 * @Description: 
 * @Autor: Bowen
 * @Date: 2022-01-11 08:57:14
 * @LastEditors: Bowen
 * @LastEditTime: 2022-01-11 10:17:25
-->
<template>
  <div>
    <h1>child</h1>
    <input type="text" v-model="input" />
    <div>{{ input }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class Child extends Vue {
  public refs!: { [x: string]: any };
  input = 123;
  mounted() {
    console.log("Bowen: Child -> mounted -> mounted");
  }
  created() {
    console.log("Bowen: Child -> created -> created");
  }
  updated() {
    console.log("Bowen: Child -> updated -> updated");
  }
  destroyed() {
    console.log("Bowen: Child -> destroyed -> destroyed");
  }
}
</script>

<style lang="scss" scoped></style>
