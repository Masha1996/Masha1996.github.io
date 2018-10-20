// @flow
import type {Dispatch} from 'types';


export const citySelection = (cityId: number) => (dispatch: Dispatch) => {
	dispatch({
		type: 'citySelection',
		data: {
			cityId
		}
	});
};
