import React from 'react'
import { Paciente } from './Paciente'
// import { useEffect } from 'react'
export const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {

  // useEffect(()=>{
  //   console.log('nuevo paciente')
  // }, [pacientes])

  
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-auto" >

      {pacientes && pacientes.length ? (
        <>
        <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
      
        <p className="text-xl mt-5 mb-10 text-center">
          Administra {''}
          <span className="font-bold text-indigo-600">tus Pacientes y Citas</span>
        </p>

        {pacientes.map((paciente)=>{
          
          return(
            <Paciente 
            key={paciente.id}
            paciente= {paciente}
            setPaciente={setPaciente}
            eliminarPaciente={eliminarPaciente}
            />
            )
          })}

          </>

      ) : (
        <>
            <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
            
            <p className="text-xl mt-5 mb-10 text-center">
              Comienza agregando pacientes{' '}
              <span className="font-bold text-indigo-600">y aparecerán en este lugar</span>
            </p>
        </>
      )}
      


    </div>
  )
}
