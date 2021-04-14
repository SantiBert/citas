import React from 'react';
import PropTypes from 'prop-types';

const Cite = ({ cite, deleteCite }) => (
    <div className="cita">
        <p>Mascota: <span>{cite.pet}</span></p>
        <p>Dueño: <span>{cite.owner}</span></p>
        <p>Fecha: <span>{cite.date}</span></p>
        <p>Hora: <span>{cite.time}</span></p>
        <p>Síntomas: <span>{cite.symptom}</span></p>
        <button
            className="button eliminar u-full-width"
            onClick={() => deleteCite(cite.id)}
        >
            Eliminar &times;
        </button>
    </div>
);

Cite.propTypes = {
    cite: PropTypes.object.isRequired,
    deleteCite: PropTypes.func.isRequired,
}

export default Cite;