import React from 'react'

export default function SearchBar (props) {
  const search = (query, list) => {
    // Crea la expresión regular
    let re = new RegExp(query, 'i')

    // Filtra de los datos crudos a un array
    return list.filter((item) => (
      item.name.toString().match(re)
        || item.company.toString().match(re))
    )
  }

  const handleChange = (ev) => {
    props.onSearchChange(search(ev.target.value, props.data))
  }

  return (
    <input
    className="mdl-textfield__input"
    type="text"
    onChange={(ev) => handleChange(ev)}
    placeholder="Buscar...." />
  )
}
