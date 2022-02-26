import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: false,
};

export const booleanSlice = createSlice({
    name: 'boolean',
    initialState,
    reducers: {
        turnToTrue: (state) => {
           state.value = true;
        },
        turnToFalse: (state) => {
            state.value = false;
        }
    }
})

export const { turnToFalse, turnToTrue } = booleanSlice.actions;

export const selectValue = (state) => state.boolean.value;

export default booleanSlice.reducer;