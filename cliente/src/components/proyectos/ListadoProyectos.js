import React, { useContext, useEffect } from 'react';
import ProyectoContext from '../../context/proyectos/proyectoContext';
import Proyecto from './Proyecto';

const ListadoProyectos = () => {
  const proyectosContext = useContext(ProyectoContext);

  const { proyectos, obtenerProyectos } = proyectosContext;

  useEffect(() => {
    obtenerProyectos();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (proyectos.length === 0) return <p>No hay proyectos. Comienza creando uno</p>;
  
  return (
    <ul className='listado-proyectos'>
      {proyectos.map(proyecto => (
        <Proyecto key={proyecto.id} proyecto={proyecto} />
      ))}
    </ul>
  );
}
 
export default ListadoProyectos;
