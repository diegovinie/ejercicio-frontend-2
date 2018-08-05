import React from 'react'

export default function TableContainer (props) {
  return (
    <div>
      <div className="mdl-textfield mdl-js-textfield">
        {props.children}
      </div>
    </div>
  )
}
