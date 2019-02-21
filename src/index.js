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






const rootReducer = (state=DEFAULT_SETTINGS,action)=>{
   console.log('state',state,'action',action);

   switch(action.type){
       case SET_GAME_STARTED:
       return{
           gameStarted:action.gameStarted,
           instructionsExpanded:state.instructionsExpanded
         
       }
       case SET_INSTRUCTIONS_EXPANDED:
        return{
            gameStarted:state.gameStarted,
            instructionsExpanded:action.instructionsExpanded
        }
        default:
        return state
   }

}

const store = createStore(rootReducer);




console.log('store',store);

console.log('store.getState()',store.getState());


store.subscribe(() =>console.log('store.getState()',store.getState()));



store.dispatch(startGame());;
store.dispatch(expandedInstructions());

store.dispatch(cancelGame())
store.dispatch(cancelInstructions());






ReactDOM.render(
    <App />,
    document.getElementById('root'));