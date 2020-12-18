import React, { useContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ProyectoContext from '../../context/proyectos/proyectoContext';
import TareaContext from '../../context/tareas/tareaContext';

const tareaInicial = { nombre: '', estado: false };

const FormTarea = () => {
  const proyectosContext = useContext(ProyectoContext);
  const tareasContext = useContext(TareaContext);

  const { proyecto } = proyectosContext;
  const { errorTarea, tareaSeleccionada, actualizarTarea, agregarTarea, mostrarErrorTarea, obtenerTareas } = tareasContext;

  const [tarea, setTarea] = useState(tareaInicial);

  useEffect(() => {
    if (tareaSeleccionada !== null) {
      setTarea(tareaSeleccionada);
    } else {
      setTarea(tareaInicial);
    }
  }, [tareaSeleccionada]);

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

    if (tareaSeleccionada === null) {
      const tareaNueva = { ...tarea, proyectoId: proyecto.id, id: uuidv4() };
  
      agregarTarea(tareaNueva);
    } else {
      actualizarTarea(tarea);
    };

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
            value={ `${tareaSeleccionada ? 'Editar' : 'Agregar'} Tarea`}
          />
        </div>
      </form>

      {errorTarea && <p className='mensaje error'>El nombre de la tarea es obligatorio</p>}
    </div>
  );
}
 
export default FormTarea;
