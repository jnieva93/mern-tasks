import React, { useReducer } from 'react';
import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import { FORMULARIO_PROYECTO, OBTENER_PROYECTOS } from '../../types';

const hProyectos = [
  { id: 1, nombre: 'Tienda Virtual' },
  { id: 2, nombre: 'Intranet' },
  { id: 3, nombre: 'Diseño de Sitio Web' },
];

const ProyectoState = props => {
  const initialState = {
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

  return (
    <proyectoContext.Provider
      value={{
        formulario: state.formulario,
        proyectos: state.proyectos,
        mostrarFormulario,
        obtenerProyectos
      }}
    >
      {props.children}
    </proyectoContext.Provider>
  );
}

export default ProyectoState;
