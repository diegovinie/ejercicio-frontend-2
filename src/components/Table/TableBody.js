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
 * @param {bool} props.editable Si es modo edición.
 * @param {bool} props.usd
 * @param {number} props.exchange
 * @param {function} props.onDeleteEmployee
 */
export default function TableBody (props) {

  /**
  * Lista de empleados a mostrar.
  * @const
  * @type {array}
  */
  const employeeslist = []

  const currency = (num) => {
    if (typeof num !== 'number') {
      num = Number.parseFloat(num)
    }

    return num.toLocaleString('es-MX', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })
  }

  const dollar = (num) => {
    if (!props.usd) {
      return num
    }
    if (typeof num !== 'number') {
      num = Number.parseFloat(num)
    }
    return num / props.exchange
  }

  const currenyStyle = (value) => {
    return value > 10000 ? 'text-rich' : 'text-poor'
  }

  const handleChange = (id, key, ev) => {
    props.onEditEmployee(id, key, ev.target.value)
  }

  // Recorre el array creando una fila por cada empleado
  props.data.forEach((employee) => {
    let tr
    let deleteEmployee = (
      <td>
        <a
          href
          onClick={(ev) => {
            ev.preventDefault()
            return props.onDeleteEmployee(employee.id)
          }} >
          <span className="material-icons">delete</span>
        </a>
      </td>
    )

    if (props.editable) {
      tr = (
        <tr key={employee.id}>
          <td className="custom_text_input">
            <input
              className="mdl-textfield__input"
              type="text"
              onChange={(ev) => handleChange(employee.id, 'name', ev)}
              value={employee.name} />
          </td>
          <td className="custom_text_input">
            <input
              className="mdl-textfield__input"
              type="text"
              value={employee.company}
              readOnly />
          </td>
          <td>
            <input
              className="mdl-textfield__input"
              type="text"
              onChange={(ev) => handleChange(employee.id, 'age', ev)}
              value={employee.age} />
          </td>
          <td className={currenyStyle(employee.salary)}>
            <input
              className="mdl-textfield__input"
              type="text"
              onChange={(ev) => handleChange(employee.id, 'salary', ev)}
              value={currency(dollar(employee.salary))} />
          </td>
          <td className="custom_text_input">
            <input
              className="mdl-textfield__input"
              type="text"
              onChange={(ev) => handleChange(employee.id, 'phone', ev)}
              value={employee.phone} />
          </td>
          <td className="custom_text_input">
            <input
              className="mdl-textfield__input"
              type="email"
              onChange={(ev) => handleChange(employee.id, 'email', ev)}
              value={employee.email} />
          </td>
          {deleteEmployee}
        </tr>
      )
    } else {
      tr = (
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
          <td className={currenyStyle(employee.salary)}>
            <span>{currency(dollar(employee.salary))}</span>
          </td>
          <td className="mdl-data-table__cell--non-numeric">
            {employee.phone}
          </td>
          <td className="mdl-data-table__cell--non-numeric">
            {employee.email}
          </td>
          {deleteEmployee}
        </tr>
      )
    }

    employeeslist.push(tr)
  })

  return (
    <tbody>
      {employeeslist}
    </tbody>
  )
}
