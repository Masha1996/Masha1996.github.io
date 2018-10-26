// @flow
import 'bootstrap/dist/css/bootstrap-grid.css';
import type {Props} from './flow';
import React, {Component} from 'react';
import 'styles/styles.less';
import styles from './Timer.less';

export class Timer extends Component<Props> {
	props: Props;

	constructor () {
		super();
		this.state = {
			timer: 0
		}
	}

	handleClick = (e: Event) => {
		e.stopPropagation();
	};

	setTimer = (e: Event) => {
		const value = e.target.value;
		this.setState(state => ({
			timer: value * 60
		}));
		e.stopPropagation();
	};

	startRound = (e: Event) => {
		// roundSecondsLeft - секунд осталось
		this.resume();
		e.stopPropagation();
	};

	pause = (e: Event) => {
		this.handleClick(e);
	};

	updateTime = (seconds) => {
		this.setState(state => ({
			timer: seconds
		}));
		localStorage.setItem('timeLabel', this.formatSeconds(this.state.timer));
		// TODO запись в локал стордж
	};

	resume = () => {
			const timerName = setInterval(() => {
			if (this.state.timer < 0) {
				clearInterval(timerName);
			} else {
				this.updateTime(this.state.timer > 0 ? this.state.timer - 1 : 0);
			}
		}, 1000);
	};

	formatSeconds = (totalSeconds) => {
		const pad = (num) => String(num).padStart(2, '0');
		const mm = pad(Math.floor(totalSeconds / 60));
		const ss = pad(totalSeconds % 60);
		return `${mm}:${ss}`;
	};

	addMinute = (e: Event) => {
		this.setState(state => ({
			timer: state.timer + 60
		}));
		this.handleClick(e);
	};

	render () {
		const {timer} = this.state;
		return (
			<div className={styles.flexItemTimer}>
				<p>Round Time:</p>
				<input type="text" onClick={this.handleClick} onBlur={this.setTimer} />
				<button onClick={this.startRound}>Start Round</button>
				<br />
				<p>{this.formatSeconds(timer)}</p>
				<button onClick={this.handleClick}>Resume</button>
				<button onClick={this.pause}>Pause</button>
				<button onClick={this.addMinute}>1 минута</button>
			</div>
		);
	}
}

export default Timer;
