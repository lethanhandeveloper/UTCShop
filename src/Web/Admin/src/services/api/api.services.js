import axios from "./axios.customize";

const fetchAllProductsAPI = (pageIndex, pageSize) => {
  const URL_BACKEND = "/api/Product/Get";
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
  const URL_BACKEND = "/api/Product/Upload";
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
  const URL_BACKEND = "/api/Product/Create";
  
  const data = {
    Name: name, 
    Price: price, 
    ImageUrl: imageUrl, 
    Description: description, 
    CategoryId: "3fa85f64-5717-4562-b3fc-2c963f66afa6"
  };

  return axios.post(URL_BACKEND, data);
}

const updateProductAPI = (name, price, imageUrl, description, categoryId) => {
  const URL_BACKEND = "/api/Product/Update";
  
  const data = {
    Name: name, 
    Price: price, 
    ImageUrl: imageUrl, 
    Description: description, 
    CategoryId: "3fa85f64-5717-4562-b3fc-2c963f66afa6"
  };

  return axios.put(URL_BACKEND, data);
}



const handleDeleteProductAPI = (Ids) => {
  const URL_BACKEND = "/api/Product/Delete";
  
  const IDs = Ids;

  return axios.delete(URL_BACKEND, IDs);
}

export { fetchAllProductsAPI, uploadFileAPI, createProductAPI, handleDeleteProductAPI };
