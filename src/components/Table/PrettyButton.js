import React from 'react'

export default function PrettyButton (props) {
  return (
    <button
      id="btn-edit"
      type="button"
      className="classButtons"
      >
      {props.children}
    </button>
  )
}
