import React from 'react';

export class AddPlayerForm extends React.Component {
	state={
		value: ''
	}
	handleValueChange = (e) => {
		console.log(e);
	  this.setState({value: e.target.value});
	}
	render() {
		return (
			<form className="form">
				<input className="input" type="text" placeholder="enter a player's name"
				value={this.state.value} onChange={this.handleValueChange}/>
				<input className="input" type="submit" value="Add Player" />
			</form>
		);
	}
}