// @flow
import 'bootstrap/dist/css/bootstrap-grid.css';
import type {Props, State} from './flow';
import React, {Component} from 'react';
import 'styles/styles.less';
import styles from './ParticipantBlock.less';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {participantAdd, calculationScore, participantWinner} from 'actions/app';

export class ParticipantBlock extends Component<Props> {
	props: Props;
	state: State;

	constructor () {
		super();
		this.state = {
			clicks: 0,
			participant: {
				age: "",
				dan: "",
				name: "",
				number: "",
				score: 0,
				trainer: "",
				weight: ""
			}
		};
	}

	handleSelect = (e: Event) => {
		const {stage, item, listParticipants, blockNumber, participantAdd} = this.props;
		const value = e.target.value;
		const participant = listParticipants.filter(item => item.number === value)[0];

		participantAdd && participantAdd(stage, blockNumber, item, participant);
		this.setState(state => ({
			participant: participant
		}));
	};

	handleClick = (e) => {
		e.stopPropagation();
	};

	handleClickIncrease = (e: Event) => {
		const {stage, item, blockNumber, calculationScore, tournament} = this.props;
		calculationScore && calculationScore('INCREASE', stage, blockNumber, item);
		this.setState(state => ({
			clicks: state.clicks + 1
		}));
		if (item === 0 ) {
			localStorage.setItem('scoreLeft', tournament[stage][blockNumber][item].score);
		} else if (item === 1) {
			localStorage.setItem('scoreRight', tournament[stage][blockNumber][item].score);
		}
		e.stopPropagation();
	};

	handleClickReduce = (e) => {
		const {stage, item, blockNumber, calculationScore, tournament} = this.props;
		calculationScore && calculationScore('REDUCE', stage, blockNumber, item);
		e.stopPropagation();
		this.setState(state => ({
			clicks: state.clicks > 0 ? state.clicks - 1 : 0
		}));
		if (item === 0 ) {
			localStorage.setItem('scoreLeft', tournament[stage][blockNumber][item].score);
		} else if (item === 1) {
			localStorage.setItem('scoreRight', tournament[stage][blockNumber][item].score);
		}
	};

	handleClickWinner = (e) => {
		const {stage, item, blockNumber, participantWinner} = this.props;
		participantWinner && participantWinner(stage, blockNumber, item);
		e.stopPropagation();
	};

	render () {
		const {listParticipants} = this.props;
		const clicks = this.state.clicks || 0;
		const participant = this.state.participant;

		return (
			<div className={styles.participantRow}>
				<input className={styles.participantNumber} type="text" value={participant.number} name="" onClick={this.handleClick}/>
				<select name="" className={styles.participantName} onChange={this.handleSelect} onClick={this.handleClick}>
					<option value="0" />
					{
						listParticipants.map((item, index) => <option key={index} value={item.number}>{item.name}</option> )
					}
				</select>
				<label className="score">{clicks}</label>
				<button className="" onClick={this.handleClickIncrease}> + </button>
				<button className="" onClick={this.handleClickReduce}> - </button>
				<button className="" onClick={this.handleClickWinner}>Победитель</button>
				<p className={styles.participantInfo}>
					возраст: {participant.age},
					кю: {participant.dan},
					вес: {participant.weight}кг,
					клуб: {participant.trainer}
				</p>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	participantAdd: bindActionCreators(participantAdd, dispatch),
	calculationScore: bindActionCreators(calculationScore, dispatch),
	participantWinner: bindActionCreators(participantWinner, dispatch)
});

const mapStateToProps = state => ({
	listParticipants: state.app.listParticipants,
	tournament: state.app.tournament,
});

export default connect(mapStateToProps, mapDispatchToProps)(ParticipantBlock);
