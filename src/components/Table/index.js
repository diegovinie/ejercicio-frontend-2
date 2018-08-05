import React from 'react'

import '../../../css/components/Table.css'

import TableHead from './TableHead'
import TableBody from './TableBody'
import TableButtons from './TableButtons'
import PrettyButton from './PrettyButton'

import employees from '../../employees'

export default class Table extends React.Component
{
  constructor (props) {
    super(props)
    this.state = {
      employees
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
