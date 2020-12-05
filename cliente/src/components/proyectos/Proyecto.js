import React, { useContext } from 'react';
import ProyectoContext from '../../context/proyectos/proyectoContext';

const Proyecto = ({ proyecto }) => {
  const proyectosContext = useContext(ProyectoContext);

  const { seleccionarProyecto } = proyectosContext;
  
  return (
    <li>
      <button
        type='button'
        className='btn btn-blank'
        onClick={() => seleccionarProyecto(proyecto.id)}
      >
        {proyecto.nombre}
      </button>
    </li>
  );
}
 
export default Proyecto;
