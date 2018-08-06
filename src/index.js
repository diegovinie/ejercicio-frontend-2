/*
 * Entrypoint de la aplicación.
 *
 * Se amarra el componente raíz a la etiqueta root y se carga el
 * css de MDL.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import './main.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
