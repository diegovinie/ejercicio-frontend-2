import React from 'react'

/**
 * Componente contenedor de la tabla.
 *
 * @param {object} props
 * @param {string} props.children El slot. La tabla en sí.
 */
export default function TableContainer (props) {
  return (
    <div>
      {props.children}
    </div>
  )
}
