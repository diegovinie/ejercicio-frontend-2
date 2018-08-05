import React from 'react'

export default function (props) {
  return (
    <div id="app">
      <div className="demo-layout mdl-layout mdl-layout--fixed-header mdl-js-layout mdl-color--grey-100">
        <div className="demo-ribbon"></div>
        <main className="demo-main mdl-layout__content">
          <div className="demo-container mdl-grid">
            <div className="mdl-cell mdl-cell--1-col mdl-cell--hide-tablet mdl-cell--hide-phone"></div>
            <div className="demo-content mdl-color--white mdl-shadow--4dp content mdl-color-text--grey-800 mdl-cell mdl-cell--10-col">
              <h3>Ejercicio Frontend</h3>
              {/* Se inyecta la tabla de empleados */}
            </div>
            {props.children}
          </div>
          <footer className="demo-footer mdl-mini-footer">
            <div className="mdl-mini-footer--left-section">
              <ul className="mdl-mini-footer--link-list">
                  <li><a
                    href="https://github.com/diegovinie/ejercicio-frontend-2"
                    target="_blank"
                    >Repositorio</a></li>
                <li><a href="mailto:diego.viniegra@gmail.com">Diego Viniegra</a></li>
                <li>2018</li>
              </ul>
            </div>
          </footer>
        </main>
      </div>
    </div>
  )
}
