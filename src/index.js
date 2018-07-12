import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './js/store/index';
import { Provider } from "react-redux";
import { createBottle } from './js/actions/index';

window.store = store
window.createBottle = createBottle;


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
