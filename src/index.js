import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './app/sassStyles/main.sass';
import App from './app/App';
//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//reportWebVitals();
serviceWorkerRegistration.register();
