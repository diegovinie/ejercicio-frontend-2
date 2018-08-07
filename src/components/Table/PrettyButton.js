import React from 'react'

import '../../../css/components/PrettyButton.css'

export default function PrettyButton (props) {

  const handleClick = (ev) => {
    console.log('callback')
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
