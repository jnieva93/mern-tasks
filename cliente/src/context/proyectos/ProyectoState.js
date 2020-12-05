import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ProyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import { AGREGAR_PROYECTO, ELIMINAR_PROYECTO, FORMULARIO_PROYECTO, MOSTRAR_ERROR, OBTENER_PROYECTOS, SELECCIONAR_PROYECTO } from '../../types';

const hProyectos = [
  { id: 1, nombre: 'Tienda Virtual' },
  { id: 2, nombre: 'Intranet' },
  { id: 3, nombre: 'Diseño de Sitio Web' },
];

const ProyectoState = props => {
  const initialState = {
    errorForm: false,
    formulario: false,
    proyecto: null,
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

  const seleccionarProyecto = proyectoId => {
    dispatch({ type: SELECCIONAR_PROYECTO, payload: proyectoId });
  };

  const eliminarProyecto = proyectoId => {
    dispatch({ type: ELIMINAR_PROYECTO, payload: proyectoId });
  };

  return (
    <ProyectoContext.Provider
      value={{
        errorForm: state.errorForm,
        formulario: state.formulario,
        proyecto: state.proyecto,
        proyectos: state.proyectos,
        agregarProyecto,
        eliminarProyecto,
        mostrarError,
        mostrarFormulario,
        obtenerProyectos,
        seleccionarProyecto
      }}
    >
      {props.children}
    </ProyectoContext.Provider>
  );
}

export default ProyectoState;
