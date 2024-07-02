import {createContext, useReducer } from "react";

export const themeContext = createContext();
const INITIAL_STATE = {darkMode : true};

const themeReducer = (state , action)=>{
    switch (action.type) {
        case "TOGGLE":
            return {darkMode: !state.darkMode};
        default:
            return state;
    }
}

export const ThemeProvider = ({children}) => {
    const [state , dispatch] = useReducer(themeReducer, INITIAL_STATE);
    return <themeContext.Provider value={{state,dispatch}}>{children}</themeContext.Provider>
};