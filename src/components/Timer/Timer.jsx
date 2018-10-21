// @flow
import 'bootstrap/dist/css/bootstrap-grid.css';
import type {Props} from './flow';
import React, {Component} from 'react';
import 'styles/styles.less';
import styles from './Timer.less';

export class Timer extends Component<Props> {
	props: Props;

	render () {
		return (
			<div className={styles.flexItemTimer}>
				<p>Round Time:</p>
				{/*<input type="number" value={20} />*/}
				<button>Start Round</button>
				<br />
				<p className="timeLabel" id="timeLabel">00:00</p>
				<button id="resumeBtn" disabled="true">Resume</button>
				<button id="pauseBtn" disabled="true">Pause</button>
				<button>1 минута</button></div>
		);
	}
}

export default Timer;
