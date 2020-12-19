import React, { useContext, useEffect, useRef } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ProyectoContext from '../../context/proyectos/proyectoContext';
import Proyecto from './Proyecto';

const ProyectosConTransicion = ({ listaProyectos }) => {
  const nodeRef = useRef(null);
  
  return (
    <TransitionGroup>
      {listaProyectos.map(proyecto => (
        <CSSTransition
          key={proyecto.id}
          nodeRef={nodeRef}
          timeout={200}
          classNames='proyecto'
        >
          <div ref={nodeRef}>
            <Proyecto proyecto={proyecto} />
          </div>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

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
      <ProyectosConTransicion listaProyectos={proyectos} />
    </ul>
  );
}
 
export default ListadoProyectos;
