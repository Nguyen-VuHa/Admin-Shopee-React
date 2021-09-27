import { configureStore } from "@reduxjs/toolkit";
import productsReducer from 'features/Products/productSlice';
import imgProductReducer from "features/Products/pages/EditProduct/imgProductSlice";

export default configureStore({
    reducer: {
        products: productsReducer,
        imgProduct: imgProductReducer,
    },
})