// Action types imported
import{SET_GAME_STARTED,SET_INSTRUCTIONS_EXPANDED} from './types'




//action creator functions

 export const  startGame = () => {
    return {type:SET_GAME_STARTED,gameStarted:true};
}

 export const cancelGame = () =>{
    return{type:SET_GAME_STARTED,gameStarted:false};
}

// react creator for

 export const  expandedInstructions = () =>{
    return{type:SET_INSTRUCTIONS_EXPANDED,instructionsExpanded :true}
}

 export const collapseInstructions = () =>{
   return{type:SET_INSTRUCTIONS_EXPANDED, instructionsExpanded:false}
}

