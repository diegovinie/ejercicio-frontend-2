import React, { Component } from 'react'
import Instructions from './components/Instructions'
import DialogSimple from './components/DialogSimple'

// import employees from './employees'

class App extends Component {
  render() {
    return (
      <DialogSimple>
        <Instructions />
      </DialogSimple>
    )
  }
}

export default App;
