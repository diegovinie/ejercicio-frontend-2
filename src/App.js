/*
 * El componente raiz de la aplicación.
 *
 * Se definen las constantes globales, además de mostrar la estructura
 * general de los componentes.
 */

import React, { Component } from 'react'

// Se importan los componentes
import Instructions from './components/Instructions'
import DialogSimple from './components/DialogSimple'    // La ventana modal
import Theme from './components/Theme'
import TableContainer from './components/TableContainer'
// La parte central del ejercicio
import Table from './components/Table'

/**
 * Datos generales de identificación del proyecto que serán usados por
 * el tema.
 * @const @type {object} @default
 */
const themeDetails = {
  title: 'Ejercicio Frontend',
  repositoryURL: 'https://github.com/diegovinie/ejercicio-frontend-2',
  mailTo: 'mailto:diego.viniegra@gmail.com'
}

/**
 * Se define el componente raiz.
 *
 * @extends React.Component
 */
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
          {/* Las instrucciones del ejercicio */}
          <Instructions />
        </DialogSimple>
      </div>
    )
  }
}

export default App;
