import axios from "axios";
import axiosRetry from "axios-retry";
import { message } from 'antd';


const instance =  axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL
});


axiosRetry(instance, {
    retries: 3,
    retryDelay: (retryCount, error) => {
        if(retryCount === 1) {
            message.warning('Mạng có vấn đề, đang thử lại...');
        }
        return axiosRetry.exponentialDelay(retryCount);
    },
    retryCondition: (error) => {
        return axiosRetry.isNetworkError(error) || axiosRetry.isRetryableError(error);
    }
});

instance.interceptors.request.use(
    function(config) {
        return config;
    },
    function(error){
        return Promise.reject(error);
    } 
);

instance.interceptors.response.use(
    function(response) {
        if(response && response.data){
            return response.data;
        }
        
        return response;
    },
    function(error){
        console.log(error);
    } 
);


export default instance;