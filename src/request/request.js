import axios from 'axios';

const url = process.env.REACT_APP_API_URL;

export const Request = axios.create({
  baseURL: `${url}`,
});

Request.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem('accessToken');

    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export default Request;
