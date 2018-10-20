// @flow
import {CART_EVENTS} from 'constants/cart';
import type {Dispatch} from 'types';

export const addToCart = (subtotal: string) => (dispatch: Dispatch) => {
	dispatch({
		type: CART_EVENTS.ADD,
		data: {
			subtotal
		}
	});
};
