import React, { Component } from 'react'
import Instructions from './components/Instructions'
import DialogSimple from './components/DialogSimple'
import Theme from './components/Theme'

const themeDetails = {
  title: 'Ejercicio Frontend',
  repositoryURL: 'https://github.com/diegovinie/ejercicio-frontend-2',
  mailTo: 'mailto:diego.viniegra@gmail.com'
}

// import employees from './employees'

class App extends Component {
  render() {
    return (
      <div>
        <Theme
          info={themeDetails}>
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
