import React from 'react';
import CARSProvider from './context/CARSProvider';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <CARSProvider>
    <App />
  </CARSProvider>,
  document.getElementById('root'),
);
