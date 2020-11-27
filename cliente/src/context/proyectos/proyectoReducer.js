import { FORMULARIO_PROYECTO } from "../../types";

const proyectoReducer = (state, action) => {
  switch (action.type) {
    case FORMULARIO_PROYECTO:
      return {
        ...state,
        formulario: true
      }
    default:
      return state;
  };
};

export default proyectoReducer;
