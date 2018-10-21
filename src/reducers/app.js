// @flow
import {initialAppState} from 'constants/index';
import type {AppAction, AppState} from 'types/app';
import {FILE, defaultAppAction} from 'constants/app';

const app = (state: AppState = initialAppState, action: AppAction = defaultAppAction): AppState => {
	switch (action.type) {
		case FILE.SELECTED:
			return {
				...state,
				listParticipants: action.data.listParticipants,
			};
		default:
			return state;
	}
};

export default app;
