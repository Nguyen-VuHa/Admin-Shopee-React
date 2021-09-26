import { configureStore } from "@reduxjs/toolkit";
import productsReducer from 'features/Products/productSlice';

export default configureStore({
    reducer: {
        products: productsReducer,
    },
})