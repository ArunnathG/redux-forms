import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import {createStore,applyMiddleware} from 'redux'
import ReduxPromise from 'redux-promise'
import Reducer from './Reducers/index'
const createStorewithmiddleware = applyMiddleware(ReduxPromise)(createStore)

const app =
(
    <Provider store= {createStorewithmiddleware(Reducer)}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </Provider>
)


ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
