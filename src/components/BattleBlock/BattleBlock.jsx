// @flow
import 'bootstrap/dist/css/bootstrap-grid.css';
import type {Props} from './flow';
import React, {Component} from 'react';
import 'styles/styles.less';
import styles from './BattleBlock.less';
import BattleHeader from 'components/BattleHeader';
import ParticipantBlock from 'components/ParticipantBlock';
import Timer from 'components/Timer';
import cn from 'classnames';

export class BattleBlock extends Component<Props> {
	props: Props;

	getStyles = () => {
		const {gridRow} = this.props;
		return cn([styles.flexItem, styles[gridRow]]);
	};

	render () {
		const {stage, blockNumber} = this.props;

		return (
			<div className={this.getStyles()}>
				<div className="flex-item">
					<BattleHeader />
					<ParticipantBlock stage={stage} blockNumber={blockNumber} item='first'/>
					<ParticipantBlock stage={stage} blockNumber={blockNumber} item='second'/>
					{false ? <Timer /> : null}
				</div>
			</div>
		);
	}
}

export default BattleBlock;
