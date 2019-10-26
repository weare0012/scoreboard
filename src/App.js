import React from 'react';
import './App.css';
import {Header} from './components/Header';





class Counter extends React.Component{
  state = {
    score : 0
  }

  decrementScore(){
    console.log("decrement");

    this.setState({score: this.state.score - 1});
  }

  incrementScore(){
    console.log("increment");

    this.setState(prevState => (
        { score: prevState.score + 1}
      )
    );
  }

  render(){
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={this.decrementScore.bind(this)}> - </button>
        <span className="counter-score">{this.state.score}</span>
        <button className="counter-action increment" onClick={this.incrementScore.bind(this)}> + </button>
      </div>
    );
  }
}


const Player = (props) =>
  (
    <div className='player'>
			<span className="player-name">
				<button className="remove-player" onClick={() => props.removePlayer(props.id)}>x</button>
        {props.name}
			</span>
      <Counter score={props.score}/>
    </div>
  );

class App extends React.Component{
  state = {
    players:[
      {name: 'LDK', score: 30, id: 1},
      {name: 'HONG', score: 40, id: 2},
      {name: 'KIM', score: 50, id: 3},
      {name: 'PARK', score: 60, id: 4}
    ]
  }

  render() {
    return (
      <div className="scoreboard">
        <Header title="My Scoreboard" totalPlayers={11}/>
        {
          this.state.players.map(item => <Player name={item.name} score={item.score} id={item.id.toString()} removePlayer={this.handleRemovePlayer} />)
        }
      </div>
    )
  }

  handleRemovePlayer = (id) => {
    console.log('handleRemovePlayer' + id);
    this.setState(prevState => {
      const players = prevState.players.filter(player => player.id != id);
      return {players: players};
    })
  }
}

export default App;
