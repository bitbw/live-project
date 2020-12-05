<template>
  <div class="home-container">
    <v-row class="text-center">
      <v-col cols="12">
        <div class="home-title">hello world</div>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class HelloWrold extends Vue {}
</script>
<style lang="scss" scoped>
.home-container {
  width: 100%;
  height: 100%;
  background-image: url("https://picsum.photos/1600/900");
  display: flex;
  justify-content: center;
  align-items: center;
  .home-title {
    font-size: 4.25rem;
    font-weight: 700;
    color: #fff;
  }
}
</style>
