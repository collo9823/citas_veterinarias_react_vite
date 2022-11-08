import React, { useState, useEffect } from 'react';
import { Error } from './Error';

export const Formulario = ({pacientes ,setPacientes, paciente, setPaciente}) => {


  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState(false)
  

  useEffect(()=>{
    if(Object.keys(paciente).length>0){
      console.log(paciente)
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    }
  }, [paciente])



  const generarId=()=>{
    const rand = Math.random().toString(35).substr(2);
    const fecha = Date.now().toString(35)
    return rand + fecha
  }

  const handleSubmit=(event)=>{
    event.preventDefault();
    // Validación de formulario
    if([nombre, propietario, email, fecha, sintomas].includes('')){
      setError(true)
      return
    }else{
      setError(false)
    }

    //Objeto Paciente
    const objPAciente = {
      nombre,
      propietario, 
      email, 
      fecha, 
      sintomas,
    }

    if(paciente.id){  
      //Editando el registro
      objPAciente.id = paciente.id

      const pacientesActualizados = pacientes.map(pacienteState=> pacienteState.id === paciente.id ? objPAciente : pacienteState)
      console.log('Editando')

      setPacientes(pacientesActualizados)
      setPaciente({})
    }else{
      //Nuevo registro
      console.log('nuevo registro')
      objPAciente.id = generarId()

      setPacientes([objPAciente, ...pacientes ])
    }

    

    //Reiniciar el form
    setNombre('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintomas('')
  
  }


  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
          Añade Pacientes y {''}
          <span className="text-indigo-600  font-bold">Administralos</span>
      </p>

      <form
      onSubmit={handleSubmit} 
      className="bg-white shadow-xl rounded-lg py-10 px-5 mb-10">
      {
        error && <Error
        mensaje='Todos los campos son obligatorios'
        />
      }

        <div className="mb-5">
          <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold" >Nombre Mascota:  {nombre}</label>
          <input 
          id="mascota"
          type="text"
          placeholder='Nombre de la mascota'
          className="border-2 w-full p-2 mt-2 placeholder-teal-500 rounded-md bg-slate-200  font-semibold text-teal-700" 
          value={nombre}
          onChange={(event)=>(
            setNombre(event.target.value))}
          />
        </div>
        
        <div>
          <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold" >Nombre Propietario:  {propietario}</label>
          <input 
          id="propietario"
          type="text"
          placeholder='Nombre del Propietario'
          className="border-2 w-full p-2 mt-2 placeholder-teal-500 rounded-md bg-slate-200 font-semibold text-teal-700"
          value={propietario}
          onChange={(event)=>setPropietario(event.target.value)}
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold" >Email:  {email}</label>
          <input
          onChange={(event)=>setEmail(event.target.value)} 
          id="email"
          type="email"
          placeholder='Email del Propietario'
          value={email}
          className="border-2 w-full p-2 mt-2 placeholder-teal-500 rounded-md bg-slate-200 font-semibold text-teal-700"
          />
        </div>
        
        <div>
          <label htmlFor="alta" className="block text-gray-700 uppercase font-bold" >Alta:  {fecha}</label>
          <input
          onChange={(event)=>setFecha(event.target.value)} 
          id="alta"
          type="date"
          value={fecha}
          className="border-2 w-full p-2 mt-2 placeholder-teal-500 rounded-md bg-slate-200 font-semibold text-teal-500"
          />
        </div>
        
        <div>
          <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold" >Síntomas:  {sintomas}</label>
          < textarea 
          onChange={(event)=>setSintomas(event.target.value)}
          value={sintomas}
          id="sintomas"  className="border-2 w-full p-2 mt-2 placeholder-teal-500 rounded-md bg-slate-200 font-semibold text-teal-700" placeholder='Describe los síntomas'/>
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-black text-xl tracking-wide rounded-md shadow-slate-500 shadow-lg hover:bg-indigo-700 cursor-pointer transition-colors"
          value={ paciente.id ? 'Editar paciente' : 'Agregar paciente'}
        />
      </form>
    </div>
  )
}
