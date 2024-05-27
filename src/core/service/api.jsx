import axios from 'axios';

const API_URL = 'http://localhost:3020';
const HEADERS = { 'Content-Type': 'application/json' };

const instance = axios.create({
    baseURL: API_URL,
    headers: HEADERS
});

export const apiService = {
    get: async (endpoint, params) => {
        try {
            if (params) {
                const paramsLocal = new URLSearchParams();
                Object.keys(params).forEach(k => {
                    if (Array.isArray(params[k])) {
                        params[k].forEach((item) => {
                            paramsLocal.append(`${k.toString()}[]`, item);
                        });
                    } else {
                        paramsLocal.append(k, params[k]);
                    }
                });
                const response = await instance.get(this.API_URL + '/' + endpoint, { params: paramsLocal });
                return response.data;
            }
            const response = await instance.get(this.API_URL + '/' + endpoint);
            return response.data;
        } catch (error) {
            console.error(`Error getting data from ${endpoint}`, error);
            throw error;
        }
    },
    post: async (endpoint, data) => {
        try {
            const response = await instance.post(this.API_URL + '/' + endpoint, data);
            return response.data;
        } catch (error) {
            console.error(`Error posting data to ${endpoint}`, error);
            throw error;
        }
    },
    put: async (endpoint, data) => {
        try {
            const response = await instance.put(this.API_URL + '/' + endpoint, data);
            return response.data;
        } catch (error) {
            console.error(`Error updating data at ${endpoint}`, error);
            throw error;
        }
    },
    delete: async (endpoint) => {
        try {
            const response = await instance.delete(this.API_URL + '/' + endpoint);
            return response.data;
        } catch (error) {
            console.error(`Error deleting data at ${endpoint}`, error);
            throw error;
        }
    },
};
export default apiService;