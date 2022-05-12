import axiosInstance from 'axios';

const axios = axiosInstance.create({
  baseURL: 'https://api.imgflip.com/',
});

export default axios;
