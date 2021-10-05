import { createSlice } from "@reduxjs/toolkit";

var initialState = [];

const modalSlice = createSlice({ 
    name: 'choose-products',
    initialState,
    reducers: { 
        setAllProduct: (state, action) => {
            state = [];
            return  state.concat(action.payload);
        },
        removeOneProduct: (state, action) => {
            return state.filter(id => id !== action.payload);
        },
        removeAll: (state) => {
            state = [];
            return state;
        }
    },
})

const { reducer, actions } = modalSlice;
export const { setAllProduct, removeOneProduct, removeAll }  = actions;
export default reducer;
