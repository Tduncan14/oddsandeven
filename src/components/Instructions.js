import React from 'react';
import {connect} from 'react-redux';
import {expandedInstructions, collapseInstructions} from'../actions/settings';


const Instructions = props =>{
    
    const{instructionsExpanded,expandInstructions,collapseInstructions} = props;


    if(instructionsExpanded){
        return(
            <div>
                <h3>Instructions</h3>
                <p>Welcome to Even and Odds</p>
                <p>The deck is shuffled. The card will be even or odd</p>
                <p>Then a make a choice and create a highscore</p>
                <p>(face cards don't count)</p>
              <br />

              <button onClick={collapseInstructions}>Show less</button>
            </div>
        );
    }
    return(
        <div>
            <h3>Instructions</h3>
             <p>Welcome to even or odds. The game goes like this ....</p>
             <button onClick={expandInstructions}>Read more</button>
        </div>
    )

}

const mapStateToProps = state =>{
    return{ instructionsExpanded: state.instructionsExpanded};
}

const mapDispatchToProps = dispatch =>{
    return{
        expandInstructions:()=> dispatch(expandedInstructions()),
        collapseInstructions:()=> dispatch(collapseInstructions())
    }
 }

const componentConnector = connect(mapStateToProps, mapDispatchToProps);




export default componentConnector(Instructions);
