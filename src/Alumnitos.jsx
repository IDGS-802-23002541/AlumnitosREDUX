import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import {crear, eliminar, actualizar} from './alumnitoSlice';
import { useState } from "react";


export default function Alumnitos(){
    const dispatch = useDispatch();
    const alumnitos = useSelector(state => state.listado.alumnos);
    const [nombre, setNombre] = useState("")
    const [edad, setEdad] = useState(0)
    const [proyecto, setProyecto] = useState("")
    const [alumnoEditando, setAlumnoEditando] = useState(null);
    const limpiarFormulario = () => {
        setNombre("");
        setEdad("");
        setProyecto("");
    };

    const seleccionarAlumnito = (alumno) => {
        setNombre(alumno.nombre);
        setEdad(alumno.edad);
        setProyecto(alumno.proyecto);
        setAlumnoEditando(alumno.id);
    };

    const agregarAlumnito = () => {
        if(!nombre || !edad || !proyecto){
            alert("Por favor, complete todos los campos antes de agregar un alumnito.");
            return;
        }
        dispatch(crear({
            id: nanoid(),
            nombre: nombre,
            edad: edad,
            proyecto: proyecto
        }))
        limpiarFormulario();
    }

    const actualizarAlumnito = () => {
        dispatch(actualizar({
            id: alumnoEditando,
            nombre: nombre,
            edad: edad,
            proyecto: proyecto
        }))
        limpiarFormulario();
        setAlumnoEditando(null);
    }

    const eliminarAlumnito = (id) => {
        dispatch(eliminar(id))
    }
    return (
        <div className="card">
            <h1>Listado de alumnitos en IDGS1002</h1>

            <div>
                <input
                    type="text"
                    placeholder="Nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                ></input>
                <input
                    type="number"
                    placeholder="Edad"
                    value={edad}
                    onChange={(e) => setEdad(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Proyecto"
                    value={proyecto}
                    onChange={(e) => setProyecto(e.target.value)}
                ></input>
            </div>
            {
                alumnoEditando === null ? (
                    <div className="rows">
                        <button onClick={agregarAlumnito}>Agregar alumnito</button>
                    </div>
                ) : (
                    <></>
                )
            }
            
            {alumnitos.map((alumno) => (
                <div key={alumno.id}>
                    <h3>{alumno.nombre}</h3>
                    <p>Edad: {alumno.edad}</p>
                    <p>Proyecto: {alumno.proyecto}</p>
                    <div className="cols">
                        {alumnoEditando === null ? (
                            <button onClick={() => seleccionarAlumnito(alumno)}>
                                Seleccionar
                            </button>
                        ) : (
                            <button onClick={actualizarAlumnito}>
                                Guardar cambios
                            </button>
                        )}
                    </div>
                    <button onClick={() => eliminarAlumnito(alumno.id)}>Eliminar</button>
                </div>
            ))}
        </div>
    )
}