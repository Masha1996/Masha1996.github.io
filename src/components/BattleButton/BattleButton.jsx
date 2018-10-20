// @flow
import 'bootstrap/dist/css/bootstrap-grid.css';
import type {Props} from './flow';
import React, {Component} from 'react';
import 'styles/styles.less';

export class BattleButton extends Component<Props> {
	props: Props;

	render () {
		const {content} = this.props;
		return (
			<button className="">{content}</button>
		);
	}
}

export default BattleButton;
