import React, { useReducer } from 'react';
import TareaContext from './tareaContext';
import tareaReducer from './tareaReducer';
import { OBTENER_TAREAS } from '../../types';

const TareaState = props => {
  const initialState = {
    tareas: [
      { nombre: 'Elegir Plataforma', proyectoId: 1, completa: true },
      { nombre: 'Elegir Colores', proyectoId: 2, completa: false },
      { nombre: 'Elegir Plataformas de Pago', proyectoId: 3, completa: false },
      { nombre: 'Elegir Hosting', proyectoId: 1, completa: true }
    ],
    tareasActuales: null
  };

  const [state, dispatch] = useReducer(tareaReducer, initialState);

  const obtenerTareas = proyectoId => {
    dispatch({ type: OBTENER_TAREAS, payload: proyectoId });
  };

  return (
    <TareaContext.Provider
      value={{
        tareas: state.tareas,
        tareasActuales: state.tareasActuales,
        obtenerTareas
      }}
    >
      {props.children}
    </TareaContext.Provider>
  );
}

export default TareaState;
