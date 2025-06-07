import axios from "./axios.customize";

const SERVICE_PATH = "/product-service";
const API_BASE = "/api/Category";
const API_PREFIX = SERVICE_PATH + API_BASE;

const categoryAPI = {
  createCategory: (name, description, imageUrl, parentId) => {
    const URL_BACKEND = `${API_PREFIX}/Create`;
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    return axios.post(
      URL_BACKEND,
      {
        name,
        description,
        imageUrl: "",
        parentId
      },
      config,
    );
  },
  fetchAllCategories: () => {
    const URL_BACKEND = `${API_PREFIX}/GetAllCategories`;
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    return axios.get(
      URL_BACKEND,
      {
       
      },
      config,
    );
  },
  fetchCategories: (pageIndex, pageSize) => {
    const URL_BACKEND = `${API_PREFIX}/Get`;
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    return axios.post(
      URL_BACKEND,
      {
        filters: [],
        sortings: [],
        pageIndex,
        pageSize,
      },
      config,
    );
  },
  fetchLeafCategory: () => {
    const URL_BACKEND = `${API_PREFIX}/GetLeafCategories`;
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    return axios.get(
      URL_BACKEND,
      config
    );
  },
  // createProduct: (name, price, imageUrl, description, categoryId) => {
  //   const URL_BACKEND = `${API_PREFIX}/Create`;

  //   const data = {
  //     Name: name,
  //     Price: price,
  //     ImageUrl: imageUrl,
  //     Description: description,
  //     CategoryId: categoryId || "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  //   };

  //   return axios.post(URL_BACKEND, data);
  // },

  // updateProduct: (id, name, price, imageUrl, description, categoryId) => {
  //   const URL_BACKEND = `${API_PREFIX}/Update`;

  //   const data = {
  //     Id: id,
  //     Name: name,
  //     Price: price,
  //     ImageUrl: imageUrl,
  //     Description: description,
  //     CategoryId: categoryId || "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  //   };

  //   return axios.put(URL_BACKEND, data);
  // },

  // deleteProduct: (Ids) => {
  //   const URL_BACKEND = `${API_PREFIX}/Delete`;
  //   return axios.delete(URL_BACKEND, { data: Ids }); // axios.delete cần truyền body trong { data }
  // },
};

export default categoryAPI;
