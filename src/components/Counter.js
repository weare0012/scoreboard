import React from 'react';

export class Counter extends React.Component{
	state = {
		score : 0
	}

	incrementScore = (delta) => {
		console.log("increment");

		this.props.changeScore(this.props.id, delta);
	}

	render(){
		return (
			<div className="counter">
				<button className="counter-action decrement" onClick={() => this.incrementScore(-1)}> - </button>
				<span className="counter-score">{this.state.score}</span>
				<button className="counter-action increment" onClick={() => this.incrementScore(1)}> + </button>
			</div>
		);
	}
}