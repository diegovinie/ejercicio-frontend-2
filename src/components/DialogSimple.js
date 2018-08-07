import React from 'react'

// Se cargan los estilos
import '../../css/components/DialogSimple.css'

/**
 * Componente para desplegar ventana de diálogo lateral.
 *
 * @extends React.Component
 */
export default class DialogSimple extends React.Component
{
  /**
   * Constructor, inicializa el estado.
   *
   * @param {mixed} props La información a mostrar.
   * @param {string} props.children El slot.
   */
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    /* Estado de la aplicación */
    this.state = {
      active: false           // (bool) Controla si se muestra la ventana
    }
  }

  // Sin utilidad de momento
  componentDidMount () {

  }

  /**
   * Cambia el estado de state.active .
   *
   * @listens event:click El botón instrucciones
   * @fires this.setState Cambia el valor de state.active
   */
  handleClick () {
    this.setState((prev, next) => ({active: !prev.active}))
  }

  render () {
    let display

    if (this.state.active) {
      // Si está activa pasa los hijos por el diálogo
      display =
      <div className="modal-simple-cont">
        {this.props.children}
      </div>
    } else {
      // Si no devuelve null
      display = null
    }

    return (
      <div>
        <a className="modal-simple-btn" onClick={this.handleClick}>Instrucciones</a>
        {display}
      </div>
    )
  }
}
