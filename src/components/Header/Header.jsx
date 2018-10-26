// @flow
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import type {Props, State} from './flow';
import React, {Component} from 'react';
import styles from './Header.less';
import {listParticipants} from 'actions/app';

export class Header extends Component<Props, State> {
	props: Props;
	state: State;

	fileSelect = (e: Event) => {
			const {listParticipants} = this.props;
			listParticipants && listParticipants(e.target);

		localStorage.setItem('leftPlayerName', '');
		localStorage.setItem('leftPlayerNumber', '');
		localStorage.setItem('rightPlayerName', '');
		localStorage.setItem('rightPlayerNumber', '');
		localStorage.setItem('NextLeftPlayerName', '');
		localStorage.setItem('NextLeftPlayerNumber', '');
		localStorage.setItem('NextRightPlayerName', '');
		localStorage.setItem('NextRightPlayerNumber', '');
		localStorage.setItem('timeLabel', '');
		localStorage.setItem('fightNumber', '');
		localStorage.setItem('scoreLeft', '');
		localStorage.setItem('scoreRight', '');
	};

	render () {
		return (
			<div className={styles.header}>
				<div className="settingsGrid">
					<h4>Загрузить сетку из файла</h4>
					<input type="file" name="file" className={styles.fileInput} onChange={this.fileSelect} />
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

const mapDispatchToProps = dispatch => ({
	listParticipants: bindActionCreators(listParticipants, dispatch)
});

export default connect(null, mapDispatchToProps)(Header);
