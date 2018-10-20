// @flow
import 'bootstrap/dist/css/bootstrap-grid.css';
import type {Props} from './flow';
import React, {Component} from 'react';
import 'styles/styles.less';
import styles from './BattleHeader.less';

export class BattleHeader extends Component<Props> {
	props: Props;

	render () {
		return (
			<div className={styles.header}>
				<h6>Бой № <input type="text" /></h6>
			</div>
		);
	}
}

export default BattleHeader;
