import axios from "./axios.customize";

const SERVICE_PATH = "/cart-service";
const API_BASE = "/api";
const API_PREFIX = SERVICE_PATH + API_BASE;

const cartAPI = {
  fetchCart: () => {
    const URL_BACKEND = `${API_PREFIX}/cart/get`;

    return axios.get(URL_BACKEND);
  },
  addToCart: (productId) => {
    const URL_BACKEND = `${API_PREFIX}/cart/add`;
    debugger;
    var data = {
      Items: [
        {
          ProductId: productId,
        },
      ],
    };

    return axios.post(URL_BACKEND, data);
  },
};

export default cartAPI;
