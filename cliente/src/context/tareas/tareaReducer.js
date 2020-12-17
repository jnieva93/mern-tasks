import {
  AGREGAR_TAREA,
  ELIMINAR_TAREA,
  ESTADO_TAREA,
  MOSTRAR_ERROR_TAREA,
  OBTENER_TAREAS,
  TAREA_ACTUAL
} from '../../types';

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
    case ELIMINAR_TAREA:
      return {
        ...state,
        tareas: state.tareas.filter(tarea => tarea.id !== action.payload)
      }
    case ESTADO_TAREA:
      return {
        ...state,
        tareas: state.tareas.map(
          tarea => tarea.id === action.payload.id ? action.payload : tarea
        )
      }
    case TAREA_ACTUAL:
      return {
        ...state,
        tareaSeleccionada: action.payload
      }
    default:
      return state;
  };
};

export default tareaReducer;
