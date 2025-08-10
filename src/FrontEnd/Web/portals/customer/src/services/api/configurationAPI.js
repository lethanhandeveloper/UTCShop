import axios from "./axios.customize";

const SERVICE_PATH = "/configuration-service";
const API_BASE = "/api";
const API_PREFIX = SERVICE_PATH + API_BASE;

const configurationAPI = {
  fetchAllProvinces: () => {
    const URL_BACKEND = `${API_PREFIX}/location/province/all`;

    return axios.get(URL_BACKEND);
  },
  fetchDistrictsByProvinceId: (id) => {
     const URL_BACKEND = `${API_PREFIX}/location/district/province/${id}`;

    return axios.get(URL_BACKEND);
  }
};

export default configurationAPI;
