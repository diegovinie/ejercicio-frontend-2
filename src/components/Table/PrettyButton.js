import React from 'react'

// Los estilos del botón
import '../../../css/components/PrettyButton.css'

/**
 * Componente para crear un botón dinámico.
 *
 * @param {object} props
 * @param {string} props.iconName Tipo de icono.
 * @param {function} props.callback Cuando el botón se activa.
 */
export default function PrettyButton (props) {

  /**
   * Ejecuta el callback.
   *
   * @listens event:onClick
   * @emits parent:callback
   *
   * @param {type} name description
   */

  const handleClick = (ev) => {
    props.callback(ev)
  }

  return (
    <button
      id={`btn-${props.iconName}`}
      type="button"
      className="custom-button"
      onClick={(ev) => handleClick(ev)}
      >
      <i className="material-icons">{props.iconName}</i>
      <div className="mdl-tooltip" data-mdl-for={`btn-${props.iconName}`}>
        {props.tooltip}
      </div>
    </button>
  )
}
