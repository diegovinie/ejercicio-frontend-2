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
 * @param {function} props.onDeleteEmployee Para eliminar un empleado.
 * @param {function} props.onEditEmployee Para editar un empleado.
 */
export default function TableBody (props) {

  /**
  * Lista de empleados a mostrar.
  * @const
  * @type {array}
  */
  const employeeslist = []

  /**
   * Filtra los datos para expresarlos en forma de moneda.
   *
   * @param {number} num El número a filtrar.
   * @return {string} El número con el formato.
   */
  const currency = (num) => {
    if (typeof num !== 'number') {
      num = Number.parseFloat(num)
    }

    return num.toLocaleString('es-MX', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })
  }

  /**
   * Expresa el valor en dólares.
   *
   * @param {number} num El número a cambiar.
   * @param {number} props.exchange El valor del cambio.
   * @return {number} El valor en dólares.
   */
  const dollar = (num) => {
    if (!props.usd) {
      return num
    }
    if (typeof num !== 'number') {
      num = Number.parseFloat(num)
    }
    return num / props.exchange
  }

  /**
   * Devuelve una clase (color del texto) dependiendo de su valor.
   *
   * @param {number} value
   * @return {string} El nombre de la clase.
   */
  const currencyStyle = (value) => {
    return value > 10000 ? 'text-rich' : 'text-poor'
  }

  /**
   * Actualiza cuando se está escribiendo en los campos.
   *
   * @listens event:onChange
   * @emits parent~event:onEditEmployee
   *
   * @param {number} id El id del empleado que se esta editando.
   * @param {string} key El campo que se está editando.
   * @param {object} ev El evento.
   * @param {string} ev.target.value El nuevo valor.
   */
  const handleChange = (id, key, ev) => {
    props.onEditEmployee(id, key, ev.target.value)
  }

  // Para pintar filas intercaladas. Se prefiere al uso de id porque
  // al borrar empleados se puede perder la continuidad par-impar
  let index = 1

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
        <tr key={employee.id} className={(index % 2 ? 'row-colored' : '')}>
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
          <td className={currencyStyle(employee.salary)}>
            <input
              className="mdl-textfield__input"
              type="text"
              onChange={(ev) => handleChange(employee.id, 'salary', ev)}
              value={employee.salary} />
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
        <tr key={employee.id} className={(index % 2 ? 'row-colored' : '')}>
          <td className="mdl-data-table__cell--non-numeric">
            {employee.name}
          </td>
          <td className="mdl-data-table__cell--non-numeric">
            {employee.company}
          </td>
          <td>
            {employee.age}
          </td>
          <td className={currencyStyle(employee.salary)}>
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
    index += 1
    employeeslist.push(tr)
  })

  return (
    <tbody>
      {employeeslist}
    </tbody>
  )
}
