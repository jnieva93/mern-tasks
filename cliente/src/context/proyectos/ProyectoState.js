import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import { AGREGAR_PROYECTO, FORMULARIO_PROYECTO, MOSTRAR_ERROR, OBTENER_PROYECTOS } from '../../types';

const hProyectos = [
  { id: 1, nombre: 'Tienda Virtual' },
  { id: 2, nombre: 'Intranet' },
  { id: 3, nombre: 'Diseño de Sitio Web' },
];

const ProyectoState = props => {
  const initialState = {
    errorForm: false,
    formulario: false,
    proyectos: []
  };

  const [state, dispatch] = useReducer(proyectoReducer, initialState);

  const mostrarFormulario = () => {
    dispatch({ type: FORMULARIO_PROYECTO });
  };

  // En un futuro se obtendrán de la Base de Datos
  const obtenerProyectos = () => {
    dispatch({ type: OBTENER_PROYECTOS, payload: hProyectos });
  };

  const agregarProyecto = proyecto => {
    const nuevoProyecto = {
      ...proyecto,
      id: uuidv4()
    };

    dispatch({ type: AGREGAR_PROYECTO, payload: nuevoProyecto });
  };

  const mostrarError = () => {
    dispatch({ type: MOSTRAR_ERROR });
  };

  return (
    <proyectoContext.Provider
      value={{
        errorForm: state.errorForm,
        formulario: state.formulario,
        proyectos: state.proyectos,
        agregarProyecto,
        mostrarError,
        mostrarFormulario,
        obtenerProyectos
      }}
    >
      {props.children}
    </proyectoContext.Provider>
  );
}

export default ProyectoState;
