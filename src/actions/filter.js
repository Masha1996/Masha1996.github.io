// @flow
import {FILTER_EVENTS} from 'constants/filter';
import type {Dispatch} from 'types';

export const setFilter = (name: string, value: string, add: boolean) => (dispatch: Dispatch) => {
	dispatch({
		type: FILTER_EVENTS.UPDATE,
		data: {name, value, add}
	});
};
