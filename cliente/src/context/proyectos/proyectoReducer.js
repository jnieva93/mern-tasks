import { AGREGAR_PROYECTO, FORMULARIO_PROYECTO, MOSTRAR_ERROR, OBTENER_PROYECTOS } from '../../types';

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
    default:
      return state;
  };
};

export default proyectoReducer;
