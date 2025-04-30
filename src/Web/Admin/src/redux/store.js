import { configureStore } from "@reduxjs/toolkit";
import productReducer from './product/product.slice';

export const store = configureStore({
    reducer: {
        product: productReducer
    },
})

export default store;