import { configureStore } from "@reduxjs/toolkit";
import productsReducer from 'features/Products/productSlice';
import imgProductReducer from "features/Products/pages/EditProduct/imgProductSlice";
import categoryReducer from 'features/Categories/categorySlice';

export default configureStore({
    reducer: {
        products: productsReducer,
        categories: categoryReducer,
        imgProduct: imgProductReducer,
    },
})