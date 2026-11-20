import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counterSlice.js'
import alumnitosReducer from "./alumnitoSlice.js";

//Guardamos el estado guardado en el slice
export const store = configureStore({
    reducer: {
        counter: counterReducer,
        listado: alumnitosReducer,
    },
});