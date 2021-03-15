<template>
  <h1>{{$t("todo")}}</h1>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class Todo extends Vue {

}
</script>

<style lang="scss" scoped>
.setting-container {
  height: 100%;
}
</style>
