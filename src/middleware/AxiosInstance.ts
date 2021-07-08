import axios, { AxiosRequestConfig } from 'axios';
import LocalStorage from './LocalStorage';
import version from '../../app.json';
import { AUTH_TOKEN_KEY } from '../contexts/Auth';

const axiosInstance = axios.create({});

axiosInstance.interceptors.request.use(
    async (config: AxiosRequestConfig) => {
        const newConfig = config;
        const token = await LocalStorage.getItem(AUTH_TOKEN_KEY);

        newConfig.headers.Accept = 'application/json';
        newConfig.headers['Content-Type'] = 'application/json';
        newConfig.headers.Authorization = token;
        newConfig.headers['x-Custom-App-Version'] = `${version.expo.version}`;

        return newConfig;
    },
    (error) => Promise.reject(error),
);

export default axiosInstance;
