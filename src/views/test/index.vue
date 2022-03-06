<!--
 * @Description: 
 * @Autor: Bowen
 * @Date: 2022-01-11 08:57:44
 * @LastEditors: Bowen
 * @LastEditTime: 2022-01-20 15:00:18
-->
<template>
  <div>
    <NumberInput :value="value" @input="input" :max="10" :min="1" lable="123" />
    <h1>TestIndex</h1>
    <!-- <Father ref="father" v-if="show">
      <SlotTeset />
    </Father> -->
    <v-btn @click="update">forceUpdate()</v-btn>
    <v-btn @click="reLoad">if</v-btn>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Father from "./father.vue";
import SlotTeset from "./slot.vue";
import NumberInput from "./input.vue";

@Component({
  components: {
    Father,
    SlotTeset,
    NumberInput,
  },
})
export default class TestIndex extends Vue {
  public refs!: { [x: string]: any };
  show = true;
  value = 0;
  reLoad() {
    this.show = false;
    this.$nextTick(() => {
      this.show = true;
    });
  }

  input(value: number) {
    console.log("Bowen: TestIndex -> input -> value", value);
    this.value = value;
  }
  update() {
    (this.$refs.father as any).forceUpdate();
    console.log(
      "Bowen: TestIndex -> update -> this.$refs.father",
      this.$refs.father
    );
  }
  updated() {
    // console.log("Bowen: TestIndex -> updated -> updated");
  }
  mounted() {
    console.log("Bowen: TestIndex -> mounted -> mounted");
  }
  created() {
    console.log("Bowen: TestIndex -> created -> created");
  }
}
</script>

<style lang="scss" scoped></style>
