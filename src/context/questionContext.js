import React, { createContext, useReducer } from 'react';
export const QuestionContext = createContext();

export const QuestionContextProvider = (props) => {
    const questionContent = {};
    
    const [state, dispatch] = useReducer((state, action) => {
         const { payload } = action;
        switch (action.type) {
            case "ADD_QUESTION":
                return {
                    type: payload.type,
                    question: payload.question,
                    messageWarning: payload.messageWarning,
                    status: payload.status,
                };
            case "REMOVE_QUESTION":
                return payload;
            default:
                return state;
        }
    }, questionContent)

    return (
        <QuestionContext.Provider value={{state, dispatch}}>
            { props.children }
        </QuestionContext.Provider>
    )
}