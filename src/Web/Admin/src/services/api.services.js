import axios from "axios";

const fetchAllCategoryAPI = () => {
  const URL_BACKEND = "/api/v1/auth/logout";
  return axios.get(URL_BACKEND);
};

export { fetchAllCategoryAPI };
