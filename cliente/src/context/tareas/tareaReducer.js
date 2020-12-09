import { OBTENER_TAREAS } from "../../types";

const tareaReducer = (state, action) => {
  switch (action.type) {
    case OBTENER_TAREAS:
      return {
        ...state,
        tareasActuales: state.tareas.filter(tarea => tarea.proyectoId === action.payload)
      }
    default:
      return state;
  };
};

export default tareaReducer;
