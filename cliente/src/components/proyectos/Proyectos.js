import React from 'react';
import BarraHeader from '../layout/BarraHeader';
import Sidebar from '../layout/SideBar';
import FormTarea from '../tareas/FormTarea';
import ListadoTareas from '../tareas/ListadoTareas';

const Proyectos = () => {
  return (
    <div className='contenedor-app'>
      <Sidebar />

      <div className='seccion-principal'>
        <BarraHeader />
        
        <main>
          <FormTarea />
          
          <div className='contenedor-tareas'>
            <ListadoTareas />
          </div>
        </main>
      </div>
    </div>
  );
}
 
export default Proyectos;
