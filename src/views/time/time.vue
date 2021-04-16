<template>
  <div class="time-container" :style="`font-size:${rem}`" v-resize="handleResize">
    <!-- :class="`text-${$vuetify.breakpoint.name}-h1`" -->
    <div class="time-date">
      <span>
        {{ date.month }}
      </span>
      <span>{{ $t("time.month") }}</span>
      <span>
        {{ date.day }}
      </span>
      <span>{{ $t("time.day") }}</span>
    </div>
    <div class="time-time">
      <span>
        {{ item.hours }}
      </span>
      <span class="time-time-befor" :class="{ visibilibel: timeBeforShow }">
        :
      </span>
      <span>
        {{ item.minutes }}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class Time extends Vue {
  date: any = {};
  item: any = {};
  timeBeforShow = true;
  get rem() {
    const rem = this.$vuetify.breakpoint.width / 100 + "rem";
    return rem;
  }
  handleResize(e:any){
  console.log("Bowen: Time -> handleResize -> e", e)

  }
  getDate() {
    const date: Date = new Date();
    this.date = {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate()
    };
    this.item = {
      hours: date.getHours(),
      minutes: date.getMinutes()
    };
  }
  handleShow() {
    this.timeBeforShow = !this.timeBeforShow;
  }
  created() {
    this.getDate();
    setInterval(this.getDate, 1000);
    setInterval(this.handleShow, 1000);
  }
  mounted() {
    (window as any).tt = this;
  }
}
</script>

<style lang="scss" scoped>
.time-container {
  height: 100%;
  width: 100%;
  text-align: center;
  font-size: 6rem;
  background-color: #2c2e3a;
  color: #fff;
}
.visibilibel {
  visibility: hidden;
}
</style>
