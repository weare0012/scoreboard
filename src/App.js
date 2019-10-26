import React from 'react';
import './App.css';
import {Header} from './components/Header';
import {Player} from "./components/Player";


class App extends React.Component{
  state = {
    players:[
      {name: 'LDK', score: 1, id: 1},
      {name: 'HONG', score: 2, id: 2},
      {name: 'KIM', score: 3, id: 3},
      {name: 'PARK', score: 4, id: 4}
    ]
  }

  render() {
    return (
      <div className="scoreboard">
        <Header title="My Scoreboard" totalPlayers={11}/>
        {
          this.state.players.map(item =>
            <Player name={item.name} score={item.score} id={item.id.toString()}
                    removePlayer={this.handleRemovePlayer.bind(this)}
                    changeScore={this.handleChangeScore.bind(this)}
                    />)
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

  handleChangeScore(id, delta){
    console.log('handleChangeScore', id, delta);
    this.setState(prevState => {
      const players = [ ...prevState.players ];
      players.forEach(player => {
        if(player.id === id){
          player.score += delta;
        }
      });
      return players;
    })
  }
}

export default App;
