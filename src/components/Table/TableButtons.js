import React from 'react'

export default function TableButtons (props) {
  return (
    <tfoot>
      <tr>
        <td colSpan="6">
          {props.children}
        </td>
      </tr>
    </tfoot>
  )
}
