import React from 'react'

/**
 * El cuerpo de la tabla de empleados.
 *
 * Originalmente para ser usado con Table. Es el lugar para mostrar las
 * características de los empleados, donde altenarán campos normales
 * y editables.
 *
 * @param {object} props
 * @param {array} props.data La lista de empleados.
 */
export default function TableBody (props) {

  /**
  * Lista de empleados a mostrar.
  * @const
  * @type {array}
  */
  const employeeslist = []

  // Recorre el array creando una fila por cada empleado
  props.data.forEach((employee) => {
    let tr =
          <tr key={employee.id}>
            <td className="mdl-data-table__cell--non-numeric">
              {employee.name}
            </td>
            <td className="mdl-data-table__cell--non-numeric">
              {employee.company}
            </td>
            <td>
              {employee.age}
            </td>
            <td>
              <span>{employee.salary}</span>
            </td>
            <td className="mdl-data-table__cell--non-numeric">
              {employee.phone}
            </td>
            <td className="mdl-data-table__cell--non-numeric">
              {employee.email}
            </td>
          </tr>

    employeeslist.push(tr)
  })

  return (
    <tbody>
      {employeeslist}
    </tbody>
  )
}
