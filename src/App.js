import React, { Component } from 'react'
import Instructions from './components/Instructions'
import DialogSimple from './components/DialogSimple'
import Theme from './components/Theme'
import TableContainer from './components/TableContainer'
import Table from './components/Table'

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
        <Theme info={themeDetails} >
          <TableContainer>
            {/* SearchBar */}
            <Table></Table>
            {/* AddEmployee */}
          </TableContainer>
        </Theme>
        <DialogSimple>
          <Instructions />
        </DialogSimple>
      </div>
    )
  }
}

export default App;
