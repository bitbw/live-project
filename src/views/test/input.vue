<!--数量输入框-->
<template>
  <div class="number-input">
    <v-text-field
      ref="input"
      :value="value"
      solo
      dense
      hide-details
      single-line
      type="number"
      :min="min == 'null' ? 1 : min"
      :max="max == 'null' ? 9999999 : max"
      v-bind="$attrs"
      @input="input1"
      v-on="{ input: input2 }"
    ></v-text-field>
  </div>
</template>

<script>
export default {
  name: "NumberInput",
  props: {
    // value: { type: [String, Number], default: 1 },

    min: { type: [String, Number], default: "null" },
    max: { type: [String, Number], default: "null" }
  },
  data() {
    return {
      value: 1
    };
  },
  computed: {
    inputListeners() {
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      //   const vm = this;
      const inputListeners = Object.assign({}, this.$listeners, {
        input: this.input
      });
      return inputListeners;
    }
  },
  mounted() {
    this.$listeners;
  },
  methods: {
    input1(val) {
      console.log("Bowen:put1=> val", val);
    },
    input2(val) {
      console.log("Bowen:input2=> val", val);
    },
    input3(val) {
      console.log("Bowen:input3=> val", val);
    },
    async input(val) {
      // 限制最大最小值的输入
      if (this.min !== "null" && val < this.min) {
        // 因为 text-field 内部使用 lazyValue 作为显示 ，所以修改value 后还需要修改 lazyValue
        this.$emit("input", this.min);
        this.$refs.input && (this.$refs.input.lazyValue = this.min);
        return;
      }
      if (this.max !== "null" && val > this.max) {
        this.$emit("input", this.max);
        this.$refs.input && (this.$refs.input.lazyValue = this.max);
        return;
      }
      this.$emit("input", val);
    }
  }
};
</script>

<style lang="scss" scoped></style>
