import React from 'react';
import ReactDOM from 'react-dom';

import System from './System';

import 'react-image-lightbox/style.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <System />,
  document.getElementById('root')
);
registerServiceWorker();
