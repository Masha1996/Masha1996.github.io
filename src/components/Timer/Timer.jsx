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
				<p htmlFor="roundTime">Round Time:</p>
				<input id="roundTime" type="number" value="20" />
				<button onClick="startRound()">Start Round</button>
				<br />
				<p className="timeLabel" id="timeLabel">00:00</p>
				<button id="resumeBtn" disabled="true" onClick="resume()">Resume</button>
				<button id="pauseBtn" disabled="true" onClick="pause()">Pause</button>
				<button onClick="addSeconds(60)">1 минута</button></div>
		);
	}
}

export default Timer;
