import React, { useReducer } from 'react';
import TareaContext from './tareaContext';
import tareaReducer from './tareaReducer';
import { AGREGAR_TAREA, ELIMINAR_TAREA, MOSTRAR_ERROR_TAREA, OBTENER_TAREAS } from '../../types';

const TareaState = props => {
  const initialState = {
    tareas: [
      { id: 1, nombre: 'Elegir Plataforma', proyectoId: 1, completa: true },
      { id: 2, nombre: 'Elegir Colores', proyectoId: 2, completa: false },
      { id: 3, nombre: 'Elegir Plataformas de Pago', proyectoId: 3, completa: false },
      { id: 4, nombre: 'Elegir Hosting', proyectoId: 1, completa: true }
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

  const eliminarTarea = tareaId => {
    dispatch({ type: ELIMINAR_TAREA, payload: tareaId });
  };

  return (
    <TareaContext.Provider
      value={{
        errorTarea: state.errorTarea,
        tareas: state.tareas,
        tareasActuales: state.tareasActuales,
        agregarTarea,
        eliminarTarea,
        mostrarErrorTarea,
        obtenerTareas
      }}
    >
      {props.children}
    </TareaContext.Provider>
  );
}

export default TareaState;
