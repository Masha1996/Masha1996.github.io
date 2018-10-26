// @flow
import 'bootstrap/dist/css/bootstrap-grid.css';
import type {Props} from './flow';
import React, {Component} from 'react';
import 'styles/styles.less';
import styles from './BattleHeader.less';

export class BattleHeader extends Component<Props> {
	props: Props;

	handleClick = (e) => {
		e.stopPropagation()
		// const {activeBlock, stage, blockNumber} = this.props;
		// activeBlock && activeBlock(stage, blockNumber);
	};

	hendleBlur = () => {

	};

	render () {
		return (
			<div className={styles.header}>
				<h6>Бой № <input type="text" onClick={this.handleClick} onBlur={this.hendleBlur} /></h6>
			</div>
		);
	}
}

export default BattleHeader;
