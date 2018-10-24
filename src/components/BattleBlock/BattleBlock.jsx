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
		const {activeBlock, stage, blockNumber} = this.props;
		activeBlock && activeBlock(stage, blockNumber);
	};

	render () {
		const {stage, blockNumber, active} = this.props;

		return (
			<div className={this.getStyles()} onClick={this.handleClick}>
				<div className="flex-item">
					<BattleHeader />
					<ParticipantBlock stage={stage} blockNumber={blockNumber} item={0}/>
					<ParticipantBlock stage={stage} blockNumber={blockNumber} item={1}/>
					{active ? <Timer /> : null}
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	activeBlock: bindActionCreators(activeBlock, dispatch)
});

export default connect(null, mapDispatchToProps)(BattleBlock);
