import React from 'react';
import ReactDOM from 'react-dom';

//For Redux
import {Provider} from 'react-redux';
import store from './store';

//styling
import './index.css';

//For REACT DOM render
import Game from './components/game';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store = {store} > <Game /> </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
