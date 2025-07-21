import axios from "axios";
import axiosRetry from "axios-retry";
import { message } from "antd";
import NProgress from "nprogress";
import authAPI from "../../services/api/authAPI";

NProgress.configure({
  showSpinner: false,
  trickleSpeed: 100,
});

const instance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  withCredentials: true,
});

axiosRetry(instance, {
  retries: 3,
  retryDelay: (retryCount, error) => {
    if (retryCount === 1) {
      message.warning("Mạng có vấn đề, đang thử lại...");
    }
    return axiosRetry.exponentialDelay(retryCount);
  },
  retryCondition: (error) => {
    return (
      axiosRetry.isNetworkError(error) || axiosRetry.isRetryableError(error)
    );
  },
});

instance.interceptors.request.use(
  function (config) {
    config.withCredentials = true;
    NProgress.start();
    return config;
  },
  function (error) {
    NProgress.done();
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  function (response) {
    NProgress.done();
    if (response && response.data) {
      return response.data;
    }

    return response;
  },
  async function (error) {
    debugger;
    const originalRequest = error.config;
    if (error && error.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const res = await authAPI.refreshToken();
      if (res.statusCode === 200) {
        return instance(originalRequest);
      } else {
        window.location.href = "/auth";
        return Promise.reject(null);
      }
    }

    NProgress.done();

    return Promise.reject(error);
  },
);

export default instance;
