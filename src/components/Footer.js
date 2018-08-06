import React from 'react'

/**
 * Componente para el pie de página.
 *
 * Para ser usado junto a Theme.
 *
 * @param {object} props
 * @param {string} props.contact URL del repositorio.
 * @param {string} props.mailto Email del autor.
 */
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
