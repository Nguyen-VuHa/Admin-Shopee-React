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

const categoriesAdapter = createEntityAdapter({
    selectId: (categories) => categories.idCategory,
})

const categorySlice = createSlice({ 
    name: 'categories',
    initialState: categoriesAdapter.getInitialState({
        loading: false,
        error: '',
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
    }
})

export const categoriesSelectors = categoriesAdapter.getSelectors(state => state.categories);

const { reducer } = categorySlice;
export default reducer;
