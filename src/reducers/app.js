// @flow
import {initialAppState} from 'constants/index';
import type {AppAction, AppState} from 'types/app';
import {FILE, PARTICIPANT, defaultAppAction, BLOCK, SCORE} from 'constants/app';

const app = (state: AppState = initialAppState, action: AppAction = defaultAppAction): AppState => {
	switch (action.type) {
		case FILE.SELECTED:
			return {
				...state,
				listParticipants: action.data.listParticipants,
			};
		case PARTICIPANT.ADD:
			return {
				...state,
				tournament: setTournament(state.tournament, action.data.stage, action.data.block, action.data.item, action.data.value),
			};
		case PARTICIPANT.WINNER:
			return {
				...state,
				participantWinner: {stage: action.data.stage, block: action.data.block, item: action.data.item},
				tournament: setWinner(state.tournament, action.data.stage, action.data.block, action.data.item),
			};
		case BLOCK.ACTIVE:
			return {
				...state,
				activeBlock: isActive(state.activeBlock, action.data.activeBlock)
			};
		case BLOCK.NUMBER:
			return {
				...state,
				tournament: setNumber(state.tournament, action.data.stage, action.data.block, action.data.item, action.data.value)
			};
		case SCORE.CALCULATION:
			return {
				...state,
				tournament: calculationScore(state.tournament, action.data.stage, action.data.block, action.data.item, action.data.action)
			};
		default:
			return state;
	}
};

export default app;

const setTournament = (tournament, stage, block, item, participant) => {
	let battle = tournament[stage][block] || [];
	battle[item] = participant;
	tournament[stage][block] = battle;
	return tournament;
};

const setWinner = (tournament, stage, block, item) => {
	let battle = tournament[stage][block] || [];
	battle.winner = item;
	tournament[stage][block] = battle;
	return tournament;
};

const isActive = (activeBlock, newActiveBlock) => {
	let flag = true;

	activeBlock && activeBlock.map((item, index) => {
		flag = item === newActiveBlock[index] ?  false : true;
	});
	return flag ? newActiveBlock : [];
};

const calculationScore = (tournament, stage, block, item, action) => {
	let battle = tournament[stage][block] || [];

	if (battle[item]) {
		switch (action) {
			case 'INCREASE':
				battle[item].score ++;
				break;
			case 'REDUCE':
				battle[item].score = battle[item].score > 0 ? battle[item].score - 1 : 0;
				break;
		}
	}

	tournament[stage][block] = battle;
	return tournament;
};

const setNumber = (tournament, stage, block, item, value) => {
	let battle = tournament[stage][block] || [];
	battle.battleNumber = value;
	tournament[stage][block] = battle;
	return tournament;
}
