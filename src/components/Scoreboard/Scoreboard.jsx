// @flow
import 'bootstrap/dist/css/bootstrap-grid.css';
import type {Props} from './flow';
import React, {Component} from 'react';
import 'styles/styles.less';
import styles from './Scoreboard.less';

export class Scoreboard extends Component<Props> {
	props: Props;

	constructor () {
		super();
		this.state = {
			scoreboard: {
				leftPlayerName: localStorage.setItem('leftPlayerName', ''),
				leftPlayerNumber: localStorage.setItem('leftPlayerNumber', ''),
				rightPlayerName: localStorage.setItem('rightPlayerName', ''),
				rightPlayerNumber: localStorage.setItem('rightPlayerNumber', ''),
				NextLeftPlayerName: localStorage.setItem('NextLeftPlayerName', ''),
				NextLeftPlayerNumber: localStorage.setItem('NextLeftPlayerNumber', ''),
				NextRightPlayerName: localStorage.setItem('NextRightPlayerName', ''),
				NextRightPlayerNumber: localStorage.setItem('NextRightPlayerNumber', ''),
				timeLabel: localStorage.setItem('timeLabel', ''),
				fightNumber: localStorage.setItem('fightNumber', ''),
				scoreLeft: localStorage.setItem('scoreLeft', ''),
				scoreRight: localStorage.setItem('scoreRight', ''),
				NameTurnir: localStorage.setItem('NameTurnir', ''),
				winner: localStorage.setItem('winner', '')
			}
		}
	}

	componentDidMount () {
		if (typeof window !== 'undefined') {
			this.setState({scoreboard: localStorage});
		}

		window.addEventListener('storage', events => {
			this.setState(state => ({
				scoreboard: events
			}));
		});
	}

	getWinner = (item) => {
		const winner = this.state.scoreboard.winner;
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

		console.log(localStorage);
		const {scoreboard} = this.state;

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
					<tr className={styles.winnerRow}>
						<td className={localStorage.getItem('winner') === '0' ? styles.redMarker : null} />
						<td className={styles.clear} height="20px" />
						<td className={localStorage.getItem('winner') === '1' ? styles.redMarker : null} />
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
