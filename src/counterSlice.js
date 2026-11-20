import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
}

export const counterSlice = createSlice({
    //El nombre del action y del slice
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value +=1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        reset: (state) => {
            state.value = 0;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        }
    },
});

//Estas son las actions (disparan las acciones en el Slice)
export const {increment, decrement, reset, incrementByAmount} = counterSlice.actions

//este es el reducer (el que se exporta en nuestro store)
export default counterSlice.reducer;
