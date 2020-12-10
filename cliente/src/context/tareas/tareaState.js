import React, { useReducer } from 'react';
import TareaContext from './tareaContext';
import tareaReducer from './tareaReducer';
import { AGREGAR_TAREA, MOSTRAR_ERROR_TAREA, OBTENER_TAREAS } from '../../types';

const TareaState = props => {
  const initialState = {
    tareas: [
      { nombre: 'Elegir Plataforma', proyectoId: 1, completa: true },
      { nombre: 'Elegir Colores', proyectoId: 2, completa: false },
      { nombre: 'Elegir Plataformas de Pago', proyectoId: 3, completa: false },
      { nombre: 'Elegir Hosting', proyectoId: 1, completa: true }
    ],
    tareasActuales: null,
    errorTarea: false
  };

  const [state, dispatch] = useReducer(tareaReducer, initialState);

  const obtenerTareas = proyectoId => {
    dispatch({ type: OBTENER_TAREAS, payload: proyectoId });
  };

  const agregarTarea = tarea => {
    dispatch({ type: AGREGAR_TAREA, payload: tarea });
  };

  const mostrarErrorTarea = () => {
    dispatch({ type: MOSTRAR_ERROR_TAREA });
  };

  return (
    <TareaContext.Provider
      value={{
        errorTarea: state.errorTarea,
        tareas: state.tareas,
        tareasActuales: state.tareasActuales,
        agregarTarea,
        mostrarErrorTarea,
        obtenerTareas
      }}
    >
      {props.children}
    </TareaContext.Provider>
  );
}

export default TareaState;
