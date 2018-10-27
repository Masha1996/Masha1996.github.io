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
import {bindActionCreators} from 'redux';
import {activeBlock} from 'actions/app';
import {connect} from 'react-redux';

export class BattleBlock extends Component<Props> {
	props: Props;

	getStyles = () => {
		const {gridRow, active} = this.props;
		return cn([styles.flexItem, styles[gridRow], active ? styles.active : null]);
	};

	handleClick = (e) => {
		const {activeBlock, stage, blockNumber, tournament} = this.props;
		activeBlock && activeBlock(stage, blockNumber);

		localStorage.setItem('leftPlayerName', tournament[stage][blockNumber][0].name);
		localStorage.setItem('leftPlayerNumber', tournament[stage][blockNumber][0].number);
		localStorage.setItem('rightPlayerName', tournament[stage][blockNumber][1].name);
		localStorage.setItem('rightPlayerNumber', tournament[stage][blockNumber][1].number);

		localStorage.setItem('NextLeftPlayerName', tournament[stage][blockNumber + 1][0].name);
		localStorage.setItem('NextLeftPlayerNumber', tournament[stage][blockNumber + 1][0].number);
		localStorage.setItem('NextRightPlayerName', tournament[stage][blockNumber + 1][1].name);
		localStorage.setItem('NextRightPlayerNumber', tournament[stage][blockNumber + 1][1].number);
	};

	render () {
		const {stage, blockNumber, active, winner} = this.props;

		return (
			<div className={this.getStyles()} onClick={this.handleClick}>
				<div className="flex-item">
					<BattleHeader />
					<ParticipantBlock stage={stage} blockNumber={blockNumber} item={0} winner={winner} />
					<ParticipantBlock stage={stage} blockNumber={blockNumber} item={1} winner={winner} />
					{active ? <Timer /> : null}
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	activeBlock: bindActionCreators(activeBlock, dispatch)
});

const mapStateToProps = state => ({
	tournament: state.app.tournament,
});

export default connect(mapStateToProps, mapDispatchToProps)(BattleBlock);
