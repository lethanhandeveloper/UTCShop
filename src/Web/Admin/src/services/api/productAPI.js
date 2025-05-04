import axios from "./axios.customize";

const SERVICE_PATH = '/product-service';
const API_BASE = '/api/Product';
const API_PREFIX = SERVICE_PATH + API_BASE;


const productApi = {
  fetchProducts: (pageIndex, pageSize) => {
    const URL_BACKEND = `${API_PREFIX}/Get`;
    const config = {
      headers: {
        'Content-Type': 'application/json',
      }
    };

    return axios.post(URL_BACKEND, {
      filters: [],
      sortings: [],
      pageIndex,
      pageSize
    }, config);
  },
  createProduct: (name, price, imageUrl, description, categoryId) => {
    const URL_BACKEND = `${API_PREFIX}/Create`;

    const data = {
      Name: name,
      Price: price,
      ImageUrl: imageUrl,
      Description: description,
      CategoryId: categoryId || "3fa85f64-5717-4562-b3fc-2c963f66afa6"
    };

    return axios.post(URL_BACKEND, data);
  },

  updateProduct: (id, name, price, imageUrl, description, categoryId) => {
    const URL_BACKEND = `${API_PREFIX}/Update`;

    const data = {
      Id: id,
      Name: name,
      Price: price,
      ImageUrl: imageUrl,
      Description: description,
      CategoryId: categoryId || "3fa85f64-5717-4562-b3fc-2c963f66afa6"
    };

    return axios.put(URL_BACKEND, data);
  },

  deleteProduct: (Ids) => {
    const URL_BACKEND = `${API_PREFIX}/Delete`;
    return axios.delete(URL_BACKEND, { data: Ids }); // axios.delete cần truyền body trong { data }
  }
};

export default productApi;
