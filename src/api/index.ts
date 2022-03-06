import http from "@/plugins/axios";

import Axios from "axios";
const baseURL =
  process.env.NODE_ENV === "production"
    ? "https://bitbw.top/"
    : "http://localhost:3000/";
export const image2pdf = (data: any) =>
  Axios({
    url: `${baseURL}api/util/image2pdf`,
    data,
    method: "post",
    timeout: 24 * 60 * 60 * 1000, // 1天
    headers: {
      "Content-Type": "multipart/form-data",
    },
    responseType: "blob",
  });
