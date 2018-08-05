import React from 'react'

export default function TableBody (props) {

  const employeeslist = []

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
