import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    alumnos: []
}

export const alumnitoSlice = createSlice({
    name: "listado",
    initialState,
    reducers:{
        crear: (state, action) => {
            state.alumnos.push(action.payload)
        },
        eliminar: (state, action) => {
            state.alumnos = state.alumnos.filter(
                alumno => alumno.id !== action.payload
            );
        },
        actualizar: (state, action) => {
            const alumno = state.alumnos.find(
                alumno => alumno.id === action.payload.id
            );

            if (alumno) {
                alumno.nombre = action.payload.nombre;
                alumno.edad = action.payload.edad;
                alumno.proyecto = action.payload.proyecto;
            }
        }
    } 
})

export const {crear, eliminar, actualizar} = alumnitoSlice.actions

export default alumnitoSlice.reducer;