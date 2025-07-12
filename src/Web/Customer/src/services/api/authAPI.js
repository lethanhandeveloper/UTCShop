import axios from "./axios.customize";

const SERVICE_PATH = "/identity-service";
const API_BASE = "/api";
const API_PREFIX = SERVICE_PATH + API_BASE;

const authAPI = {
  login: (username, email, password, roleType) => {
    const URL_BACKEND = `${API_PREFIX}/account/login`;
    const bodyFormData = {
      UserName: username,
      Email: email,
      Password: password,
      RoleType: roleType,
    };

    return axios.post(URL_BACKEND, bodyFormData);
  },
  refreshToken: () => {
    const URL_BACKEND = `${API_PREFIX}/account/refreshtoken`;

    return axios.post(URL_BACKEND);
  },
  getCustomerInfo: () => {
    const URL_BACKEND = `${API_PREFIX}/customer/getcustomerinfo`;

    return axios.get(URL_BACKEND);
  },
};

export default authAPI;
