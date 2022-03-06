"use strict";

import Vue from "vue";
import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

interface MYAxiosInstance extends AxiosInstance {
  uploadFile?: Function;
  downloadFile?: Function;
}
const baseURL =
  process.env.NODE_ENV === "production"
    ? "https://bitbw.top/"
    : "http://localhost:3000/";
const config = {
  baseURL: process.env.baseURL || process.env.apiUrl || baseURL,
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
};

const _axios: MYAxiosInstance = axios.create(config);

_axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
_axios.interceptors.response.use(
  function (response) {
    // Do something with response data
    return response;
  },
  function (error) {
    // Do something with response error
    return Promise.reject(error);
  }
);
// 简化get请求
_axios.get = (url, params = {}, cfg = {}) => {
  const config = {
    method: "get",
    url,
    params: params,
    headers: {
      "Content-Type": "application/json",
    },
    ...cfg,
  };
  return _axios(config);
};
// 上传文件
_axios.uploadFile = (url: string, data: any) => {
  return _axios({
    url,
    data,
    method: "post",
    timeout: 24 * 60 * 60 * 1000, // 1天
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
// 下载文件
_axios.downloadFile = (url: string, options: any = {}) => {
  const {
    method = "get",
    fileName = "文件",
    type = "xlsx", // 对应 typeMap 中的文件类型
    finishCall = () => ({}), // 加载结束回调
  } = options;
  let data = options.data;
  data = method === "get" ? { data } : { params: data };
  _axios({
    method: method,
    url,
    responseType: "blob",
    ...data,
  })
    .then((res: any) => {
      // 类型
      const typeMap: any = {
        xlsx: {
          type: "application/vnd.ms-excel",
          suffix: ".xlsx",
        },
      };
      // 通用下载方法
      const link = document.createElement("a");
      const blob: Blob = new Blob([res], { type: typeMap[type].type });
      link.style.display = "none";
      link.href = URL.createObjectURL(blob);
      document.body.appendChild(link);
      link.download = fileName + typeMap[type].suffix;
      // link.setAttribute("download", fileName);
      link.click();
      document.body.removeChild(link);
    })
    .catch((error) => {
      alert(error);
      // Notification.error({
      //   title: "错误",
      //   message: "网络连接错误",
      // });
      console.error(error);
    })
    .finally(() => finishCall());
};

const Plugin: any = {};
Plugin.install = function (Vue: any) {
  Vue.axios = _axios;
  (window as any).axios = _axios;
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return _axios;
      },
    },
    $axios: {
      get() {
        return _axios;
      },
    },
  });
};

Vue.use(Plugin);

export default _axios;
