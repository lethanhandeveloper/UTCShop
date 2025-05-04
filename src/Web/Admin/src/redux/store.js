import { configureStore } from "@reduxjs/toolkit";
import productReducer from './product/product.slice';
import authReducer from './auth/auth.slice';


export const store = configureStore({
    reducer: {
        product: productReducer,
        auth: authReducer
    },
})

export default store;