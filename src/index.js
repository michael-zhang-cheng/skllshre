import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './connected-components/ConnectedShortener';
import { createStore } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

import config from './config';

// app is ready to be rendered 
ReactDOM.render(
  <React.StrictMode>
    <Provider store={createStore({})}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.querySelector(config.loadingQuerySelector) 
);

serviceWorker.unregister();
