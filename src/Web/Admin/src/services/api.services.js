import axios from "axios";

const fetchAllProductsAPI = (pageIndex, pageSize) => {
  const URL_BACKEND = "https://localhost:7099/api/Product/Get";
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  return axios.post(URL_BACKEND, {
    "filters": [],
    "sortings": [],
    "pageIndex": pageIndex,
    "pageSize": pageSize
  } , config);
};

const uploadFileAPI = (file) => {
  const URL_BACKEND = "https://localhost:7099/api/Product/Upload";
  const config = {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  };

  const bodyFormData = new FormData();
  bodyFormData.append("file", file);

  return axios.post(URL_BACKEND, bodyFormData , config);
}

const createProductAPI = (name, price, imageUrl, description, categoryId) => {
  const URL_BACKEND = "https://localhost:7099/api/Product/Create";
  
  const data = {
    name, 
    price, 
    imageUrl, 
    description, 
    categoryId: "3fa85f64-5717-4562-b3fc-2c963f66afa6"
  };

  return axios.post(URL_BACKEND, data);
}

export { fetchAllProductsAPI, uploadFileAPI, createProductAPI };
