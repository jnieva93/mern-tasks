import React from 'react';
import Tarea from './Tarea';

const ListadoTareas = () => {
  const tareasProyecto = [
    { nombre: 'Elegir Plataforma', completa: true },
    { nombre: 'Elegir Colores', completa: false },
    { nombre: 'Elegir Plataformas de Pago', completa: false },
    { nombre: 'Elegir Hosting', completa: true }
  ];
  
  return (
    <>
      <h2>Proyecto: Tienda Virtual</h2>

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
