import { AGREGAR_PROYECTO, ELIMINAR_PROYECTO, FORMULARIO_PROYECTO, MOSTRAR_ERROR, OBTENER_PROYECTOS, SELECCIONAR_PROYECTO } from '../../types';

const proyectoReducer = (state, action) => {
  switch (action.type) {
    case FORMULARIO_PROYECTO:
      return {
        ...state,
        formulario: true
      }
    case OBTENER_PROYECTOS:
      return {
        ...state,
        proyectos: action.payload
      }
    case AGREGAR_PROYECTO:
      return {
        ...state,
        errorForm: false,
        formulario: false,
        proyectos: [...state.proyectos, action.payload]
      }
    case MOSTRAR_ERROR:
      return {
        ...state,
        errorForm: true
      }
    case SELECCIONAR_PROYECTO:
      return {
        ...state,
        proyecto: state.proyectos.find(proyecto => proyecto.id === action.payload)
      }
    case ELIMINAR_PROYECTO:
      return {
        ...state,
        proyectos: state.proyectos.filter(proyecto => proyecto.id !== action.payload),
        proyecto: null
      }
    default:
      return state;
  };
};

export default proyectoReducer;
