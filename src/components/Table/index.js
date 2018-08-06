import React from 'react'

// Se cargan los estilos
import '../../../css/components/Table.css'

// Se importan los sub-componentes
import TableHead from './TableHead'
import TableBody from './TableBody'
import TableButtons from './TableButtons'
import PrettyButton from './PrettyButton'
import SearchBar from './SearchBar'

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

    this.updateFiltered = this.updateFiltered.bind(this)
    
    this.state = {
      employees,           // (array) Lista de los empleados
      filteredEmployees: employees
    }
  }

  updateFiltered (filteredList) {
    this.setState({filteredEmployees: filteredList})
  }

  render () {

    return (
      <div>
        <SearchBar
          data={this.state.employees}
          onSearchChange={this.updateFiltered} />
        <table id="employees_table" className="table_special mdl-data-table mdl-js-data-table mdl-shadow--2dp">
          <TableHead></TableHead>
          <TableBody data={this.state.filteredEmployees}></TableBody>
          <TableButtons>
            <PrettyButton>Editar</PrettyButton>
            <PrettyButton>Cambiar Moneda</PrettyButton>
            <PrettyButton>Imprimir</PrettyButton>
            <PrettyButton>Agregar</PrettyButton>
          </TableButtons>
        </table>
      </div>
    )
  }
}
