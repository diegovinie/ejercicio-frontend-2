import React from 'react'

// Se cargan los estilos
import '../../../css/components/Table.css'

// Se importan los sub-componentes
import TableHead from './TableHead'
import TableBody from './TableBody'
import TableButtons from './TableButtons'
import PrettyButton from './PrettyButton'
import SearchBar from './SearchBar'
import AddEmployee from './AddEmployee'
import Dialog from '../Dialog'

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
    this.swapEditable = this.swapEditable.bind(this)
    this.swapCurrency = this.swapCurrency.bind(this)
    this.deleteEmployee = this.deleteEmployee.bind(this)
    this.swapDialog = this.swapDialog.bind(this)
    this.keyChange = this.keyChange.bind(this)
    this.storeEmployee = this.storeEmployee.bind(this)
    this.getNextId = this.getNextId.bind(this)
    this.clearNewEmployee = this.clearNewEmployee.bind(this)
    this.cancelAndReturn = this.cancelAndReturn.bind(this)

    this.employePattern = {
      name: '',
      company: '',
      age: '',
      salary: '',
      phone: '',
      email: ''
    }

    this.state = {
      employees,           // (array) Lista de los empleados
      filteredEmployees: employees,
      editable: false,
      usd: false,
      exchange: 21.50,
      addDialog: false,
      newEmployee: this.employePattern
    }
  }

  updateFiltered (filteredList) {
    this.setState({filteredEmployees: filteredList})
  }

  swapEditable () {
    this.setState((state) => {return {editable: !state.editable}})
  }

  swapCurrency () {
    this.setState((state) => {return {usd: !state.usd}})
  }

  deleteEmployee (id) {
    this.setState((state) => {
      let employees = state.employees.filter((item) => item.id !== id)
      let filteredEmployees = state.filteredEmployees.filter((item) => item.id !== id)

      return {employees, filteredEmployees}
    })
  }

  swapDialog () {
    this.setState((state) => {return {addDialog: !state.addDialog}})
  }

  keyChange (employee) {
    this.setState({newEmployee: employee})
  }

  storeEmployee () {

    this.setState((state) => {
      return {
        employees: state.employees.concat(state.newEmployee)
      }
    })

    this.setState((state) => {return {filteredEmployees: state.employees}})
    this.clearNewEmployee()
    this.swapDialog()
  }

  clearNewEmployee () {
    this.setState({newEmployee: this.employePattern})
  }

  getNextId () {
    return this.state.employees.reduce((acc, item) => {
        return item.id > acc.id ? item : acc
      }).id + 1
  }

  cancelAndReturn () {
    this.clearNewEmployee()
    this.swapDialog()
  }

  render () {
    return (
      <div>
        <SearchBar
          data={this.state.employees}
          onSearchChange={this.updateFiltered} />
        <table id="employees_table" className="table_special mdl-data-table mdl-js-data-table mdl-shadow--2dp">
          <TableHead
            usd={this.state.usd}
            editable={this.state.editable} />
          <TableBody
            data={this.state.filteredEmployees}
            editable={this.state.editable}
            usd={this.state.usd}
            onDeleteEmployee={this.deleteEmployee}
            exchange={this.state.exchange} />
          <TableButtons>
            <PrettyButton
              callback={this.swapEditable}
              iconName="edit"
              tooltip="Editar los campos">Editar los Campos</PrettyButton>
            <PrettyButton
              callback={this.swapCurrency}
              iconName="attach_money"
              tooltip="Cambiar a">Cambiar Moneda</PrettyButton>
            <PrettyButton
              callback
              iconName="print"
              tooltip="Imprimir en consola">Imprimir Empleados</PrettyButton>
            <PrettyButton
              callback={this.swapDialog}
              iconName="add"
              tooltip="Agregar un nuevo empleado">Agregar Empleado</PrettyButton>
          </TableButtons>
        </table>
        <Dialog active={this.state.addDialog}>
          <AddEmployee
            employee={this.state.newEmployee}
            nextId={this.getNextId}
            onKeyChange={this.keyChange}
            onCancel={this.cancelAndReturn}
            onFormSubmit={this.storeEmployee} />
        </Dialog>
      </div>
    )
  }
}
