// @flow
import {initialAppState} from 'constants/index';
import type {AppAction, AppState} from 'types/app';
import {FILE, PARTICIPANT, defaultAppAction} from 'constants/app';

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
				tournament: setTournament(state.tournament, action.data.stage, action.data.block, action.data.item, action.data.value)
			};
		default:
			return state;
	}
};

export default app;

const setTournament = (tournament, stage, block, item, participant) => {
	let battle = tournament[stage][block] || [] ;
	battle[item] = participant;
	tournament[stage][block] = battle;
	return tournament;
};
