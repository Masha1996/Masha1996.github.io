// @flow
import 'bootstrap/dist/css/bootstrap-grid.css';
import type {Props} from './flow';
import React, {Component} from 'react';
import 'styles/styles.less';
import styles from './Scoreboard.less';

export class Scoreboard extends Component<Props> {
	props: Props;

	getWinner = (item) => {
		const winner = localStorage.getItem('winner');
		return winner === item ? styles.redMarker : styles.whiteMarker;
	};

	render () {
		// Read actual values once
		const idList = [
			"leftPlayerNumber",
			"rightPlayerNumber",
			"leftPlayerName",
			"NextLeftPlayerNumber",
			"NextRightPlayerNumber",
			"NextLeftPlayerName",
			"NextRightPlayerName",
			"rightPlayerName",
			"scoreLeft",
			"scoreRight",
			"timeLabel",
			"NameTurnir",
			"fightNumber",
			"winner"
		];

		// Assign values from local storage on startup
		// idList.map((id) => {
		// 	document.getElementById(id).textContent = localStorage.getItem(id);
		// });

		// window.addEventListener('storage', (e) => {
		// 	document.getElementById(e.key).textContent = e.newValue;
		// });

		return (
			<div>
				<h2/>
				<h3>ВЫСТУПАЮТ</h3>
				<table align="center" width="1028px">
					<tbody>
					<tr>
						<td className={styles.gradient_1} width="380px">
							{localStorage.getItem('leftPlayerNumber')}
						</td>
						<td width="100px" rowSpan="2"><h1 id="timeLabel">
							{localStorage.getItem('timeLabel')}
						</h1></td>
						<td className={styles.gradient_1} width="380px">
							{localStorage.getItem('rightPlayerNumber')}
						</td>
					</tr>
					<tr>
						<td className={styles.gradient_2} width="380px" rowSpan="2">
							{localStorage.getItem('leftPlayerName')}
						</td>
						<td className={styles.gradient_2} width="380px" rowSpan="2">
							{localStorage.getItem('rightPlayerName')}
						</td>
					</tr>
					<tr>
						<td>
							Бой № {localStorage.getItem('fightNumber')}
						</td>
					</tr>
					<tr>
						<td className={this.getWinner('0')} />
						<td height="20px" />
						<td className={this.getWinner('1')} />
					</tr>
					<tr>
						<td>
							{localStorage.getItem('scoreLeft')}
						</td>
						<td width="100px" />
						<td>
							{localStorage.getItem('scoreRight')}
						</td>
					</tr>
					</tbody>
				</table>
				<h4>ГОТОВЯТСЯ</h4>
				<table align="center" width="1028px">
					<tbody>
					<tr>
						<td width="380px" className={styles.gradient2_1}>
							{localStorage.getItem('NextLeftPlayerNumber')}
						</td>
						<td width="100px" rowSpan="2" />
						<td width="380px" className={styles.gradient2_1}>
							{localStorage.getItem('NextRightPlayerNumber')}
						</td>
					</tr>
					<tr>
						<td width="380px" className={styles.gradient2_2}>
							{localStorage.getItem('NextLeftPlayerName')}
						</td>
						<td width="380px" className={styles.gradient2_2}>
							{localStorage.getItem('NextRightPlayerName')}
						</td>
					</tr>
					</tbody>
				</table>
			</div>
		);
	}
}

export default Scoreboard;
