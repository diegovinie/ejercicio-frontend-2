import React from 'react'

// Se cargan los estilos
import '../../../css/components/Table.css'

// Se importan los sub-componentes
import TableHead from './TableHead'
import TableBody from './TableBody'
import TableButtons from './TableButtons'
import PrettyButton from './PrettyButton'

// Se importan los datos de los empleados
import employees from '../../employees'

/**
 * El componente donde se encuentra la gestión de los empleados.
 *
 * Maneja varios sub-componentes que se comunican padre-hijo y el
 * estado lo mantiene esta clase.
 *
 * @extends React.Component
 */
export default class Table extends React.Component
{
  /**
   * Constructor.

   * Se inicializa el estado.
   *
   * @param {mixed} props
   */
  constructor (props) {
    // Llama al constructor de React.Component
    super(props)
    this.state = {
      employees           // (array) Lista de los empleados
    }
  }

  render () {

    return (
      <table id="employees_table" className="table_special mdl-data-table mdl-js-data-table mdl-shadow--2dp">
        <TableHead></TableHead>
        <TableBody data={employees}></TableBody>
        <TableButtons>
          <PrettyButton>Editar</PrettyButton>
          <PrettyButton>Cambiar Moneda</PrettyButton>
          <PrettyButton>Imprimir</PrettyButton>
          <PrettyButton>Agregar</PrettyButton>
        </TableButtons>
    </table>
    )
  }
}
