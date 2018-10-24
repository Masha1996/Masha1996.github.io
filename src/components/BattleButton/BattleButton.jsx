// @flow
import 'bootstrap/dist/css/bootstrap-grid.css';
import type {Props} from './flow';
import React, {Component} from 'react';
import 'styles/styles.less';

export class BattleButton extends Component<Props> {
	props: Props;

	handleClick = (e) => {
		e.stopPropagation()
		// const {activeBlock, stage, blockNumber} = this.props;
		// activeBlock && activeBlock(stage, blockNumber);
	};

	render () {
		const {content} = this.props;
		return (
			<button className="" onClick={this.handleClick}>{content}</button>
		);
	}
}

export default BattleButton;
