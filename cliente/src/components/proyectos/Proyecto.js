import React, { useContext } from 'react';
import ProyectoContext from '../../context/proyectos/proyectoContext';
import TareaContext from '../../context/tareas/tareaContext';

const Proyecto = ({ proyecto }) => {
  const proyectosContext = useContext(ProyectoContext);
  const tareasContext = useContext(TareaContext);

  const { seleccionarProyecto } = proyectosContext;
  const { obtenerTareas } = tareasContext;

  const handleClickProyecto = id => {
    seleccionarProyecto(id);
    obtenerTareas(id);
  };
  
  return (
    <li>
      <button
        type='button'
        className='btn btn-blank'
        onClick={() => handleClickProyecto(proyecto.id)}
      >
        {proyecto.nombre}
      </button>
    </li>
  );
}
 
export default Proyecto;
