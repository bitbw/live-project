<!--
 * @Description: 
 * @Autor: Bowen
 * @Date: 2022-01-11 08:57:07
 * @LastEditors: Bowen
 * @LastEditTime: 2022-01-11 10:16:55
-->
<template>
  <div>
    <h1>father</h1>
    <slot></slot>
     <input type="text" v-model="input" />
    <div>{{ input }}</div>
    <h1>{{ getReUpdate() }}</h1>
    <Child />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Child from "./child.vue";
@Component({
  components: {
    Child,
  },
})
export default class Father extends Vue {
  public refs!: { [x: string]: any };
  input =666
  mounted() {
    console.log("Bowen: Father -> mounted -> this.$options", this)
    console.log("Bowen: Father -> mounted -> mounted");
  }
  created() {
    console.log("Bowen: Father -> created -> created");
  }
  getReUpdate() {
    console.log("Bowen: Father -> getReUpdate -> Father了渲染");
    return "Father了渲染";
  }
  updated() {
    console.log("Bowen: Father -> updated -> updated");
  }
  forceUpdate() {
    console.log("Bowen: Father -> forceUpdate -> forceUpdate");
    this.$forceUpdate();
  }
   destroyed() {
    console.log("Bowen: Father -> destroyed -> destroyed");
  }
}
</script>

<style lang="scss" scoped></style>
