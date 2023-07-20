import axios, { type AxiosInstance } from "axios"
import { type Plugin } from "vue"

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
     $axios: AxiosInstance
  }
}

const axiosInstance: AxiosInstance = axios.create({
  baseURL: "https://recruitment.dev.rollingglory.com/api/v2/",
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
  timeout: 5000
})

axiosInstance.interceptors.response.use(
  (response: any) => response,
  (error: any) => {
    return Promise.reject(error)
  }
)

const AxiosPlugin: Plugin = {
  install(app) {
    axiosInstance;
    app.config.globalProperties.$axios = axiosInstance
    app.provide('$axios', axiosInstance)
  }
}

export default AxiosPlugin