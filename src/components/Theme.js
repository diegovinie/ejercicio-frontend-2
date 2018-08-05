import React from 'react'

import Footer from './Footer'

export default function Theme (props) {
  return (
    <div id="app">
      <div className="demo-layout mdl-layout mdl-layout--fixed-header mdl-js-layout mdl-color--grey-100">
        <div className="demo-ribbon"></div>
        <main className="demo-main mdl-layout__content">
          <div className="demo-container mdl-grid">
            <div className="mdl-cell mdl-cell--1-col mdl-cell--hide-tablet mdl-cell--hide-phone"></div>
            <div className="demo-content mdl-color--white mdl-shadow--4dp content mdl-color-text--grey-800 mdl-cell mdl-cell--10-col">
              <h3>{props.info.title}</h3>
              {/* Se inyecta la tabla de empleados */}
            </div>
            {props.children}
          </div>
        </main>
        <Footer
          contact={props.info.repositoryURL}
          mailto={props.info.mailTo} />
      </div>
    </div>
  )
}
