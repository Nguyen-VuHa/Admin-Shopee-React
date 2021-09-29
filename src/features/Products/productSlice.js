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

export const updateProduct = createAsyncThunk('UPDATE_PRODUCT' , async (dataPost) => { 
    const stateReponse = await productApi.updateProduct(dataPost);
    const { data, arrayImage } = dataPost;
    var imageProduct = [];
    arrayImage.forEach(image => {
        imageProduct.push({
            imageUrl: image,
        })
    });
    var ObjChanges = {
        nameProduct: data.name,
        descProduct: data.description,
        price: data.price,
        status: data.checked,
        HINHANH_SANPHAMs: imageProduct,
    }
    return { stateReponse, idProduct: data.idProduct, changes: ObjChanges };
})

export const updateStatus = createAsyncThunk('TOGGLE_STATUS_PRODUCT' , async ({idProduct, ObjUpdate}) => {
    const stateReponse =  await productApi.updateStatus(idProduct);
    return stateReponse , {idProduct, changes: ObjUpdate};
})

export const getProductById = createAsyncThunk('GET_PRODUCT_BY_ID' , async (idProduct) => {
    const stateReponse =  await productApi.getProductById(idProduct);
    return stateReponse;
})

const productsAdapter = createEntityAdapter({
    selectId: (product) => product.idProduct,
})

const productUpdateAdapter = createEntityAdapter({
    selectId: (product) => product.idProduct,
})

const productSlice = createSlice({
    name: 'products',
    initialState: productsAdapter.getInitialState({
        loading: false,
        error: '',
        productUpdate: productUpdateAdapter.getInitialState(),
    }),
    reducers: {
        setAllProducts: productsAdapter.setAll,
        toggleStatus: productsAdapter.updateOne,
        removeProductUpdate (state) {
            productUpdateAdapter.removeAll(state.productUpdate, {})
        }
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
        // GET PRODUCT BY ID
        [getProductById.pending]: (state) => {
            state.loading = true;
        },
        [getProductById.rejected]: (state) => {
            state.loading = false;
        },  
        [getProductById.fulfilled]: (state, action) => {
            state.loading = false;
            state.error = '';
            productUpdateAdapter.removeAll(state.productUpdate, {});
            productUpdateAdapter.addOne(state.productUpdate, action.payload);
        },
        // UPDATE PRODUCT
        [updateProduct.pending]: (state) => {
            state.loading = true;
        },
        [updateProduct.rejected]: (state) => {
            state.loading = false;
        },  
        [updateProduct.fulfilled]: (state, action) => {
            const { payload } = action;
            state.loading = false;
            state.error = '';
            productsAdapter.updateOne(state, { id: payload.idProduct, changes: payload.changes });
        },
    },
})

export const productsSelectors = productsAdapter.getSelectors(state => state.products);
export const productUpdateSelectors = productsAdapter.getSelectors(state => state.products.productUpdate);

const { reducer, actions} = productSlice;
export const {
    removeProductUpdate,
} = actions;
export default reducer;