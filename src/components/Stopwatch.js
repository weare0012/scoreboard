import React from 'react';

export class Stopwatch extends React.Component {
	tickRef;

	tick(){

	}
	//Dom 랜더링 된 직후 호출 됨.
	//jQuery 스크롤바 등 Dom관련 메서드, 네트워크 호출 초기화
	componentDidMount() {
		// eslint-disable-next-line no-undef
		this.tickRef = setInterval(this.tick, 1000);
	}

	//Dom이 파괴되기 직전에 호출
	componentWillUnmount() {
		clearInterval(this.tickRef);
	}

	render() {
		return (
			<div className="stopwatch">
				<h2>StopWatch</h2>
				<span className="stopwatch-time">0</span>
				<button>Start</button>
				<button>Reset</button>
			</div>
		);
	}
}