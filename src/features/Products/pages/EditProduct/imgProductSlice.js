import { createSlice } from "@reduxjs/toolkit";
var initialState = [];

const imgProductSlice = createSlice({
    name: 'image_products',
    initialState: initialState,
    reducers: {
        addImageBs64:  (state, action) =>{
            state = state.concat(action.payload);
            return state;
        },
        removeImageBs64: (state, action) => {
            return state.filter(data => data !== action.payload);
        },
        removeAllImageBs64: () => {
            return [];
        }
    },
})

const { reducer, actions } = imgProductSlice;
export const { addImageBs64, removeImageBs64, removeAllImageBs64 } = actions;
export default reducer;