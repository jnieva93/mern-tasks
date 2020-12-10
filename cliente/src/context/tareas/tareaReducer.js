import { AGREGAR_TAREA, MOSTRAR_ERROR_TAREA, OBTENER_TAREAS } from "../../types";

const tareaReducer = (state, action) => {
  switch (action.type) {
    case OBTENER_TAREAS:
      return {
        ...state,
        tareasActuales: state.tareas.filter(tarea => tarea.proyectoId === action.payload)
      }
    case AGREGAR_TAREA:
      return {
        ...state,
        errorTarea: false,
        tareas: [...state.tareas, action.payload]
      }
    case MOSTRAR_ERROR_TAREA:
      return {
        ...state,
        errorTarea: true
      }
    default:
      return state;
  };
};

export default tareaReducer;
