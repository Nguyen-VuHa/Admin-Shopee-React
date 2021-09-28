import React, { createContext, useReducer } from 'react';
export const ToastContext = createContext()

export const ToastContextProvider = (props) => {
    const notifications = [];
    // {
    //     id: uuidv4(),
    //     type: "SUCCESS",
    //     title: "Successfully fected data",
    //     message: "Successfully retrieved add posts"
    // },
    // {
    //     id: uuidv4(),
    //     type: "INFO",
    //     title: "Infomational title",
    //     message: "This is for your INFO"
    // },{
    //     id: uuidv4(),
    //     type: "WARNING",
    //     title: "WARNING title",
    //     message: "This is for your WARNING"
    // },{
    //     id: uuidv4(),
    //     type: "ERROR",
    //     title: "ERROR title",
    //     message: "This is for your ERROR"
    // }
    
    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case "ADD_NOTIFICATION":
                return [...state, action.payload];
            case "DELETE_NOTIFICATION":
                return state.filter((notification) => notification.id !== action.payload);
            default:
                return state;
        }
    }, notifications)

    return (
        <ToastContext.Provider value={{state, dispatch}}>
            { props.children }
        </ToastContext.Provider>
    )
}