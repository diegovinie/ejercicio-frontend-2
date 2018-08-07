import React from 'react'

export default function AddEmployee (props) {

  const handleSubmit = () => {
    console.log('onSubmit')
    props.onFormSubmit()
  }

  const handleChange = (ev, key) => {
    let employee = JSON.parse(JSON.stringify(props.employee))
    employee[key] = ev.target.value
    if (!employee.id) {
      employee.id = props.nextId()
    }
    props.onKeyChange(employee)
  }

  return (
    <div>
        <div>
          <h4>Agregar Empleado</h4>
        </div>
        <form
          onSubmit={(ev) => {
            ev.preventDefault()
            return handleSubmit()
          }}
          method="post">
            <div className="mdl-textfield mdl-js-textfield">
              {/* Campo Nombre */}
              <input
                className="mdl-textfield__input"
                type="text"
                value={props.employee.name}
                onChange={(ev) => handleChange(ev, 'name')}
                pattern="[A-Z](\.|[a-z]+)( [A-Z](\.|[a-z]+))( [A-Z](\.|[a-z]+))?" required
                placeholder="Nombre" />
              <span className="mdl-textfield__error">error</span>
            </div>
            <div className="mdl-textfield mdl-js-textfield">
              {/* Campo Empresa */}
              <input
                className="mdl-textfield__input"
                type="text"
                value={props.employee.company}
                onChange={(ev) => handleChange(ev, 'company')}
                placeholder="Compañía" />
            </div>
            <div className="mdl-textfield mdl-js-textfield">
              {/* Campo Edad */}
              <input
                className="mdl-textfield__input"
                type="text"
                value={props.employee.age}
                onChange={(ev) => handleChange(ev, 'age')}
                pattern="\d{2}|11\d"
                placeholder="Edad" />
            </div>
            <div className="mdl-textfield mdl-js-textfield">
              {/* Campo Salario */}
              <input
                className="mdl-textfield__input"
                type="text"
                value={props.employee.salary}
                onChange={(ev) => handleChange(ev, 'salary')}
                pattern="\d*(\.\d+)?" required
                placeholder="Salario" />
            </div>
            {/* Campo Teléfono */}
            <div className="mdl-textfield mdl-js-textfield">
              <input
                className="mdl-textfield__input"
                type="text"
                value={props.employee.phone}
                onChange={(ev) => handleChange(ev, 'phone')}
                pattern="^\(\d{3}\) \d{3} \d{4}$"
                title="(###) ### ####"
                placeholder="Teléfono" />
            </div>
            <div className="mdl-textfield mdl-js-textfield">
              {/* Campo Correo */}
              <input
                className="mdl-textfield__input"
                type="text"
                value={props.employee.email}
                onChange={(ev) => handleChange(ev, 'email')}
                pattern=".+@[a-z].*\..*"
                placeholder="Correo" />
            </div>
            <div>
              {/* Se utiliza esta forma de submit para utilizar los patterns */}
              <button
                className="mdl-button"
                type="submit"
                name="button">
                  Guardar
              </button>
              <button
                className="mdl-button"
                onClick={props.onCancel}
                name="button">
                  Cancelar
              </button>

            </div>
          </form>
    </div>
  )
}
