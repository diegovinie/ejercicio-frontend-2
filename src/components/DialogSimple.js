import React from 'react'
import '../../css/components/DialogSimple.css'

class DialogSimple extends React.Component
{
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      active: false
    }
  }

  componentDidMount () {

  }

  handleClick () {
    this.setState((prev, next) => ({active: !prev.active}))
  }

  render () {
    let display

    if (this.state.active) {
      display =
      <div className="modal-cont">
        {this.props.children}
      </div>
    }

    return (
      <div>
        <a className="btn-switch" onClick={this.handleClick}>Instrucciones</a>
        {display}
      </div>
    )
  }
}

export default DialogSimple
