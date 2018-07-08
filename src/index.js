import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { createStroe } from 'redux';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

registerServiceWorker();