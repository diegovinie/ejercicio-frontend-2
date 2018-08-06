import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from '../SearchBar';
import {render, fireEvent, waitForElement} from 'react-testing-library'

/** Lista original de empleados */
import employees from '../../../employees'

/** Dummie props */
const props = {
  data: [],
  onSearchChange: () => {}
}

const div = document.createElement('div')

describe('Prueba los argumentos de SearchBar:', () => {

  // const bklog = console.log
  console.log = jest.fn()

  it('falla si props.data no existe', () => {
    try {
      ReactDOM.render(
        <SearchBar onSearchChange={props.onSearchChange} />,
        div
      )

    } catch (e) {
      expect(e).toThrow()
      expect(e).toBe('SearchBar: No existe la propiedad data.')
      expect(console.log).toBeCalled()
    }
  })

  it('falla si props.data no es array', () => {
    try {
      ReactDOM.render(
        <SearchBar
          data="cualquier cosa"
          onSearchChange={props.onSearchChange} />,
        div
      )

    } catch (e) {
      expect(e).toThrow()
      expect(e).toBe('SearchBar: La propiedad data no es Array.')
      expect(console.log).toBeCalled()
    }
  })

  it('falla si props.onSearchChange no existe', () => {
    try {
      ReactDOM.render(
        <SearchBar
          data={props.data} />,
        div
      )

    } catch (e) {
      expect(e).toThrow()
      expect(e).toBe('SearchBar: No existe la propiedad onSearchChange.')
      expect(console.log).toBeCalled()
    }
  })

  it('falla si props.onSearchChange no es función', () => {
    try {
      ReactDOM.render(
        <SearchBar
          data={props.data}
          onSearchChange />,
        div
      )

    } catch (e) {
      expect(e).toThrow()
      expect(e).toBe('SearchBar: La propiedad onSearchChange no devuelve una función.')
      expect(console.log).toBeCalled()
    }
  })
})



describe('Prueba el componente SearchBar:', () => {

  it('renderiza sin problema', () => {
    ReactDOM.render(
      <SearchBar
        data={props.data}
        onSearchChange={props.onSearchChange}
        />, div)
  })

  it('filtra los datos', () => {
    /** Array de los empleados */
    const data = employees
    /** La búsqueda */
    const query = 'grupo'
    /** El largo del array de respuesta */
    const expected = 4
    /** Función para evaluar la lista filtrada */
    const assertFn = async (filteredList) => {
      // console.info(filteredList)

      // Espera a que sea llamado y compara
      await expect(filteredList.length).toBe(expected)
    }

    var Component = <SearchBar
      data={data}
      onSearchChange={assertFn} />

    const dom = render(Component)
    const input = dom.getByPlaceholderText('Buscar...')
    input.value = query
    fireEvent.change(input)
  })
})
