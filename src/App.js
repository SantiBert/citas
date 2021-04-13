import React, { Fragment } from 'react';
import Form from './components/forms';

function App() {
  return (
    <Fragment>
      <h2> Esta andando</h2>
      <div className='container'>
        <div className='row'>
          <div className="one-half column">
            <Form />
          </div>
          <div className="one-half column">

          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
