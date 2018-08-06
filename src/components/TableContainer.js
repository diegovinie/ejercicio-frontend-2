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
      <div className="mdl-textfield mdl-js-textfield">
        {props.children}
      </div>
    </div>
  )
}
