import React from 'react'

import '../../../css/components/Table.css'

import TableHead from './TableHead'
import TableBody from './TableBody'
import TableButtons from './TableButtons'
import PrettyButton from './PrettyButton'

export default class Table extends React.Component
{

  render () {

    return (
      <table id="employees_table" className="table_special mdl-data-table mdl-js-data-table mdl-shadow--2dp">
        <TableHead></TableHead>
        <TableBody></TableBody>
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
