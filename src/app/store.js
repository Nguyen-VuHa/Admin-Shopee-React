import { configureStore } from "@reduxjs/toolkit";
import productsReducer from 'features/Products/productSlice';
import imgProductReducer from "features/Products/pages/EditProduct/imgProductSlice";
import categoryReducer from 'features/Categories/categorySlice';
import modalSliceReducer from 'features/Categories/components/ModalListProdut/modalSlice';
import authSliceReducer from "features/Auth/authSlice";

export default configureStore({
    reducer: {
        products: productsReducer,
        categories: categoryReducer,
        imgProduct: imgProductReducer,
        modalProduct: modalSliceReducer,
        auth: authSliceReducer,
    },
})