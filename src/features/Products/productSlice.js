import { createSlice, createEntityAdapter, createAsyncThunk } from "@reduxjs/toolkit";
import productApi from 'api/productApi';

export const getAllProduct = createAsyncThunk('GET_ALL_PRODUCT' , async () => { 
    const stateReponse = await productApi.getAllProduct();
    return stateReponse;
})

export const newProduct = createAsyncThunk('ADD_PRODUCT' , async (dataPost) => { 
    const stateReponse = await productApi.newProduct(dataPost);
    return stateReponse;
})

export const updateStatus = createAsyncThunk('TOGGLE_STATUS_PRODUCT' , async ({idProduct, ObjUpdate}) => {
    const stateReponse =  await productApi.updateStatus(idProduct);
    return stateReponse , {idProduct, changes: ObjUpdate};
})

const productsAdapter = createEntityAdapter({
    selectId: (product) => product.idProduct,
})

const productSlice = createSlice({
    name: 'products',
    initialState: productsAdapter.getInitialState({
        loading: false,
        error: '',
    }),
    reducers: {
        setAllProducts: productsAdapter.setAll,
        toggleStatus: productsAdapter.updateOne,
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
        // ADD A PRODUCTS
        [newProduct.pending]: (state) => {
            state.loading = true;
        },
        [newProduct.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        [newProduct.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.error = '';
            if(payload.status === 'OK')
            {
                productsAdapter.addOne(state, payload.producReponse);
            }
        },
        // TOGGLLE STATUS 
        [updateStatus.pending]: (state) => {
            state.loading = true;
        },
        [updateStatus.rejected]: (state) => {
            state.loading = false;
        },
        [updateStatus.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.error = '';
            productsAdapter.updateOne(state, {id: payload.idProduct, changes: payload.changes})
        },
    },
})

export const productsSelectors = productsAdapter.getSelectors(state => state.products);

const { reducer } = productSlice;
export default reducer;