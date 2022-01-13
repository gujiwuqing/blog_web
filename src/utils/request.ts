import axios from 'axios';
import { message } from 'antd';
// const baseURL = import.meta.env.PROD ? 'http://81.68.168.90:7001' : 'http://127.0.0.1:7001';
const baseURL = process.env.NODE_ENV ? 'http://127.0.0.1:7001' : 'http://gujiwuqing.com:7001';

const request = axios.create({
  baseURL,
  timeout: 15000,
});

// 添加请求拦截器
request.interceptors.request.use(
  (config: any) => {
    // config?.headers?.authorization = `Bearer ${localStorage.getItem('token')}`;
    // config.headers.authorization = 'Bearer 113121412412';
    // 在发送请求之前做些什么
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  },
);

// 添加响应拦截器
request.interceptors.response.use(
  (response) => {
    // 对响应数据做点什么
    const { code, message: errMessage } = response.data;
    if (code !== 200) {
      message.error(errMessage);
    }
    return response.data;
  },
  (error) => {
    // 对响应错误做点什么
    return Promise.reject(error);
  },
);

export default request;
