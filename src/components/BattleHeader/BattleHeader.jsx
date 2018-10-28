// @flow
import 'bootstrap/dist/css/bootstrap-grid.css';
import type {Props} from './flow';
import React, {Component} from 'react';
import 'styles/styles.less';
import styles from './BattleHeader.less';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {battleNumber} from 'actions/app';

export class BattleHeader extends Component<Props> {
	props: Props;

	handleClick = (e) => {
		e.stopPropagation()
		// const {activeBlock, stage, blockNumber} = this.props;
		// activeBlock && activeBlock(stage, blockNumber);
	};

	hendleBlur = (e) => {
		const {stage, item, blockNumber, battleNumber} = this.props;
		const value = e.target.value;
		// localStorage.setItem('fightNumber', value);
		battleNumber && battleNumber(stage, blockNumber, item, value);

	};

	render () {
		return (
			<div className={styles.header}>
				<h6>Бой № <input type="text" onClick={this.handleClick} onBlur={this.hendleBlur} /></h6>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	battleNumber: bindActionCreators(battleNumber, dispatch),
});

export default connect(null, mapDispatchToProps)(BattleHeader);
