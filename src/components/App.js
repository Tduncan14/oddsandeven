import React ,{Component} from 'react';
import {connect} from 'react-redux';
import {startGame,cancelGame} from '../actions/settings';
import Instructions from './Instructions'


class App extends Component {

    render() {
        console.log('this',this)

        return(

            <div>
             <h2> ♣️♠️ Evens and Odds♦️♥️ </h2>
             {
                 this.props.gameStarted ? (
                    <div>
                        <h3>
                          Game On !
                        </h3>
                      <br />
                        <button onClick={this.props.cancelGame} >Cancel Game</button>
                    </div>
                 ):(
                    <div>
                        <h3>A new Game waits</h3>
                        <br />
                        <button onClick={this.props.startGame}>Start Game</button>
                        <hr />
                        <Instructions />
                   </div>
                    )
                  }
                
           </div>
        )
    }
}
const mapStateToProps = state =>{
    console.log('state',state);
    return{gameStarted: state.gameStarted};
}

const mapDispatchToProps = dispatch =>{
    return{
        startGame:()=>dispatch(startGame()),
        cancelGame:()=>dispatch(cancelGame())
    };
}

const componentConnector = connect (mapStateToProps,mapDispatchToProps);

export default  componentConnector(App);