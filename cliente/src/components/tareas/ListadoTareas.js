import React, { useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import Tarea from './Tarea';

const ListadoTareas = () => {
  const tareasProyecto = [
    { nombre: 'Elegir Plataforma', completa: true },
    { nombre: 'Elegir Colores', completa: false },
    { nombre: 'Elegir Plataformas de Pago', completa: false },
    { nombre: 'Elegir Hosting', completa: true }
  ];

  const proyectosContext = useContext(proyectoContext);

  const { proyecto } = proyectosContext;

  if (!proyecto) return <h2>Selecciona un Proyecto</h2>;
  
  return (
    <>
      <h2>Proyecto: {proyecto.nombre}</h2>

      <ul className='listado-tareas'>
        {tareasProyecto.length === 0
          ? <li className='tarea'><p>No hay tareas</p></li>
          
          : tareasProyecto.map(tarea => (
              <Tarea tarea={tarea} />
            ))
        }
      </ul>

      <button
        type='button'
        className='btn btn-eliminar'
      >
        Eliminar Proyecto &times;
      </button>
    </>
  );
}
 
export default ListadoTareas;
