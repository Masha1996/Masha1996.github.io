// @flow
import type {Props} from './flow';
import React, {Component} from 'react';
// import {styles} from './Header.less';

export class Header extends Component<Props> {
	props: Props;

	render () {
		return (
			<div className="header">
				<div className="settingsGrid">
					<h4>Загрузить сетку из файла</h4>
					<input type="file" name="file" />
				</div>
				<h4>Существующие сетки</h4>
				<div>
					<label>Загрузить существующую сетку:</label>
					<select id="tournaments" />
					<button id="removeGrid" className="settingsGrid">Удалить сетку</button>
				</div>
			</div>
		);
	}
}

export default Header;
