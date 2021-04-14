import React, { Fragment, useState, useEffect } from 'react';
import Form from './components/forms';
import Cite from './components/cite'

function App() {

  //local store
  let citesInicial = JSON.parse(localStorage.getItem('cites'));
  if (!citesInicial) {
    citesInicial = [];
  }

  const [cites, setCites] = useState(citesInicial);

  useEffect(() => {
    let citesInicial = JSON.parse(localStorage.getItem('cites'));

    if (citesInicial) {
      localStorage.setItem('cites', JSON.stringify(cites))
    } else {
      localStorage.setItem('cites', JSON.stringify([]));
    }
  }, [cites]);

  //funcion que agregue las citas
  const makeCite = cite => {
    setCites([
      ...cites,
      cite
    ])
  }

  const deleteCite = id => {
    const newCites = cites.filter(cite => cite.id !== id);
    setCites(newCites);
  }

  //Mensajes condicional
  const title = cites.length === 0 ? 'No hay turnos' : 'Administrador: '

  return (
    <Fragment>
      <h2> Turnos:</h2>
      <div className='container'>
        <div className='row'>
          <div className="one-half column">
            <Form
              makeCite={makeCite}
            />
          </div>
          <div className="one-half column">
            <h2>{title}</h2>
            {cites.map(cite => (
              <Cite
                key={cite.key}
                cite={cite}
                deleteCite={deleteCite}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
