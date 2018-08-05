import React, { Component } from 'react'
import Instructions from './components/Instructions'
import DialogSimple from './components/DialogSimple'
import Theme from './components/Theme'

// import employees from './employees'

class App extends Component {
  render() {
    return (
      <div>
        <Theme>
          La tabla
        </Theme>
        <DialogSimple>
          <Instructions />
        </DialogSimple>
      </div>
    )
  }
}

export default App;
