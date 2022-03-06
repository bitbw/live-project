<template>
  <v-container fluid>
    <!-- calculate -->
    <h1>1Image2PDF</h1>

    <v-file-input
      v-model="file"
      label="选择文件"
      chips
      show-size
      truncate-length="15"
    ></v-file-input>
    <v-btn @click="handleUplod" :loading="loading" :disabled="loading"
      >上传</v-btn
    >
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { image2pdf } from "@/api";
@Component({})
export default class Image2PDF extends Vue {
  public refs!: { [x: string]: any };
  file: File | null = null;
  loading = false;
  async handleUplod() {
    if (!this.file) {
      return;
    }
    const formdata = new FormData();
    formdata.append("zip", this.file);
    this.loading = true;
    const res: any = await image2pdf(formdata);
    // 文件名
    const disposition = res.headers["content-disposition"];
    const filename = disposition.split("=")[1];
    // 下载
    const link = document.createElement("a");
    // const ab = this.toArrayBuffer(res.data);
    const blob: Blob = new Blob([res.data], { type: "application/zip" });
    link.style.display = "none";
    link.href = URL.createObjectURL(blob);
    document.body.appendChild(link);
    link.download = filename;
    // link.setAttribute("download", fileName);
    link.click();
    document.body.removeChild(link);

    this.loading = false;
  }
  toArrayBuffer(buf: any) {
    const ab = new ArrayBuffer(buf.length);
    const view = new Uint8Array(ab);
    for (let i = 0; i < buf.length; ++i) {
      view[i] = buf[i];
    }
    return ab;
  }
  created() {
    (window as any).img2pdf = this;
  }
}
</script>

<style lang="scss" scoped>
::v-deep {
  .v-select__selections {
    padding-top: 30px !important;
    padding-bottom: 10px;
  }
}
</style>
