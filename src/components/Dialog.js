import React from 'react'

import '../../css/components/Dialog.css'

export default function Dialog (props) {
  let dialog

  if (props.active) {
    dialog = (
      <div className="modal-shell">
        <div  className="modal-cont mdl-shadow--2dp mld-grid">
          {props.children}
        </div>
      </div>
    )
  } else {
    dialog = null
  }

  return dialog
}
