import React, { Fragment } from 'react';

const Form = () => {
    return (
        <Fragment>
            <h2>Crear cita</h2>
            <form>
                <label>Nombre de Mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre de Mascota"
                />
                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                />
                <label>Hora</label>
                <input
                    type="time"
                    name="time"
                    className="u-full-width"
                />
                <label>Síntomas</label>
                <textarea
                    name="symptom"
                    className="u-full-width"
                >
                </textarea>
                <button
                    type="submit"
                    className="u-full-width button-primary"
                >
                    Agregar cita
                </button>
            </form>
        </Fragment>

    );
}

export default Form;