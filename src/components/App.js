import React ,{Component} from 'react';
import {connect} from 'react-redux';
import {startGame,cancelGame} from '../actions/settings';



class App extends Component {
    startGame =() => {
        this.props.dispatch(startGame())
    }

    cancelGame =() =>{
        this.props.dispatch(cancelGame());
    }

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
                        <button onClick={this.cancelGame} >Cancel Game</button>
                    </div>
                 ):(
                    <div>
                        <h3>A new Game waits</h3>
                        <br />
                        <button onClick={this.startGame}>Start Game</button>
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

const componentConnector = connect (mapStateToProps);

export default  componentConnector(App);