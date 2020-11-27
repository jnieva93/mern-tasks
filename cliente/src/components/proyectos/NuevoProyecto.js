import React, { useContext, useState } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

const NuevoProyecto = () => {
  const [proyecto, setProyecto] = useState({ nombre: '' });

  const proyectosContext = useContext(proyectoContext);

  const { nombre } = proyecto;
  const { formulario, mostrarFormulario } = proyectosContext;

  const handleChangeProyecto = e => {
    setProyecto({
      ...proyecto,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmitProyecto = e => {
    e.preventDefault();
  };
  
  return (
    <>
      <button
        type='button'
        className='btn btn-block btn-primario'
        onClick={mostrarFormulario}
      >
        Nuevo Proyecto
      </button>

      {formulario &&
        <form className='formulario-nuevo-proyecto' onSubmit={handleSubmitProyecto}>
          <input
            type='text'
            className='input-text'
            placeholder='Nombre Proyecto'
            name='nombre'
            value={nombre}
            onChange={handleChangeProyecto}
          />

          <input
            type='submit'
            className='btn btn-primario btn-block'
            value='Agregar Proyecto'
          />
        </form>
      }
    </>
  );
}
 
export default NuevoProyecto;
