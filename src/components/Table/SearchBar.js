import React from 'react'

/**
 * Componente para filtrar los empleados.
 *
 * Originalmente para usar con Table. Recibe el array de datos originales
 * y dispara onSearchChange mandando el array filtrado.
 *
 * @param {object} props
 * @param {array.<object>} props.data La lista original de los empleados.
 * @param {event} props.onSearchChange Dispara la actualización.
 */
export default function SearchBar (props) {

  /** Nombre de la función (para debug) */
  const _name = 'SearchBar'

  /**
   * Devuelve un array filtrado.
   *
   * @param {string} query La expresión a buscar.
   * @param {array.<object>} list La lista a filtrar.
   *
   * @return {array} La lista filtrada.
   */
  const search = (query, list) => {
    // Crea la expresión regular
    let re = new RegExp(query, 'i')

    // Filtra de los datos crudos a un array
    return list.filter((item) => (
      item.name.toString().match(re)
        || item.company.toString().match(re))
    )
  }

  /**
   * Dispara el evento onSearchChange.
   *
   * @param {object} ev el evento que viene del input.
   * @param {string} ev.target.value La expresión a buscar.
   *
   * @listens event:onChange
   * @emits parent~event:onSearchChange
   */
  const handleChange = (ev) => {
    props.onSearchChange(search(ev.target.value, props.data))
  }

  // Se revisa que existan las propiedades necesarias
  if (!props.data) {
    console.log(props)
    throw `${_name}: No existe la propiedad data.`
  }

  if (!Array.isArray(props.data)) {
    console.log(props.data)
    throw `${_name}: La propiedad data no es Array.`
  }

  if (!props.onSearchChange) {
    console.log(props)
    throw `${_name}: No existe la propiedad onSearchChange.`
  }

  if (typeof props.onSearchChange !== 'function') {
    console.log(props.onSearchChange)
    throw `${_name}: La propiedad onSearchChange no devuelve una función.`
  }


  return (
    <input
      className="mdl-textfield__input"
      type="text"
      onChange={(ev) => handleChange(ev)}
      placeholder="Buscar..." />
  )
}
