import React from 'react'

export default function TableBody (props) {
  return (
    <tbody>
      <tr>
        <td className="mdl-data-table__cell--non-numeric">Nombre</td>
        <td className="mdl-data-table__cell--non-numeric">Empresa</td>
        <td>Edad</td>
        <td>
          <span>Salario</span>
        </td>
        <td className="mdl-data-table__cell--non-numeric">Teléfono</td>
        <td className="mdl-data-table__cell--non-numeric">Correo</td>
      </tr>
    </tbody>
  )
}
