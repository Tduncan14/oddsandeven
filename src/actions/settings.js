
//action types
 export const  SET_GAME_STARTED ='SET_GAME_STARTED';
 export const  SET_INSTRUCTIONS_EXPANDED ='SET_INSTRUCTIONS_EXPANDED';


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

 export const cancelInstructions = () =>{
   return{type:SET_INSTRUCTIONS_EXPANDED, instructionsExpanded:false}
}

