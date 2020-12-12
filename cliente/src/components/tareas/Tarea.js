import React, { useContext } from 'react';
import ProyectoContext from '../../context/proyectos/proyectoContext';
import TareaContext from '../../context/tareas/tareaContext';

const Tarea = ({ tarea }) => {
  const proyectosContext = useContext(ProyectoContext);
  const tareasContext = useContext(TareaContext);

  const { proyecto } = proyectosContext;
  const { eliminarTarea, obtenerTareas } = tareasContext;

  const handleEliminar = tareaId => {
    eliminarTarea(tareaId);
    obtenerTareas(proyecto.id);
  };

  return (
    <li className='tarea sombra'>
      <p>{tarea.nombre}</p>
      
      <div className='estado'>
        {tarea.completa
          ? <button type='button' className='completo'>
              Completo
            </button>

          : <button type='button' className='incompleto'>
              Incompleto
            </button>
        }
      </div>

      <div className='acciones'>
        <button
          type='button'
          className='btn btn-primario'
        >
          Editar
        </button>

        <button
          type='button'
          className='btn btn-secundario'
          onClick={() => handleEliminar(tarea.id)}
        >
          Eliminar
        </button>
      </div>
    </li>
  );
}
 
export default Tarea;
