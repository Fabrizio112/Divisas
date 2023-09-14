import { createSlice } from "@reduxjs/toolkit";

const initialCalculateState = {
    currencyFrom: "",
    currencyTo: "",
    amount: undefined
}

const calculateSlice = createSlice({
    name: "calculate",
    initialState: initialCalculateState,
    reducers: {
        changeCurrencyFrom: (state, action) => {
            state.currencyFrom = action.payload
        },
        changeCurrencyTo: (state, action) => {
            state.currencyTo = action.payload
        },
        changeAmount: (state, action) => {
            state.amount = action.payload
        }
    }
})

export const { changeCurrencyTo, changeCurrencyFrom, changeAmount } = calculateSlice.actions
export default calculateSlice.reducer