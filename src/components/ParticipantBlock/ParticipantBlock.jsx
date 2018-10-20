// @flow
import 'bootstrap/dist/css/bootstrap-grid.css';
import type {Props} from './flow';
import React, {Component} from 'react';
import 'styles/styles.less';
import BattleButton from 'components/BattleButton';
import styles from './ParticipantBlock.less';

export class ParticipantBlock extends Component<Props> {
	props: Props;

	render () {
		return (
			<div className={styles.participantRow}>
				<input className={styles.participantNumber} type="text" name=""/>
				<select name="" className={styles.participantName} />
				<label className="score">0</label>
				<BattleButton content="+" />
				<BattleButton content="-" />
				<BattleButton content="Победитель" />
				<p className={styles.participantInfo}>
					возраст: <span className="age" />,
					кю: <span className="dan" />,
					вес: <span className="weight" />кг,
					клуб: <span className="trainer"/>
				</p>
			</div>
		);
	}
}

export default ParticipantBlock;
