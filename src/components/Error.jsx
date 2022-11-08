import React from 'react'

export const Error = ({mensaje}) => {
  return (
        <div className="bg-red-300 border-4 rounded-lg border-red-600 p-4 font-bold text-center text-lg uppercase mb-5">
            <p>{mensaje}</p>
          </div>
    )
}
