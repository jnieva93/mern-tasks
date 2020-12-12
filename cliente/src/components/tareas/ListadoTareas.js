import React, { useContext } from 'react';
import ProyectoContext from '../../context/proyectos/proyectoContext';
import TareaContext from '../../context/tareas/tareaContext';
import Tarea from './Tarea';

const ListadoTareas = () => {
  const proyectosContext = useContext(ProyectoContext);
  const tareasContext = useContext(TareaContext);

  const { proyecto, eliminarProyecto } = proyectosContext;
  const { tareasActuales } = tareasContext;

  if (!proyecto) return <h2>Selecciona un Proyecto</h2>;
  
  return (
    <>
      <h2>Proyecto: {proyecto.nombre}</h2>

      <ul className='listado-tareas'>
        {tareasActuales.length === 0
          ? <li className='tarea'><p>No hay tareas</p></li>
          
          : tareasActuales.map(tarea => (
              <Tarea key={tarea.id} tarea={tarea} />
            ))
        }
      </ul>

      <button
        type='button'
        className='btn btn-eliminar'
        onClick={() => eliminarProyecto(proyecto.id)}
      >
        Eliminar Proyecto &times;
      </button>
    </>
  );
}
 
export default ListadoTareas;
