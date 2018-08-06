import React from 'react'

export default function PrettyButton (props) {

  const handleClick = (ev) => {
    console.log('callback')
    props.callback(ev)
  }

  return (
    <button
      id="btn-edit"
      type="button"
      className="classButtons"
      onClick={(ev) => handleClick(ev)}
      >
      {props.children}
    </button>
  )
}
