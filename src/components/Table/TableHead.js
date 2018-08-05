import React from 'react'

export default function TableHead (props) {
  return (
    <thead>
      <tr>
        <th className="mdl-data-table__cell--non-numeric">Nombre</th>
        <th className="mdl-data-table__cell--non-numeric">Compañía</th>
        <th>Edad</th>
        <th>
          Salario <small>{/* ({{ usd && !editable ? 'USD$' : 'MXN$' }}) */}</small>
        </th>
        <th className="mdl-data-table__cell--non-numeric">Teléfono</th>
        <th className="mdl-data-table__cell--non-numeric">Correo</th>
        <th></th>
      </tr>
    </thead>
  )
}
