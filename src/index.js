import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import App from './components/App';
import './index.css';
import rootReducer from'./reducers/index'








const store = createStore(rootReducer);




console.log('store',store);

console.log('store.getState()',store.getState());


store.subscribe(() =>console.log('store.getState()',store.getState()));








ReactDOM.render(
    <App />,
    document.getElementById('root'));