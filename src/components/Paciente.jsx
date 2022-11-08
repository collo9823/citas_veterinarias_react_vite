import { useEffect } from "react";

export const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
    const {nombre, propietario, email, fecha, sintomas, id} = paciente;

    
    useEffect(()=>{
        console.log('El componente esta listo')
    }, [])



    const handleEliminar=()=>{
        // ()=>eliminarPaciente(id)

        const respuesta = confirm('Deseas eliminar este paciente?')
        if(respuesta){
            eliminarPaciente(id)
        }
    }

    return (   
    <div className="mx-5 my-8 bg-white shadow-md rounded-xl px-5 py-10">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''} 
            <span className="font-normal normal-case">{nombre}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''} 
            <span className="font-normal normal-case">{propietario}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''} 
            <span className="font-normal normal-case">{email}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha de alta: {''} 
            <span className="font-normal normal-case">{fecha}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {''} 
            <span className="font-normal normal-case">{sintomas}</span>
        </p>

        <div className="flex justify-between mt-7">
            <button
                type="button"
                className="py-2 px-10 bg-indigo-500 rounded-lg font-bold uppercase mx-2 hover:bg-indigo-600 text-white text-lg tracking-wide" 
                onClick={()=> setPaciente(paciente)}
            >Editar</button>

            <button type="button" className="py-2 px-10 bg-red-500 rounded-lg font-bold uppercase mx-2 hover:bg-red-600 text-white text-lg tracking-wide"
            onClick={handleEliminar}
            >Eliminar</button>

        </div>

    </div>
  )
}
