import React from 'react'

import '../../../css/components/PrettyButton.css'

export default function PrettyButton (props) {

  const handleClick = (ev) => {
    console.log('callback')
    props.callback(ev)
  }

  return (
    <button
      id="btn-edit"
      type="button"
      className="custom-button"
      onClick={(ev) => handleClick(ev)}
      >
      <i className="material-icons">{props.children}</i>

    </button>
  )
}
