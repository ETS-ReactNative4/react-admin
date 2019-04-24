import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux'

import store from './Redux/store'

import { App } from './Components/App/App';

import registerServiceWorker from './registerServiceWorker';

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
