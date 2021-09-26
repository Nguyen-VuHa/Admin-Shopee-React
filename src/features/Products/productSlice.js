import { createSlice, createEntityAdapter, createAsyncThunk } from "@reduxjs/toolkit";
import productApi from 'api/productApi';

export const getAllProduct = createAsyncThunk('GET_ALL_PRODUCT' , async (_, { dispatch }) => { 
    const stateReponse = await productApi.getAllProduct();
    return stateReponse;
})

const productsAdapter = createEntityAdapter({
    selectId: (product) => product.idProduct,
})

const productSlice = createSlice({
    name: 'products',
    initialState: productsAdapter.getInitialState({
        loading: false,
        error: ''
    }),
    reducers: {
        setAllProducts: productsAdapter.setAll,
    },
    extraReducers: {
        // GET ALL PRODUCTS
        [getAllProduct.pending]: (state) => {
            state.loading = true;
        },
        [getAllProduct.rejected]: (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        },
        [getAllProduct.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.error = '';
            productsAdapter.setAll(state, payload);
        },
    },
})

export const productsSelectors = productsAdapter.getSelectors(state => state.products);

const { reducer } = productSlice;
export default reducer;