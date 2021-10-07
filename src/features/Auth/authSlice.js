import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({ 
    name: 'auth',
    initialState: {
        isLogin: false
    },
    reducers: { 
        setIsLogin: (state) => {
            return {
                ...state,
                isLogin: true,
            };
        },
        setIsLogout: (state) => {
            return {
                ...state,
                isLogin: false,
            };
        },
    },
})


const { reducer, actions } = authSlice;
export const { setIsLogin, setIsLogout } = actions;
export default reducer;