<template>
  <div class="time-container">
    <div class="time-date">
      <span>
        {{ date.month }}
      </span>
      <span>月</span>
      <span>
        {{ date.day }}
      </span>
      <span>日</span>
    </div>
    <div class="time-time">
      <span>
        {{ item.hours }}
      </span>
      <span class="time-time-befor" :class="{visibilibel:timeBeforShow}">:</span>
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
  getDate() {
    const date = new Date();
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
  handleShow(){
    this.timeBeforShow = !this.timeBeforShow
  }
  created() {
    this.getDate()
    setInterval(this.getDate,1000)
    setInterval(this.handleShow,1000)
  }
}
</script>

<style lang="scss" scoped>
.time-container{
  
  height: 100%;
  width: 100%;
  text-align: center;
  font-size: 130px;
  background-color: #2c2e3a;
  color: #fff;
}
.visibilibel{
  visibility: hidden;
}
</style>
