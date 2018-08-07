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

    // Se amarran los métodos con la clase
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
    this.editEmployee = this.editEmployee.bind(this)
    this.printEmployees = this.printEmployees.bind(this)

    /**
     * El molde para crear un nuevo empleado.
     *
     * @var {object}
     */
    this.employePattern = {
      name: '',
      company: '',
      age: '',
      salary: '',
      phone: '',
      email: ''
    }

    this.state = {
      employees,                        // (array) Lista de los empleados
      filteredEmployees: employees,     // (array) Lista de empleados filtrados
      editable: false,                  // (bool) Controla el modo edición
      usd: false,                       // (bool) Controla la moneda de salarios
      exchange: 21.50,                  // (float) El tipo de cambio
      addDialog: false,                 // (bool) Controla el formulario AddEmployee
      newEmployee: this.employePattern  // (object) Es el molde del nuevo empleado
    }
  }

  /**
   * Actualiza la lista de empleados filtrados.
   *
   * @listens event:onSearchChange
   *
   * @param {array} filteredList La lista que llega de SearchBar.
   * @param {array} state.filteredList La lista filtrada en estado.
   */
  updateFiltered (filteredList) {
    this.setState({filteredEmployees: filteredList})
  }

  /**
   * Activa el modo edición.
   *
   * @listens PrettyButton#edit~event:callback
   */
  swapEditable () {
    this.setState((state) => {return {editable: !state.editable}})
  }

  /**
   * Cambia entre pesos mexicanos y dólares.
   *
   * @listens PrettyButton#currency~event:callback
   */
  swapCurrency () {
    this.setState((state) => {return {usd: !state.usd}})
  }

  /**
   * Elimina un empleado de la lista normal y filtrada.
   *
   * @listens event:onDeleteEmployee
   *
   * @param {number} id El id del empleado a eliminar.
   * @param {array} state.employees La lista de empleados.
   * @param {array} statte.filteredEmployees La lista de empleados filtrados.
   */
  deleteEmployee (id) {
    this.setState((state) => {
      let employees = state.employees.filter((item) => item.id !== id)
      let filteredEmployees = state.filteredEmployees.filter((item) => item.id !== id)

      return {employees, filteredEmployees}
    })
  }

  /**
   * Activa y desactiva el formulario de AddEmployee.
   *
   * @listens PrettyButton#add~event:callback
   */
  swapDialog () {
    this.setState((state) => {return {addDialog: !state.addDialog}})
  }

  /**
   * Actualiza el nuevo empleado conforme se va escribiendo.
   *
   * @listens event:onKeyChange
   *
   * @param {object} employee El nuevo empleado que llega del formulario.
   * @param {object} state.newEmployee Los datos del nuevo empleado en memoria.
   */
  keyChange (employee) {
    this.setState({newEmployee: employee})
  }

  /**
   * Guarda un nuevo empleado.
   *
   * @listens event:onFormSubmit
   *
   * @param {array} state.employees La lista de empleados.
   * @param {object} state.newEmployee Los campos del nuevo empleado.
   * @param {array} state.filteredEmployees Los empleados filtrados.
   */
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

  /**
   * Reinicia los campos de la variable newEmployee
   *
   * @param {obect} state.newEmployee
   * @param {object} this.employePattern El molde
   */
  clearNewEmployee () {
    this.setState({newEmployee: this.employePattern})
  }

  /**
   * Busca el póximo id para agregar un empleado
   *
   * @param {array} state.employees La lista de empleados.
   *
    @return {number} El próximo id.
   */
  getNextId () {
    return this.state.employees.reduce((acc, item) => {
        return item.id > acc.id ? item : acc
      }).id + 1
  }

  /**
   * Cierra AddEmployee y reinicia sus campos
   *
   * @listens event:onCancel
   */
  cancelAndReturn () {
    this.clearNewEmployee()
    this.swapDialog()
  }

  /**
   * Actualiza el estado cuando se está editando un empleado.
   *
   * @listens event:onEditEmployee
   *
   * @param {number} id El id del empleado editado.
   * @param {string} key El Campo del empleado editado.
   * @param {string} value El nuevo valor.
   * @param {array} state.employees La lista de empleados.
   */
  editEmployee (id, key, value) {
    this.setState((state) => {
      let updatedEmployees = state.employees.map((item) => {
        if (item.id === id) {
          item[key] = value
        }
        return item
      })
      return {employees: updatedEmployees}
    })
  }

  /**
   * Imprime el array de empleados en consola.
   *
   * @listens PrettyButton#print~event:callback
   *
   * @param {array} state.employees Los empleados.
   * @param {array} state.filteredEmployees Los empleados filtrados.
   */
  printEmployees () {
    let cloneFiltered = JSON.parse(JSON.stringify(this.state.filteredEmployees))
    let cloneEmployees = JSON.parse(JSON.stringify(this.state.employees))
    console.log('Empleados filtrados: ', cloneFiltered)
    console.log('Empleados totales: ', cloneEmployees)
  }

  render () {
    // Muestra el tipo de cambio
    let currencyTooltip =
    <span>
      Cambiar a  {(this.state.usd ? 'MXN$' : 'USD$')}
      <br />
      <small>
        {this.state.exchange} MXN$/USD$
      </small>
    </span>

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
            onEditEmployee={this.editEmployee}
            exchange={this.state.exchange} />
          <TableButtons>
            <PrettyButton
              callback={this.swapEditable}
              iconName="edit"
              tooltip="Editar los campos">Editar los Campos</PrettyButton>
            <PrettyButton
              callback={this.swapCurrency}
              iconName="attach_money"
              tooltip={currencyTooltip}
              >Cambiar Moneda</PrettyButton>
            <PrettyButton
              callback={this.printEmployees}
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
