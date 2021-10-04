import { createSlice, createEntityAdapter, createAsyncThunk } from "@reduxjs/toolkit";
import categoriesApi from 'api/categoriesApi';

export const getAllCategory = createAsyncThunk('GET_ALL_CATEGORY' , async () => { 
    const stateReponse = await categoriesApi.getAllCategory();
    return stateReponse;
})

export const newCategory = createAsyncThunk('NEW_CATEGORY' , async (dataPost) => { 
    const stateReponse = await categoriesApi.newCategory(dataPost);
    return stateReponse;
})

export const updateCategory = createAsyncThunk('UPDATE_CATEGORY' , async (dataPost) => { 
    const stateReponse = await categoriesApi.updateCategory(dataPost);
    const { status, dataReponse } = stateReponse;
    var changes = {
        idCategory: dataReponse.idCategory,
        nameCategory: dataReponse.nameCategory,
        urlImage: dataReponse.urlImage,
        countProduct: dataReponse.countProduct,
    }
    return {status, idCategory: dataReponse.idCategory, changes: changes};
})

export const deleteCategory = createAsyncThunk('DELETE_CATEGORY' , async (idCategory) => { 
    const stateReponse = await categoriesApi.removeCategory(idCategory);
    return{ status: stateReponse.status, idCategory };
})

export const getByIdCategory = createAsyncThunk('GET_BY_ID_CATEGORY' , async (idCategory) => { 
    const stateReponse = await categoriesApi.getByIdCategory(idCategory);
    return stateReponse;
})

const categoriesAdapter = createEntityAdapter({
    selectId: (categories) => categories.idCategory,
})

const categoryUpdateAdapter = createEntityAdapter({
    selectId: (categories) => categories.idCategory,
})

const categorySlice = createSlice({ 
    name: 'categories',
    initialState: categoriesAdapter.getInitialState({
        loading: false,
        error: '',
        categoryUpdate: categoryUpdateAdapter.getInitialState(),
    }),
    reducers: { },
    extraReducers: { 
         // GET ALL CATEGORY
         [getAllCategory.pending]: (state) => {
            state.loading = true;
        },
        [getAllCategory.rejected]: (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        },
        [getAllCategory.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.error = '';
            categoriesAdapter.setAll(state, payload);
        },
        // NEW CATEGORY
        [newCategory.pending]: (state) => {
            state.loading = true;
        },
        [newCategory.rejected]: (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        },
        [newCategory.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.error = '';
            if(payload.status === 'OK')
            {
                categoriesAdapter.addOne(state, payload.dataReponse);
            }
        },
        // DELETE CATEGORY
        [deleteCategory.pending]: (state) => {
            state.loading = true;
        },
        [deleteCategory.rejected]: (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        },
        [deleteCategory.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.error = '';
            if(payload.status === 'OK')
            {
                categoriesAdapter.removeOne(state, payload.idCategory);
            }
        },
        // GET BY ID CATEGORY
        [getByIdCategory.pending]: (state) => {
            state.loading = true;
        },
        [getByIdCategory.rejected]: (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        },
        [getByIdCategory.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.error = '';
            categoryUpdateAdapter.removeAll(state.categoryUpdate, {});
            categoryUpdateAdapter.addOne(state.categoryUpdate, payload);
        },
        // UPDATE CATEGORY
        [updateCategory.pending]: (state) => {
            state.loading = true;
        },
        [updateCategory.rejected]: (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        },
        [updateCategory.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.error = '';
            if(payload.status === 'OK') {
                categoriesAdapter.updateOne(state, { id: payload.idCategory, changes: payload.changes });
            }
        },
    }
})

export const categoriesSelectors = categoriesAdapter.getSelectors(state => state.categories);
export const categoryUpdateSelectors = categoryUpdateAdapter.getSelectors(state => state.categories.categoryUpdate);
const { reducer } = categorySlice;
export default reducer;
