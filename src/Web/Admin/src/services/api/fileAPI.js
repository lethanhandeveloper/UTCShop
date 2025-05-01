import axios from "./axios.customize";

const SERVICE_PATH = '/util-service';
const API_BASE = '/api/File';
const API_PREFIX = SERVICE_PATH + API_BASE;


const fileAPI = {
    upload: (file) => {
        const URL_BACKEND = `${API_PREFIX}/Upload`;
        const config = {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        };
    
        const bodyFormData = new FormData();
        bodyFormData.append("file", file);
    
        return axios.post(URL_BACKEND, bodyFormData, config);
      }
};

export default fileAPI;
