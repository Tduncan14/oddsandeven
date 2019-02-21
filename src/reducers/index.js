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