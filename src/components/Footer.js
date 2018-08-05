import React from 'react'

export default function Footer (props) {
  return (
    <footer className="demo-footer mdl-mini-footer">
      <div className="mdl-mini-footer--left-section">
        <ul className="mdl-mini-footer--link-list">
            <li><a
              href={props.contact}
              target="_blank"
              >Repositorio</a></li>
            <li><a href={props.mailto}>Diego Viniegra</a></li>
          <li>2018</li>
        </ul>
      </div>
    </footer>
  )
}
