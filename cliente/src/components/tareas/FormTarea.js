import React, { useContext, useState } from 'react';
import ProyectoContext from '../../context/proyectos/proyectoContext';
import TareaContext from '../../context/tareas/tareaContext';

const tareaInicial = { nombre: '', estado: false };

const FormTarea = () => {
  const proyectosContext = useContext(ProyectoContext);
  const tareasContext = useContext(TareaContext);

  const { proyecto } = proyectosContext;
  const { errorTarea, agregarTarea, mostrarErrorTarea, obtenerTareas } = tareasContext;

  const [tarea, setTarea] = useState(tareaInicial);

  const { nombre } = tarea;

  const handleChange = e => {
    setTarea({
      ...tarea,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (nombre.trim() === '') {
      mostrarErrorTarea();
      return;
    };

    const tareaNueva = { ...tarea, proyectoId: proyecto.id };

    agregarTarea(tareaNueva);
    obtenerTareas(proyecto.id);
    setTarea(tareaInicial);
  };

  if (!proyecto) return null;
  
  return (
    <div className='formulario'>
      <form
        onSubmit={handleSubmit}
      >
        <div className='contenedor-input'>
          <input
            type='text'
            className='input-text'
            placeholder='Nombre Tarea...'
            name='nombre'
            value={nombre}
            onChange={handleChange}
          />
        </div>

        <div className='contenedor-input'>
          <input
            type='submit'
            className='btn btn-primario btn-submit btn-block'
            value='Agregar Tarea'
          />
        </div>
      </form>

      {errorTarea && <p className='mensaje error'>El nombre de la tarea es obligatorio</p>}
    </div>
  );
}
 
export default FormTarea;
