import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import App from './components/App';
import './index.css';
import { stat } from 'fs';


const DEFAULT_SETTINGS ={
    gameStarted:false,
    instructionsExpanded:false
}



const store = createStore(rootReducer);




console.log('store',store);

console.log('store.getState()',store.getState());


store.subscribe(() =>console.log('store.getState()',store.getState()));



store.dispatch(startGame());;
store.dispatch(expandedInstructions());

store.dispatch(cancelGame())
store.dispatch(collapseInstructions());






ReactDOM.render(
    <App />,
    document.getElementById('root'));