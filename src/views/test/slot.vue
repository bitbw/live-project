<!--
 * @Description: 
 * @Autor: Bowen
 * @Date: 2022-01-11 09:50:55
 * @LastEditors: Bowen
 * @LastEditTime: 2022-01-11 10:12:53
-->
<template>
  <div>
    <h1>Slot</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class SlotTest extends Vue {
  public refs!: { [x: string]: any };
  mounted() {
    console.log("Bowen: Slot -> mounted -> mounted");
  }
  created() {
    console.log("Bowen: Slot -> created -> created");
  }
  updated() {
    console.log("Bowen: Slot -> updated -> updated");
  }
}
</script>

<style lang="scss" scoped></style>