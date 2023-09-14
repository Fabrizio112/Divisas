import { configureStore } from "@reduxjs/toolkit";
import calculateReducer from "./calculateSlice"
import compareReducer from "./compareSlice"


export const store = configureStore({
    reducer: {
        calculate: calculateReducer,
        compare: compareReducer
    }
})