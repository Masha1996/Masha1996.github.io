// @flow
import 'bootstrap/dist/css/bootstrap-grid.css';
import type {Props, State} from './flow';
import React, {Component} from 'react';
import 'styles/styles.less';
import BattleButton from 'components/BattleButton';
import styles from './ParticipantBlock.less';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {participantAdd} from 'actions/app';

export class ParticipantBlock extends Component<Props, State> {
	props: Props;
	state: State;

	handleSelect = (e: Event) => {
		const {stage, item, listParticipants, blockNumber, participantAdd} = this.props;
		const value = e.target.value;
		const participant = listParticipants.filter(item => item.number === value);

		participantAdd && participantAdd(stage, blockNumber, item, participant);
	};

	getParticipantInfo = () => {
		const {tournament, stage, item, blockNumber} = this.props;
		const participantInfo = tournament[stage][blockNumber] ? tournament[stage][blockNumber][item] : null;

		console.log(participantInfo);
		return participantInfo;
	};

	handleClick = (e) => {
		e.stopPropagation()
		// const {activeBlock, stage, blockNumber} = this.props;
		// activeBlock && activeBlock(stage, blockNumber);
	};

	render () {
		const {listParticipants} = this.props;

		return (
			<div className={styles.participantRow}>
				<input className={styles.participantNumber} type="text" name="" onClick={this.handleClick}/>
				<select name="" className={styles.participantName} onChange={this.handleSelect} onClick={this.handleClick}>
					<option value="0"></option>
					{
						listParticipants.map((item, index) => <option key={index} value={item.number}>{item.name}</option> )
					}
				</select>
				<label className="score">0</label>
				<BattleButton content="+" />
				<BattleButton content="-" />
				<BattleButton content="Победитель" />
				<p className={styles.participantInfo}>
					возраст: <span className="age" />,
					кю: <span className="dan" />,
					вес: <span className="weight" />кг,
					клуб: <span className="trainer"/>
				</p>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	participantAdd: bindActionCreators(participantAdd, dispatch)
});

const mapStateToProps = state => ({
	listParticipants: state.app.listParticipants,
	tournament: state.app.tournament
});

export default connect(mapStateToProps, mapDispatchToProps)(ParticipantBlock);
