// @flow
import 'bootstrap/dist/css/bootstrap-grid.css';
import type {Props} from './flow';
import React, {Component} from 'react';
import 'styles/styles.less';
import styles from './Scoreboard.less';

export class Scoreboard extends Component<Props> {
	props: Props;

	render () {
		return (
			<div>
				<h2 id="NameTurnir" />
				<h3>ВЫСТУПАЮТ</h3>
				<table align="center" width="1028px">
					<tbody>
					<tr>
						<td className={styles.gradient_1} width="380px" id="leftPlayerNumber" />
						<td width="100px" rowSpan="2"><h1 id="timeLabel">00:00</h1></td>
						<td className={styles.gradient_1} width="380px" id="rightPlayerNumber" />
					</tr>
					<tr>
						<td className={styles.gradient_2} width="380px" rowSpan="2" id="leftPlayerName" />
						<td className={styles.gradient_2} width="380px" rowSpan="2" id="rightPlayerName" />
					</tr>
					<tr>
						<td>Бой №<span id="fightNumber" /></td>
					</tr>
					<tr>
						<td bgcolor="#FF0000" />
						<td height="20px" />
						<td />
					</tr>
					<tr>
						<td id="scoreLeft" />
						<td width="100px" />
						<td id="scoreRight" />
					</tr>
					</tbody>
				</table>
				<h4>ГОТОВЯТСЯ</h4>
				<table align="center" width="1028px">
					<tbody>
					<tr>
						<td id="NextLeftPlayerNumber" width="380px" className={styles.gradient2_1} />
						<td width="100px" rowSpan="2" />
						<td id="NextRightPlayerNumber" width="380px" className={styles.gradient2_1} />
					</tr>
					<tr>
						<td id="NextLeftPlayerName" width="380px" className={styles.gradient2_2} />
						<td id="NextRightPlayerName" width="380px" className={styles.gradient2_2} />
					</tr>
					</tbody>
				</table>
			</div>
		);
	}
}

export default Scoreboard;
