import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import App from './components/App';
import './index.css';


const DEFAULT_SETTINGS ={
    gameStarted:false,
    instructionsExpanded:false
}

const SET_GAME_STARTED ='SET_GAME_STARTED';

const SET_INSTRUCTIONS_EXPANDED ='SET_INSTRUCTIONS_EXPANDED';




const rootReducer = (state=DEFAULT_SETTINGS,action)=>{
   console.log('state',state,'action',action);

   if(action.type === SET_GAME_STARTED){
       return{
           gameStarted:action.gameStarted,
           instructionsExpanded:false
       }
   }
    return state;
}

const store = createStore(rootReducer);




console.log('store',store);

console.log('store.getState()',store.getState());


store.subscribe(() =>console.log('store.getState()',store.getState()));

const startGame = () => {
    return {type:SET_GAME_STARTED,gameStarted:true};
}

const cancelGame = () =>{
    return{type:SET_GAME_STARTED,gameStarted:false};
}



const action1 = startGame();


store.dispatch(action1);


store.dispatch({type:'foo'});
store.dispatch({type:'bar'});



ReactDOM.render(
    <App />,
    document.getElementById('root'));