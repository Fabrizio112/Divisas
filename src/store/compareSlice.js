import { createSlice } from "@reduxjs/toolkit";

const initialCompareState = ""

const compareSlice = createSlice({
    name: "compare",
    initialState: initialCompareState,
    reducers: {
        changeCompareState: (state, action) => {
            return state = action.payload
        }
    }
})

export const { changeCompareState } = compareSlice.actions
export default compareSlice.reducer