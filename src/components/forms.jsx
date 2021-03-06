import React, { Fragment, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

const Form = ({ makeCite }) => {

    const [cite, setCite] = useState({
        pet: '',
        owner: '',
        date: '',
        time: '',
        symptom: '',
    })

    const [error, setError] = useState(false)

    const handleChange = e => {
        setCite({
            ...cite,
            [e.target.name]: e.target.value,
        })
    }

    const { pet, owner, date, time, symptom } = cite;

    const submitCite = e => {
        e.preventDefault();

        //Validar
        if (pet.trim() === '' || owner.trim() === '' || date.trim() === '' || time.trim() === '' || symptom.trim() === '') {
            setError(true);
            return
        }
        //eliminar mensaje
        setError(false);

        //Asignar una ID
        cite.id = uuidv4();

        //crear la cita
        makeCite(cite)

        //Reiniciar el form
        setCite({
            pet: '',
            owner: '',
            date: '',
            time: '',
            symptom: '',
        })
    }

    return (
        <Fragment>
            <h2>Crear cita</h2>

            {error

                ?
                <p className='alert-error'>Todos los campos son obligatorios</p>
                :
                null
            }

            <form
                onSubmit={submitCite}
            >
                <label>Nombre de Mascota</label>
                <input
                    type="text"
                    name="pet"
                    className="u-full-width"
                    placeholder="Nombre de Mascota"
                    onChange={handleChange}
                />
                <label>Nombre de Dueño</label>
                <input
                    type="text"
                    name="owner"
                    className="u-full-width"
                    placeholder="Nombre de Dueño"
                    onChange={handleChange}
                />
                <label>Fecha</label>
                <input
                    type="date"
                    name="date"
                    className="u-full-width"
                    onChange={handleChange}
                />
                <label>Hora</label>
                <input
                    type="time"
                    name="time"
                    className="u-full-width"
                    onChange={handleChange}
                />
                <label>Síntomas</label>
                <textarea
                    name="symptom"
                    className="u-full-width"
                    onChange={handleChange}
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


Form.propTypes = {
    makeCite: PropTypes.func.isRequired
}

export default Form;