import React from 'react'

/**
 * Componente del encabezado de la tabla.
 *
 * Originalmente para usar con Table.
 *
 * @param {object} props
 * @param {bool} props.usd Verdadero si los salarios están en dólares.
 * @param {bool} props.editable Verdadero si está en modo edición.
 */
export default function TableHead (props) {
  return (
    <thead>
      <tr>
        <th className="mdl-data-table__cell--non-numeric">Nombre</th>
        <th className="mdl-data-table__cell--non-numeric">Compañía</th>
        <th>Edad</th>
        <th>
          Salario <small>({props.usd && !props.editable ? 'USD$' : 'MXN$' })</small>
        </th>
        <th className="mdl-data-table__cell--non-numeric">Teléfono</th>
        <th className="mdl-data-table__cell--non-numeric">Correo</th>
        <th></th>
      </tr>
    </thead>
  )
}
