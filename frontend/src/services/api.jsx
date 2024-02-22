import axios from 'axios';

export const api = new axios.create({
    baseURL: 'http://localhost:8080'
})

api.interceptors.request.use(
    (config) => {
        const token = sessionStorage.getItem("@Auth:token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
